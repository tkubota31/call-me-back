import React, {useState} from 'react';

import AppHeader from "./components/AppHeader/AppHeader";
import Homepage from "./pages/Homepage"
import Registration from "./pages/Registration"
import Login from "./pages/Login"


function App() {
  const[currentUser, setCurrentUser] = useState('')



  return (
    <div className="App">
      <AppHeader currentUser={currentUser} />
      <Homepage name="Taioh"/>
      <Registration />
      <Login />
    </div>
  );
}

export default App;
