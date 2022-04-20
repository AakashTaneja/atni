import React from 'react'
import { FaBeer } from 'react-icons/fa';



let iconStyles = { color: "black", fontSize: "1.5em", backgroundColor: "red" };
export default ({className, to, onClick}) => (
  <button type="button" onClick={onClick} className={`button button--text button--icon ${className}`} aria-label={totototot}>
    <FaBeer style={iconStyles} />
  </button>
)