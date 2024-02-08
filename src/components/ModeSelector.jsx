import React from 'react'

function modeSelector(props) {
  return (
    <div>
      <button onClick={props.toggleMode} className= {"mode-button button-mode-"+props.mode}>{props.mode}</button>
    </div>
  )
}

export default modeSelector