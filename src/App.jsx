import { useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import PatientList from './components/PatientList';
import { stringify } from 'postcss';
function App() {
  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});
  const patientsLS = JSON.parse(localStorage.getItem('patients')) ?? [];
  useEffect(() => {
    setPatients(patientsLS);
  }, []);
  useEffect(() => {
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]);

  const deletePatient = id => {
    const UpdatedPatients = patients.filter(e => e.id !== id);
    setPatients(UpdatedPatients);
  };
  return (
    <div className="container mx-auto">
      <Header />
      <div className="md:flex mt-20">
        <Form
          patient={patient}
          setPatient={setPatient}
          patients={patients}
          setPatients={setPatients}
        />
        <PatientList
          patients={patients}
          setPatient={setPatient}
          deletePatient={deletePatient}
        />
      </div>
    </div>
  );
}

export default App;
