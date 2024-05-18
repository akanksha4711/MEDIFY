import { Grid } from '@mui/material'
import React from 'react'
import { FaHandHoldingHeart } from "react-icons/fa";
import { FaRegHospital } from "react-icons/fa";
import { PiHospital } from "react-icons/pi";
import { FaUserDoctor } from "react-icons/fa6";

function Families() {
  return (
    <Grid container pt={4} pb={30} spacing={2}>
      <Grid item xs={12} md={6}>
        <div style={{color:"#2AA7FF",fontSize:"17px",fontWeight:"600"}}>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</div>
        <div style={{color:"#1B3C74",fontSize:"48px",fontWeight:"600"}}>Our Families</div>
        <p style={{color:"#77829D",fontSize:"17px",fontWeight:"500"}}>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
      </Grid>
      <Grid item xs={12} md={6} style={{position:"relative"}}>
        <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"30vh",padding:"20px 0",borderRadius:"10px",position:"absolute",top:"0%"}}>
          <div style={{backgroundColor:"#EBF7FF",width:"10vh",height:"10vh",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%"}}><FaHandHoldingHeart size={40} color='#2AA7FF'/></div>
          <div style={{color:"#1B3C74",fontSize:"48px",fontWeight:"600"}}>5000+</div>
          <div style={{fontSize:"18px",color:"#77829D"}}>Happy Patients</div>
        </div>
        <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"30vh",padding:"20px 0",borderRadius:"10px",position:"absolute",top:"100%"}}>
          <div style={{backgroundColor:"#FFF7E6",width:"10vh",height:"10vh",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%"}}><FaRegHospital size={40} color='#FFB200'/></div>
          <div style={{color:"#1B3C74",fontSize:"48px",fontWeight:"600"}}>1000+</div>
          <div style={{fontSize:"18px",color:"#77829D"}}>Laboratories</div>
        </div>
        <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"30vh",padding:"20px 0",borderRadius:"10px",position:"absolute",left:"50%"}}>
          <div style={{backgroundColor:"#FFF2F0",width:"10vh",height:"10vh",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%"}}><PiHospital size={40} color='#FF684C'/></div>
          <div style={{color:"#1B3C74",fontSize:"48px",fontWeight:"600"}}>200+</div>
          <div style={{fontSize:"18px",color:"#77829D"}}>Hospitals</div>
        </div>
        <div style={{backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",width:"30vh",padding:"20px 0",borderRadius:"10px",position:"absolute",left:"50%",top:"100%"}}>
          <div style={{backgroundColor:"#EBFAF1",width:"10vh",height:"10vh",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:"100%"}}><FaUserDoctor size={40} color='#4CD080'/></div>
          <div style={{color:"#1B3C74",fontSize:"48px",fontWeight:"600"}}>700+</div>
          <div style={{fontSize:"18px",color:"#77829D"}}>Expert Doctors</div>
        </div>
      </Grid>
    </Grid>
  )
}

export default Families
