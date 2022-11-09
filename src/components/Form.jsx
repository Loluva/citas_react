import { useState, useEffect } from 'react';
import Error from './Error';
function Form({ patient, setPatient, patients, setPatients }) {
  const [name, setName] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [discharge, setDischarge] = useState('');
  const [symptom, setSymptom] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!(Object.keys(patient).length > 0)) return;
    setName(patient.name);
    setOwner(patient.owner);
    setEmail(patient.email);
    setDischarge(patient.discharge);
    setSymptom(patient.symptom);
  }, [patient]);

  const generarId = () => {
    return Math.random().toString(36).slice(2) + Date.now();
  };

  const handleSubmit = e => {
    e.preventDefault();

    //validación del formulario
    if ([name, owner, email, discharge, symptom].includes('')) {
      setError(true);
      return;
    }

    const ObjPatient = {
      name,
      owner,
      email,
      discharge,
      symptom,
    };
    if (patient.id) {
      //Editar un paciente exitente
      ObjPatient.id = patient.id;
      const UpdatedPatients = patients.map(e =>
        e.id === patient.id ? ObjPatient : e
      );
      console.log(UpdatedPatients);
      UpdatedPatients;
      setPatients(UpdatedPatients);
      setPatient({});
    } else {
      //Crear nuevo paciente
      ObjPatient.id = generarId();
      setPatients([...patients, ObjPatient]);
    }

    //Reiniciar campos
    setName('');
    setOwner('');
    setEmail('');
    setDischarge('');
    setSymptom('');

    setError(false);
  };
  return (
    <div className="wd:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
      <p className="text-lg mt-5 mb-2 text-center">
        Añade pacientes y{' '}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        className="bg-white shadow-md mx-3 md:mr-0 mb-10 py-10 px-5 rounded-lg"
        onSubmit={handleSubmit}
      >
        {error && <Error>Todos los campos son obligatorios</Error>}
        <div className="mb-5">
          <label
            className="block uppercase text-gray-700 font-bold"
            htmlFor="pet"
          >
            Nombre Mascota
          </label>
          <input
            id="pet"
            className="placeholder-gray-400 border border-gray-300 focus:border-indigo-600 rounded-md w-full mt-2 p-2 "
            type="text"
            placeholder="Nombre de la mascota"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block uppercase text-gray-700 font-bold"
            htmlFor="owner"
          >
            Nombre Propietario
          </label>
          <input
            id="owner"
            className="placeholder-gray-400 border border-gray-300 focus:border-indigo-600 rounded-md w-full mt-2 p-2 "
            type="text"
            placeholder="Nombre del propietario"
            value={owner}
            onChange={e => setOwner(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block uppercase text-gray-700 font-bold"
            htmlFor="email"
          >
            Email propiertario
          </label>
          <input
            id="email"
            className="placeholder-gray-400 border border-gray-300 focus:border-indigo-600 rounded-md w-full mt-2 p-2 "
            type="email"
            placeholder="Email contacto propietario"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block uppercase text-gray-700 font-bold"
            htmlFor="discharge"
          >
            Fecha de alta
          </label>
          <input
            id="discharge"
            className="placeholder-gray-400 border border-gray-300 focus:border-indigo-600 rounded-md w-full mt-2 p-2 "
            type="date"
            value={discharge}
            onChange={e => setDischarge(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            className="block uppercase text-gray-700 font-bold"
            htmlFor="symptom"
          >
            Síntomas
          </label>
          <textarea
            id="symptom"
            className="placeholder-gray-400 border border-gray-300 focus:border-indigo-600 rounded-md w-full mt-2 p-2 "
            placeholder="Describe los síntomas"
            value={symptom}
            onChange={e => setSymptom(e.target.value)}
          />
        </div>
        <input
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold cursor-pointer hover:bg-indigo-700 transition-colors"
          type="submit"
          value={patient.id ? 'Editar paciente' : 'Agregar pacientes'}
        />
      </form>
    </div>
  );
}

export default Form;
