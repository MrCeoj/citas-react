function Practica() {
  return (
    <div className="flex justify-center p-8 w-[100%]">
      <form className="my-10 p-10 w-96 bg-teal-900 rounded-xl text-stone-100">
        <label htmlFor="user">Usuario:</label>
        <input type="text" id="name" name="user" placeholder="Introduce tu usuario" className="block w-full mt-2 p-2 mb-4 rounded-md" />
        <label htmlFor="pass">Contraseña:</label>
        <input type="email" id="email" name="pass" placeholder="Introduce tu contraseña" className="block w-full mt-2 p-2 mb-4 rounded-md" />
        <button className="mt-6 bg-cyan-600 text-white p-2 w-full rounded md">Iniciar sesión</button>
      </form>
    </div>
  );
}

export default Practica;
