import React from 'react'

function Button({handleClick,children}) {
  return (
    <button onClick={handleClick} style={{
        backgroundColor: "#2AA7FF",
        borderRadius: "8px",
        border: "none",
        color: 'white',
        padding: "10px 20px",
        fontFamily: "Poppins",
        fontWeight: "500"
    }}>
      {children}
    </button>
  )
}

export default Button
