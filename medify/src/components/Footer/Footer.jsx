import { Grid, Stack } from '@mui/material';
import React from 'react'
import { IoShieldCheckmark } from "react-icons/io5";
import { CiFacebook } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

function Footer() {
  return (
    <div style={{
        backgroundColor:"#1B3C74",
        color:"white",
        padding:"10vh"
    }}>
      <Grid container spacing={2}>
        <Grid item xs={2} md={3}>
            <Stack direction={'column'} justifyContent="space-between">
                <div style={{display:"flex",justifyContent:"start",alignItems:"center",color:"#2AA7FF",fontSize:"20px"}}><IoShieldCheckmark/>&nbsp;Medify</div>
                <Stack direction={'row'} spacing={2}>
                    <CiFacebook size={30} color='#2AA7FF'/>
                    <FaTwitter size={30} color='#2AA7FF'/>
                    <FaYoutube size={30} color='#2AA7FF'/>
                    <FaPinterest size={30} color='#2AA7FF'/>
                </Stack>
            </Stack>
        </Grid>
        <Grid item xs={2} md={3}>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>About us</span></div>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>Our Pricing</span></div>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>Our Gallery</span></div>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>Appointment</span></div>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>Privacy Policy</span></div>
        </Grid>
        <Grid item xs={2} md={3}>
        <div style={{marginBottom:"15px"}}><FaChevronRight/><span>About us</span></div>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>Orthology</span></div>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>Neurology</span></div>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>Dental Care</span></div>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>Opthalmology</span></div>
        </Grid>
        <Grid item xs={2} md={3}>
        <div style={{marginBottom:"15px"}}><FaChevronRight/><span>About us</span></div>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>Our Pricing</span></div>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>Our Gallery</span></div>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>Appointment</span></div>
            <div style={{marginBottom:"15px"}}><FaChevronRight/><span>Privacy Policy</span></div>
        </Grid>
      </Grid>
      <hr></hr>
      <div>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</div>
    </div>
  )
}

export default Footer
