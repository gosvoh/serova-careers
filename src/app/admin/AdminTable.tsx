"use client";

import {
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import {
  Button,
  Col,
  ConfigProvider,
  Input,
  Modal,
  Popconfirm,
  Row,
  Space,
  Table,
  notification,
} from "antd";
import ruLocale from "antd/locale/ru_RU";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";

function SubmitBtn({
  setPending,
  children,
}: React.PropsWithChildren<{ setPending: (pending: boolean) => void }>) {
  const { pending } = useFormStatus();

  useEffect(() => setPending(pending), [pending, setPending]);
  useEffect(() => console.log(pending), [pending]);

  return (
    <Button htmlType="submit" type="primary" loading={pending}>
      {children}
    </Button>
  );
}

export default function AdminTable({
  materials,
  onDelete,
  onUpload,
  onEdit,
}: {
  materials: { title: string; path: string }[];
  onUpload: (formData: FormData) => Promise<void>;
  onDelete: (file: string) => Promise<void>;
  onEdit: (formData: FormData) => Promise<void>;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [pending, setPending] = useState(false);
  const [api, context] = notification.useNotification();
  const [selectedFile, setSelectedFile] =
    useState<(typeof materials)[number]>();

  return (
    <ConfigProvider locale={ruLocale}>
      {context}
      <Modal
        title={`${selectedFile ? "Изменить" : "Добавить"} файл`}
        open={modalOpen}
        confirmLoading={pending}
        footer={null}
        onCancel={() => setModalOpen(false)}
        centered
        destroyOnClose
        afterOpenChange={(open) => !open && setSelectedFile(undefined)}
      >
        <form
          action={async (fd) => {
            const title = fd.get("title") as string;
            const file = fd.get("file") as File;
            if (!file.name) fd.delete("file");
            if (!selectedFile && !file.name) {
              api.error({ message: "Выберите файл!" });
              return;
            }
            if (materials.find((x) => x.title === title)) {
              api.error({ message: "Введите другое название!" });
              return;
            }
            if (!selectedFile) onUpload(fd).then(() => setModalOpen(false));
            else {
              fd.set("oldTitle", selectedFile.title);
              onEdit(fd).then(() => setModalOpen(false));
            }
          }}
        >
          <Row gutter={[16, 16]}>
            <Col
              span={24}
              md={{ span: 8 }}
              className="text-end !flex items-center"
            >
              <label htmlFor="title" className="text-sm md:ml-auto mr-2">
                Название:
              </label>
            </Col>
            <Col span={24} md={{ span: 16 }}>
              <Input
                defaultValue={selectedFile?.title ?? ""}
                required
                name="title"
                id="title"
                disabled={pending}
                allowClear
              />
            </Col>

            <Col
              span={24}
              md={{ span: 8 }}
              className="text-end !flex items-center"
            >
              <label htmlFor="file" className="text-sm md:ml-auto mr-2">
                Файл:
              </label>
            </Col>
            <Col span={24} md={{ span: 16 }}>
              <Input type="file" name="file" id="file" disabled={pending} />
            </Col>

            <Col span={24} md={{ offset: 8, span: 16 }}>
              <Space>
                <SubmitBtn setPending={setPending}>
                  {selectedFile ? "Сохранить" : "Добавить"}
                </SubmitBtn>
                <Button
                  htmlType="reset"
                  onClick={() => setModalOpen(false)}
                  disabled={pending}
                >
                  Отмена
                </Button>
              </Space>
            </Col>
          </Row>
        </form>
      </Modal>
      <Space direction="vertical" className="w-full">
        <Table
          dataSource={materials}
          rowKey={(x) => x.title}
          pagination={false}
          className="mt-8"
          columns={[
            {
              title: "Название",
              render: (_, record) => (
                <Link
                  href={`/uploads/${record.path}`}
                  target="_blank"
                  prefetch={false}
                >
                  {record.title}
                </Link>
              ),
            },
            {
              title: "Действия",
              width: 200,
              render: (_, record) => (
                <Space wrap>
                  <Button
                    icon={<EditOutlined />}
                    onClick={() => {
                      setSelectedFile(record);
                      setModalOpen(true);
                    }}
                  />
                  <Popconfirm
                    title="Удалить файл?"
                    onConfirm={async () => onDelete(record.title)}
                  >
                    <Button danger icon={<DeleteOutlined />} />
                  </Popconfirm>
                </Space>
              ),
            },
          ]}
        />
        <Button onClick={() => setModalOpen(true)} icon={<UploadOutlined />}>
          Загрузить файл
        </Button>
      </Space>
    </ConfigProvider>
  );
}
