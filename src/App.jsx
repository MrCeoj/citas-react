import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import perro from "./assets/profiles/profile1.png";
import gato from "./assets/profiles/profile2.png";
import rata from "./assets/profiles/profile3.png";
import pou from "./assets/profiles/profile4.png";

function App() {
  const [pacientes, setPacientes] = useState(
    JSON.parse(localStorage.getItem("pacientes")) ?? []
  );
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const updated = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(updated);
  };

  const images = { perro, gato, rata, pou };

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
          images={images}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
          images={images}
        />
      </div>
    </div>
  );
}

export default App;
