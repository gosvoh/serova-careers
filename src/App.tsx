import hr from "/hr.jpg";
import "./App.css";

function App() {
  return (
    <>
      <img
        src={hr}
        alt="Nadezhda Serova photo"
        style={{
          borderRadius: "1rem",
        }}
      />
      <h1
        style={{
          fontFamily: "Borel",
        }}
      >
        Careers worth pursuing
      </h1>
    </>
  );
}

export default App;
