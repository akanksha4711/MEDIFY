import { Stack } from '@mui/material';
import React from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { IoShieldCheckmark } from "react-icons/io5";
import "./Navbar.css";

function Navbar() {
  return (
    <Stack justifyContent={'space-between'} alignItems={'center'} direction={'row'} mt={3}>
      <Link className='home-link link' to={"/"}><IoShieldCheckmark/>Medify</Link>
      <Stack id='menu' className='menu'>
        <Link className='link' to="/">Find Doctors</Link>
        <Link className='link' to="/">Hospitals</Link>
        <Link className='link' to="/">Medicines</Link>
        <Link className='link' to="/">Surgeries</Link>
        <Link className='link' to="/">Software for Provider</Link>
        <Link className='link' to="/">Facilities</Link>
        <Button size="medium">My Bookings</Button>
      </Stack>
      <FaBars className='hamburger' onClick={() => {
        const menu = document.getElementById("menu")
        if(menu.style.display === "none") menu.style.display = "block"
        else menu.style.display = "none"
      }}/>
    </Stack>
  )
}

export default Navbar
