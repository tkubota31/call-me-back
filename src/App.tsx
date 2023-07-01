import React, {useState} from 'react';

import Homepage from "./pages/Homepage"
import Registration from "./pages/Registration"
import Login from "./pages/Login"
import {FDA} from "./api"

function App() {
  const[currentUser, setCurrentUser] = useState(null)

  async function register(data : any){
    console.log("Register function", data)
      FDA.register(data)
  }



  return (
    <div className="App">
      <Homepage name="Taioh"/>
      <Registration register={register} />
      <Login />
    </div>
  );
}

export default App;
