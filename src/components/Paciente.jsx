import PropTypes from "prop-types";

const Paciente = ({ paciente, setPaciente, eliminarPaciente, images }) => {
  const handleDelete = (p) => {
    const response = confirm("¿Estás seguro de eliminar " + p.nombre + "?");
    if (response) {
      eliminarPaciente(p.id);
    }
  };

  return (
    <div className="mx-5 bg-white shadow-md px-5 py-10 rounded-xl flex flex-wrap justify-evenly">
      <div className="w-auto flex flex-col justify-center text-center mb-5">
        <p className="block text-gray-700 uppercase font-bold">Perfil</p>
        <img
          className="mx-2 bg-white border-2 p-2 placeholder-gray-400 rounded-md "
          width={250}
          src={images[paciente.perfil]}
          alt={paciente.perfil}
        />
      </div>
      <div>
        <p className="font-semibold mb-3 text-gray-700 uppercase">
          Nombre: {""}
          <span className="font-normal normal-case">{paciente.nombre}</span>
        </p>

        <p className="font-semibold mb-3 text-gray-700 uppercase">
          Propietario: {""}
          <span className="font-normal normal-case">
            {paciente.propietario}
          </span>
        </p>

        <p className="font-semibold mb-3 text-gray-700 uppercase">
          Email: {""}
          <span className="font-normal normal-case">{paciente.email}</span>
        </p>

        <p className="font-semibold mb-3 text-gray-700 uppercase">
          Teléfono: {""}
          <span className="font-normal">{paciente.telefono}</span>
        </p>

        <p className="font-semibold mb-3 text-gray-700 uppercase">
          Fecha Alta: {""}
          <span className="font-normal normal-case">{paciente.fecha}</span>
        </p>

        <p className="font-semibold mb-3 text-gray-700 uppercase">
          Síntomas: {""}
          <span className="font-normal normal-case">{paciente.sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
          <button
            type="button"
            className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
            onClick={() => setPaciente(paciente)}
          >
            Editar
          </button>

          <button
            type="button"
            className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
            onClick={() => handleDelete(paciente)}
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  );
};

Paciente.propTypes = {
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired,
};

export default Paciente;
