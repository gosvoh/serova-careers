import fs from "node:fs/promises";
import AdminTable from "./AdminTable";
import { revalidatePath } from "next/cache";
import { AntdRegistry } from "@ant-design/nextjs-registry";

export const revalidate = 0;

export default async function Admin() {
  let materials: { [title: string]: string } = {};

  try {
    const db = await fs.readFile("./uploads/uploads.json");
    const files: typeof materials = JSON.parse(String(db));
    materials = files;
  } catch {}

  return (
    <AntdRegistry>
      <AdminTable
        materials={Object.entries(materials).map(([title, path]) => ({
          title,
          path,
        }))}
        onUpload={async (formData: FormData) => {
          "use server";

          const title = formData.get("title") as string | undefined;
          const file = formData.get("file") as File | undefined;

          try {
            if (!title || !file)
              throw new Error(`title: ${title} || file: ${file}`);
            if (materials[title])
              throw new Error(`materials[title]: ${materials[title]}`);
            if (title === "uploads.json")
              throw new Error(`title === "uploads.json"`);

            const fileBuffer = await file.arrayBuffer();
            const newFileName =
              title.replace(/[/\\?%*:|"<>.]/g, "") +
              "." +
              file.type.split("/").pop();
            await fs.writeFile(
              `./uploads/${newFileName}`,
              new Uint8Array(fileBuffer)
            );
            materials[title] = newFileName;
            await fs.writeFile(
              "./uploads/uploads.json",
              JSON.stringify(materials)
            );
          } catch (e) {
            console.error(e);
          } finally {
            revalidatePath("/");
          }
        }}
        onDelete={async (title: string) => {
          "use server";

          try {
            if (title === "uploads.json")
              throw new Error(`title === "uploads.json"`);
            const toDelete = materials[title];
            await fs.unlink(`./uploads/${toDelete}`);
            delete materials[title];
            await fs.writeFile(
              "./uploads/uploads.json",
              JSON.stringify(materials)
            );
          } catch (e) {
            console.error(e);
          } finally {
            revalidatePath("/");
          }
        }}
        onEdit={async (formData: FormData) => {
          "use server";

          const title = formData.get("title") as string | undefined;
          const oldTitle = formData.get("oldTitle") as string | undefined;
          const file = formData.get("file") as File | undefined;

          try {
            if (!title || !oldTitle)
              throw new Error(`title: ${title} || oldTitle: ${oldTitle}`);
            if (materials[title])
              throw new Error(`materials[title]: ${materials[title]}`);
            if (title === "uploads.json")
              throw new Error(`title === "uploads.json"`);

            const path = materials[oldTitle];
            const newFileName =
              title.replace(/[/\\?%*:|"<>.]/g, "") +
              "." +
              materials[oldTitle].split(".").pop();
            materials[title] = newFileName;
            delete materials[oldTitle];
            await fs.writeFile(
              "./uploads/uploads.json",
              JSON.stringify(materials)
            );

            if (!file) {
              await fs.rename(`./uploads/${path}`, `./uploads/${newFileName}`);
              return;
            }

            const fileBuffer = await file.arrayBuffer();
            await fs.writeFile(
              `./uploads/${newFileName}`,
              new Uint8Array(fileBuffer)
            );
            await fs.unlink(`./uploads/${path}`);
          } catch (e) {
            console.error(e);
          } finally {
            revalidatePath("/");
          }
        }}
      />
    </AntdRegistry>
  );
}
