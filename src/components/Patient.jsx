function Patient({ patients, setPatient, deletePatient }) {
  const { name, owner, email, discharge, symptom, id } = patients;

  const handleDelet = () => {
    const response = confirm('¿Deseas eliminar este paciente?');
    if (response) deletePatient(id);
  };
  return (
    <div className="bg-white shadow-md rounded-lg mx-3 md:mr-0 mb-3  px-5 py-10">
      <p className="uppercase font-bold text-gray-700 mb-3 ">
        Nombre: <span className="font-normal normal-case">{name}</span>
      </p>
      <p className="uppercase font-bold text-gray-700 mb-3 ">
        Propietario: <span className="font-normal normal-case">{owner}</span>
      </p>
      <p className="uppercase font-bold text-gray-700 mb-3 ">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>
      <p className="uppercase font-bold text-gray-700 mb-3 ">
        Fecha Alta: <span className="font-normal normal-case">{discharge}</span>
      </p>
      <p className="uppercase font-bold text-gray-700 mb-3 ">
        Síntomas: <span className="font-normal normal-case">{symptom}</span>
      </p>
      <div className="flex justify-between mt-10">
        <button
          className="py-2 px-10 uppercase font-bold bg-indigo-600 hover:bg-indigo-700 transition-colors text-white"
          onClick={() => setPatient(patients)}
        >
          Editar
        </button>
        <button
          className="py-2 px-10 uppercase font-bold bg-red-600 hover:bg-red-700 transition-colors text-white"
          onClick={handleDelet}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Patient;
