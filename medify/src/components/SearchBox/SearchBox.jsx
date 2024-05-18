import { Stack } from '@mui/material'
import Button from '../Button/Button'
import { FaSearch } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import CardService from '../CardService/CardService';
import { Link } from 'react-router-dom';

function SearchBox({states}) {
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const fetchCities = async () => {
    try {
        const res = await fetch(`https://meddata-backend.onrender.com/cities/${selectedState}`);
        const data = await res.json();
        setCities(data);
    } catch (err){
        console.log(err);
    }
  }
  useEffect(() => {
    fetchCities();
  }, [selectedState])
  return (
    <Stack 
        spacing={6}
        style={{
        backgroundColor: 'white',
        border: "1px solid #F0F0F0",
        borderRadius: "10px",
        padding: "50px 0",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        textAlign: "center",
        width: "91%",
        position: "absolute",
        top: "75%",
        left: "50%",
        transform: "translate(-50%, 0)",
        zIndex: "1"
    }}>
      <Stack direction={'row'} pl={20} pr={10} justifyContent={'space-between'}>
        <select style={{width: "50vh"}} name="states" id="states" value={selectedState} onChange={(e) => {
            setSelectedState(e.target.value)
        }}>
          {states.map(st => <option value={st}>{st}</option>)}
        </select>
        <select style={{width: "50vh"}} name="cities" id="cities" value={selectedCity} onChange={(e) => {
            setSelectedCity(e.target.value)
        }}>
          {cities.map(ct => <option value={ct}>{ct}</option>)}
        </select>
        <Link to={`/search?state=${selectedState}&city=${selectedCity}`}><Button><FaSearch/> Search</Button></Link>
      </Stack>
      <div style={{
        fontSize: "20px",
        fontFamily: "Poppins",
        fontWeight: "500",
        color: "#102851"
      }}>
        You may be looking for
      </div>
      <Stack direction={"row"} justifyContent={'space-between'} px={4}>
        <CardService category="Doctors"/>
        <CardService category="Labs"/>
        <CardService category="Hospitals"/>
        <CardService category="Medical Stores"/>
        <CardService category="Ambulance"/>
      </Stack>
    </Stack>
  )
}

export default SearchBox
