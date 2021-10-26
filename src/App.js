import React, { useState } from 'react'
import './App.css';
import axios from 'axios'

function App() {

    // const [name, setName] = useState("")
    // const [age, setAge] = useState(0)
    // const [country, setCountry] = useState("")
    // const [position, setPosition] = useState("")
    // const [wage, setWage] = useState(0)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [employeeList, setEmployeeList] = useState([])


    const addEmployee = () => {
        axios.post('https://react-express-sql-app.herokuapp.com/user', {
           email, 
           password
        }).then(() => {
            console.log('success');
        })
    }

    const getEmployees = () => {
        axios.get('https://react-express-sql-app.herokuapp.com/user')
            .then((response) => {
                setEmployeeList(response.data)
            })
    }


    return (
        <div className="App">
            <div className="information">
                <label >Email:</label>
                <input type="text" onChange={(e) => { setEmail(e.target.value) }} />

                <label >Password:</label>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} />

                <button onClick={addEmployee}>Add Employee</button>
            </div>

            <div className="employees">
                <button onClick={getEmployees}>Show employees</button>
            </div>

            {employeeList.map((val, key) => {   
                return <div className='employee'>
                    <h3>{val.email}</h3>
                    <h3>{val.password}</h3>
                </div>
            })}
        </div>
    );
}

export default App;
