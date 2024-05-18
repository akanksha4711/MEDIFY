import { Grid } from '@mui/material'
import React from 'react'
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa6";

function PatientCare() {
  return (
    <Grid container spacing={2} pt={5} pb={5}>
      <Grid item xs={12} md={6} sx={{position:"relative"}}>
        <img style={{
            width: "40vh",
            border:"4px solid white",
            position:"absolute",
            left:"40%",
            top:"10%"
        }} src='https://s3-alpha-sig.figma.com/img/655b/c5ee/65d5b807171dc49fec96d7ce51d323d1?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGAFpB-o7BWJ0ietg0xwfVSCnaVodPMlmihxUFw8vI47my8qT4hXmM73RSW3BE~lcqTtiNSzy4-dlTQAwP7jCGuBWJS98Ov1Xu6Zodn-fD6kCbXKtAWIZAhqMKH9~A4Bq1UAqKqu8-LfpB8130z2gy8M3CTGUjvjxN65NZrn827PSvoQk8l1rfmdXSBZ2b9C59AYHhjNpG7~Yw33m9207Dh~B3g3Ndp4U8NEVV62YA0gMD1RnR-LOLhBxvq-ORj1iWxFKEuvlxZ3WXQNvbSjFgAuoo~f5zl6NbODD~1t94Mh1k89c2EU6NE5Qjn7VYdRc4yRhEdtPotbC1hgwnWw0A__' alt='img1'/>
        <img style={{
            width: "40vh",
            border:"4px solid white",
            position:"absolute",
            top:"50%",
            left:"15%"
        }} src='https://s3-alpha-sig.figma.com/img/fc60/e3eb/123cc4f6b10a8de7f4969c5b21b3227b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YQuZ3ALiFx5uKxSr3Ugb6Y4DV0POHaysDXEiqB3vZAx3qWfEEwbFOtL-WGv-IlnGG-Z9t1ewnHfY87O-CCxsKgBw1UMcKqO1-BLuGdgs-mZIv0hlloGOV8Rv4eD4WRFPMwcEzHJ35kBb9jso09XGfFIYnVzwDrinVN1C~vGH9F1xGtnVwIY0gTthYb58gdC9S4Eyh5SZKvaU9dzXI8NHLk8p~3j3uedWLYbCPW0R-9~pY8cHyAM4az~f~C2urvu5oADx1DUC20fMc87M12GXH-raEbSJSE1ZKFjCLRT7p17tLW142Ry1XATcy9DBbkef40Ee~OhfkJoqSZdDC0vFgQ__' alt='img2'/>
        <div style={{
            position:"absolute",
            top:"30%",
            left:"15%"
        }}>
            <div style={{
                backgroundColor:"white",
                borderRadius:"10px",
                padding:"10px"
            }}>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <FaPhoneVolume color='#2AA7FF'/>
                    &nbsp;
                    <div style={{fontWeight:"700",color:"#1B3C74",fontSize:"16px"}}>Free Consultation</div>
                </div>
                <div style={{fontWeight:"500",color:"#77829D",fontSize:"15px"}}>Consultation with the best</div>
            </div>
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <div style={{
            color:"#2AA7FF",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontWeight:"600"
        }}>HELPING PATIENTS FROM AROUND THE GLOBE</div>
        <div style={{
            fontWeight:"600",
            fontSize:"48px"
        }}><span style={{color: "#1B3C74"}}>PATIENT</span> <span style={{color:"#2AA7FF"}}>CARING</span></div>
        <p style={{
            color:"#77829D",
            fontWeight:"500",
            fontSize:"17px"
        }}>Our goal is to deliver quality of care in a courteous, respectful, and compassionate manner. We hope you will allow us to care for you and strive to be the first and best choice for healthcare.</p>
        <p style={{
            fontFamily:"Roboto",
            fontWeight:"500",
            fontSize:"18px",
            color:"#1B3C74",
            display:"flex",
            alignItems:"center",
            marginTop:"40px"
        }}><BsFillPatchCheckFill color='#2AA7FF'/> &nbsp; Stay Updated About Your Health</p>
        <p style={{
            fontFamily:"Roboto",
            fontWeight:"500",
            fontSize:"18px",
            color:"#1B3C74",
            display:"flex",
            alignItems:"center",
            marginTop:"40px"
        }}><BsFillPatchCheckFill color='#2AA7FF'/> &nbsp; Check Your Results Online</p>
        <p style={{
            fontFamily:"Roboto",
            fontWeight:"500",
            fontSize:"18px",
            color:"#1B3C74",
            display:"flex",
            alignItems:"center",
            marginTop:"40px"
        }}><BsFillPatchCheckFill color='#2AA7FF'/> &nbsp; Manage Your Appointments</p>
      </Grid>
    </Grid>
  )
}

export default PatientCare
