import Paciente from "./Paciente";
import PropTypes from "prop-types";

const ListadoPacientes = ({
  pacientes,
  setPaciente,
  eliminarPaciente,
  images,
}) => {
  const hancleClear = () => {
    if (pacientes.length === 0) return alert("No hay registros para eliminar");
    const response = confirm("¿Estás seguro de eliminar todos los registros?");
    if (response) {
      localStorage.clear();
      window.location.reload();
    }
  };

  return (
    <div className="w-auto lg:w-3/5 relative">
      <h2 className="font-bold text-3xl text-center">Listado Pacientes</h2>
      {pacientes.length > 0 && (
        <button
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-6 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded-lg"
          onClick={() => hancleClear()}
        >
          Vaciar registros
        </button>
      )}
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus {""}
        <span className="text-indigo-600 font-semibold ">
          Pacientes y Citas
        </span>
      </p>
      <div
        className="flex flex-col overflow-y-auto gap-y-5"
        style={{ maxHeight: "865px" }}
      >
        {pacientes.map((paciente) => (
          <Paciente
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
            images={images}
          />
        ))}
      </div>
    </div>
  );
};

ListadoPacientes.propTypes = {
  pacientes: PropTypes.array.isRequired,
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired,
};

export default ListadoPacientes;
