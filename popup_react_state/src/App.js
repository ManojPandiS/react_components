import React, { useState } from "react";
import BodyComponet from "./pages/BodyComponet";
import HeaderComponent from "./pages/HeaderComponent";

function App() {
  const [ popupObj, setpopupObj ] = useState({});

  return (
    <div className="App">
      <HeaderComponent 
        setpopupObj={ setpopupObj }
        popupObj={ popupObj }
      />
      <BodyComponet 
        setpopupObj={ setpopupObj }
        popupObj={ popupObj }
      />
      
    </div>
  );
}

export default App;
