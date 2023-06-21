// import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { FormComponent } from './Components/FormComponent';
import { FormInput } from './Components/FormInput';

// import Dashboard from './Components/Dashboard';

function App() {
  const [ formData, setFormData ] = useState({}); // Form State

  // Change events for the inputs
  const updateFormData = (e) => setFormData({...formData, [e.target.name] : e.target.value});

  //  Submit Event
  const submitData = (e) => {
    e.preventDefault();

    alert("You Are Submitting the form!");

    console.log(formData)
  }

  return (
   <div className='relative flex'>
      <div className='w-2/10 sticky top-0 bg-blue-700'>
       <Navbar />
      </div>

     <FormComponent
      formData={formData}
      submitEvent={submitData}
      inputs={[
        <FormInput type="text" label="Name" changeEvent={updateFormData} name="name" value={formData.name}/>,
        <FormInput type="number" label="Salary" changeEvent={updateFormData} name="salary" value={formData.salary}/>,
        <FormInput type="number" label="age" changeEvent={updateFormData} name="age" value={formData.age}/>,
        <FormInput type="password" label="password" changeEvent={updateFormData} name="password" value={formData.password}/>
     ]}/>
   </div>
  );
}


export default App;
