import React, { useState } from "react";
import PopupComponent from "./components/PopupComponent";
import BodyComponet from "./pages/BodyComponet";
import HeaderComponent from "./pages/HeaderComponent";

function App() {
  const [ popupObject, setpopupObject ] = useState({});

  function closeExsisitingPopup() {
    popupObject.setShowPopup && popupObject.setShowPopup( { showPopup : false } );
  }

  function setpopupObjectHanlder( setShowPopup ){
    setpopupObject( { setShowPopup } )
  }

  return (
    <div className="App">
      <HeaderComponent closeExsisitingPopup={ closeExsisitingPopup } setShowPopup={ setpopupObjectHanlder }></HeaderComponent>
      <br></br>
      <br></br>
      <br></br>
      <BodyComponet></BodyComponet>
      
    </div>
  );
}

export default App;
