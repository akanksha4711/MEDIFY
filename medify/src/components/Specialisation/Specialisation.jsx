import { Grid, Stack } from '@mui/material'
import React from 'react'
import './Specialisation.css'
import { FaRegHospital } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { TbDeviceHeartMonitor } from "react-icons/tb";
import { MdBloodtype } from "react-icons/md";
import { FaShieldHeart } from "react-icons/fa6";
import { FaXRay } from "react-icons/fa6";
import Button from '../Button/Button';


function Specialisation() {
  return (
    <Stack justifyContent={'center'} alignItems={'center'} pt={10} pb={8} spacing={4}>
      <div style={{
        fontFamily:"Poppins",
        fontWeight: "600",
        fontSize: "48px",
        color: "#1B3C74"
      }}>
        Find By Specialisation
      </div>
      <Grid container spacing={2}>
        <Grid item xs={6} md={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Stack className='specialisation-card' spacing={2}>
                <FaRegHospital size={50} color='#2AA7FF'/>
                <div style={{color: "#ABB6C7"}}>Dentistry</div>
            </Stack>
        </Grid>
        <Grid item xs={6} md={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Stack className='specialisation-card' spacing={2}>
                <FaStethoscope size={50} color='#2AA7FF'/>
                <div style={{color: "#ABB6C7"}}>Primary Care</div>
            </Stack>
        </Grid>
        <Grid item xs={6} md={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Stack className='specialisation-card' spacing={2}>
                <FaHeartbeat size={50} color='#2AA7FF'/>
                <div style={{color: "#ABB6C7"}}>Cardiology</div>
            </Stack>
        </Grid>
        <Grid item xs={6} md={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Stack className='specialisation-card' spacing={2}>
                <TbDeviceHeartMonitor size={50} color='#2AA7FF'/>
                <div style={{color: "#ABB6C7"}}>MRI Resonance</div>
            </Stack>
        </Grid>
        <Grid item xs={6} md={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Stack className='specialisation-card' spacing={2}>
                <MdBloodtype size={50} color='#2AA7FF'/>
                <div style={{color: "#ABB6C7"}}>Blood Test</div>
            </Stack>
        </Grid>
        <Grid item xs={6} md={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Stack className='specialisation-card' spacing={2}>
                <FaShieldHeart size={50} color='#2AA7FF'/>
                <div style={{color: "#ABB6C7"}}>Psycologist</div>
            </Stack>
        </Grid>
        <Grid item xs={6} md={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Stack className='specialisation-card' spacing={2}>
                <FaRegHospital size={50} color='#2AA7FF'/>
                <div style={{color: "#ABB6C7"}}>Laboratory</div>
            </Stack>
        </Grid>
        <Grid item xs={6} md={3} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Stack className='specialisation-card' spacing={2}>
                <FaXRay size={50} color='#2AA7FF'/>
                <div style={{color: "#ABB6C7"}}>X-Ray</div>
            </Stack>
        </Grid>
      </Grid>
      <Button>View All</Button>
    </Stack>
  )
}

export default Specialisation
