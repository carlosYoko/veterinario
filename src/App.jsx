import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(pacientesLS);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  function eliminarPaciente(id) {
    const pacientesActualizados = pacientes.filter(
      (paciente) => paciente.id !== id
    );
    setPacientes(pacientesActualizados);
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPaciente={setPaciente}
          paciente={paciente}
          setPacientes={setPacientes}
          pacientes={pacientes}
        />
        <ListadoPacientes
          setPaciente={setPaciente}
          pacientes={pacientes}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
