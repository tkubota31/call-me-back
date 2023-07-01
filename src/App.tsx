import React, {useState} from 'react';

import Homepage from "./pages/Homepage"
import Registration from "./pages/Registration"
import Login from "./pages/Login"


function App() {
  const[currentUser, setCurrentUser] = useState(null)



  return (
    <div className="App">
      <Homepage name="Taioh"/>
      <Registration />
      <Login />
    </div>
  );
}

export default App;
