import Patient from './Patient';
function PatientList({ patients, setPatient, deletePatient }) {
  return (
    <div className="md:w-1/2 lg:w-3/5 ">
      {patients && patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado pacientes</h2>
          <p className="text-lg mt-5 mb-2 text-center">
            Administra tus{' '}
            <span className="font-bold text-indigo-600">Pacientes y Citas</span>
          </p>
          <div className="md:h-screen md:overflow-y-scroll">
            {patients.map(e => (
              <Patient
                key={e.id}
                patients={e}
                setPatient={setPatient}
                deletePatient={deletePatient}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-lg mt-5 mb-2 text-center">
            Comienza a agregar nuevos{' '}
            <span className="font-bold text-indigo-600">Pacientes</span>
          </p>
        </>
      )}
    </div>
  );
}

export default PatientList;
