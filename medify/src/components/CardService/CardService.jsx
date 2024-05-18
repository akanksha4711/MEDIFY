import React from 'react'
import { FaUserDoctor } from "react-icons/fa6";
import { RiHospitalLine } from "react-icons/ri";
import { FaHospital } from "react-icons/fa";
import { CiPill } from "react-icons/ci";
import { FaAmbulance } from "react-icons/fa";
import "./CardService.css"

function CardService({category}) {
  const getIcon =(category) => {
    if(category === "Doctors") return <FaUserDoctor size={50} style={{color: "#2AA7FF"}}/>
    else if(category === "Labs") return <RiHospitalLine size={50} style={{color: "#2AA7FF"}}/>
    else if(category === "Hospitals") return <FaHospital size={50} style={{color: "#2AA7FF"}}/>
    else if(category === "Medical Stores") return <CiPill size={50} style={{color: "#2AA7FF"}}/>
    else if(category === "Ambulance") return <FaAmbulance size={50} style={{color: "#2AA7FF"}}/>
  }
  return (
    <div style={{
        width: "30vh",
        padding: "30px 0",
        borderRadius: "8px"
    }} 
    onClick={(e) => {
        const elem = e.target;
        elem.classList.toggle("card-service-selected");
        elem.classList.toggle("card-service-unselected")
    }}
    className='card-service-unselected'
    >
      {getIcon(category)}
      <div style={{color: "#ABB6C7"}}>{category}</div>
    </div>
  )
}

export default CardService
