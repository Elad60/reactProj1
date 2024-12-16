import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MyCSS/App.css'
import ButtonsBackground from './MyComponent/ButtonsBackground'
import Form from './MyComponent/Form'
import Table from './MyComponent/Table'
function App() {
  return (
    <>
      <div className="button-container">
        <h5>Question 1:</h5>
        <ButtonsBackground />
      </div>
      
      <div className="form-container">
      <h5>Question 2:</h5>
        <Form />
      </div>
      
      <div className="table-container">
      <h5>Question 3:</h5>
        <Table />
      </div>
    </>
  );
}


export default App
