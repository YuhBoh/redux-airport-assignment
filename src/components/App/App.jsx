import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

function App() {
  const [airlineInput, setAirlineInput] = useState('');

  const airlines =useSelector((store) => store.airlines);

  const dispatch = useDispatch();
  
  const addAirline = (event) => {
    event.preventDefault();
    
    dispatch({
      type: 'ADD_AIRLINE',
      payload: airlineInput
    })
    setAirlineInput('')
}

 

  return (
    <div>
      <h1>Redux Airport</h1>

      <form onSubmit={addAirline}>
        <input
          type='text' 
          placeholder='Airline Name'
          value={airlineInput}
          onChange={(event) => setAirlineInput(event.target.value)} />
        <button>Add Airline</button>

        <table>{/* Airlines should be listed here */}
          <thead><th>✈️ Airlines ✈️</th></thead>
            <tbody>
              {
                airlines.map((airline) => {
                  return (
                    <tr key={airline}>
                      <td >
                         {airline} 🛩️🔥
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
