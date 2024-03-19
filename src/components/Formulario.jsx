import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FormInput from "./FormInput";
import ProfileSelector from "./ProfileSelector";

const Formulario = ({
  pacientes,
  setPacientes,
  paciente,
  setPaciente,
  images,
}) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [telefono, setTelefono] = useState("");
  const [editing, setEditing] = useState(false);

  const [error, setError] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const profiles = ["perro", "gato", "rata", "pou"];
  const [perfil, setPerfil] = useState(profiles[0]);

  useEffect(() => {
    console.log(perfil);
  }, [perfil]);

  const genId = () => {
    const random = Math.random().toString(36).substr(2);
    const date = Date.now().toString(36);
    return random + date;
  };

  const hasNums = /\d/;

  const valNombre = (nombre) => {
    if (nombre.trim() === "") {
      return true;
    }
    if (hasNums.test(nombre)) {
      return true;
    }
  };

  const valPropietario = (propietario) => {
    return propietario.trim() === "" || hasNums.test(propietario);
  };

  const valEmail = (email) => {
    return email.trim() === "" || !email.includes("@");
  };

  const valFecha = (fecha) => {
    return fecha.trim() === "";
  };

  const valSintomas = (sintomas) => {
    return sintomas.trim() === "";
  };

  const valTelefono = (telefono) => {
    if (telefono.trim() === "") {
      return true;
    }
    if (telefono.length != 10) {
      return true;
    }
    if (!hasNums.test(telefono)) {
      return true;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (valNombre(nombre)) {
      setError(true);
      setMensaje("Nombre de la mascota no valido");
      return;
    }
    if (valPropietario(propietario)) {
      setError(true);
      setMensaje("Nombre del dueño no valido");
      return;
    }
    if (!editing && pacientes.some((p) => p.propietario === propietario)) {
      setError(true);
      setMensaje("Nombre del propietario ya existe");
      return;
    }
    if (valEmail(email)) {
      setError(true);
      setMensaje("Email no valido");
      return;
    }
    if (valFecha(fecha)) {
      setError(true);
      setMensaje("Fecha no valida");
      return;
    }
    if (valSintomas(sintomas)) {
      setError(true);
      setMensaje("Sintomas no validos");
      return;
    }

    if (valTelefono(telefono)) {
      setError(true);
      setMensaje("Formato de teléfono no válido");
      return;
    }

    const id = genId();

    const objPaciente = {
      id,
      nombre,
      propietario,
      email,
      telefono,
      fecha,
      sintomas,
      perfil,
    };

    setPacientes([...pacientes, objPaciente]);

    if (paciente.id) {
      objPaciente.id = paciente.id;

      const updated = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objPaciente : pacienteState
      );
      setPacientes(updated);
      setPaciente({});
    } else {
      objPaciente.id = genId();
      setPacientes([...pacientes, objPaciente]);
    }

    setError(false);
    setEditing(false);
    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
    setTelefono("");
    setPerfil(profiles[0]);
  };

  useEffect(() => {
    setNombre(paciente.nombre || "");
    setPropietario(paciente.propietario || "");
    setEmail(paciente.email || "");
    setFecha(paciente.fecha || "");
    setSintomas(paciente.sintomas || "");
    setTelefono(paciente.telefono || "");
    setPerfil(paciente.perfil || profiles[0]);
    setEditing(true);
  }, [paciente]);

  return (
    <div className="md:w-1/2 lg:w-2/5 mb-10">
      <h2 className="font-bold text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-semibold">administralos</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mt-10"
        onSubmit={handleSubmit}
      >
        <FormInput
          value={nombre}
          onChange={(e) => {
            setNombre(e.target.value);
          }}
          type="text"
          label="Nombre Mascota:"
          placeholder="Nombre de la mascota"
        />
        <FormInput
          value={propietario}
          onChange={(e) => {
            setPropietario(e.target.value);
          }}
          type="text"
          label="Nombre Dueño:"
          placeholder="Nombre del dueño"
        />
        <FormInput
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type="text"
          label="Email Dueño:"
          placeholder="Email del dueño"
        />
        <FormInput
          value={telefono}
          onChange={(e) => {
            setTelefono(e.target.value);
          }}
          type="text"
          label="Teléfono"
          placeholder="Teléfono del dueño"
        />
        <FormInput
          value={fecha}
          onChange={(e) => {
            setFecha(e.target.value);
          }}
          type="date"
          label="Alta"
          placeholder=""
        />
        <FormInput
          value={sintomas}
          onChange={(e) => {
            setSintomas(e.target.value);
          }}
          type="textarea"
          label="Síntomas"
          placeholder="Describe los síntomas"
        />
        <ProfileSelector
          profiles={profiles}
          perfil={perfil}
          setPerfil={setPerfil}
          images={images}
        />
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 w-full rounded-md mt-5">
          {" "}
          {paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        </button>
      </form>
      {error && (
        <div className=" bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded-md">
          <p>Error en informacion, {mensaje}</p>
        </div>
      )}
    </div>
  );
};

Formulario.propTypes = {
  pacientes: PropTypes.array.isRequired,
  setPacientes: PropTypes.func.isRequired,
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired,
};

export default Formulario;
