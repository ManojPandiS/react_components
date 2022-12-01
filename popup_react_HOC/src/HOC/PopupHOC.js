import React, { useState } from 'react';

let currentPopup;
const PopupHOC = ( WrappedComponent, PopupWrappedComponent ) => {
    function NewComponet( props ) {

      const [ showPopup, setShowPopup ] = useState( false )
      
      function handleClick() {
        currentPopup?.setShowPopup( false );
        setShowPopup( !showPopup );
        !showPopup && ( currentPopup = { setShowPopup } );
      }

      return (
          <>
            <WrappedComponent handleClick={ handleClick } text={ props.text }></WrappedComponent>
            {
              showPopup && <PopupWrappedComponent></PopupWrappedComponent>
            }
          </>
        )
    }
    return NewComponet;
}

export default PopupHOC;