import React from 'react';
import { Stack } from '@mui/material';
import { FaThumbsUp } from "react-icons/fa";

function FinalHospitalCard({name,city,state,rating,time}) {
    const date = time.split(" ")[0];
    const time1 = time.split(" ")[1];
  return (
    <Stack direction={'column'} sx={{
        backgroundColor:"white",
        borderRadius:"10px",
        marginBottom:"20px",
        padding:"40px 40px 20px 40px"
    }} >
    <Stack direction={'row'} justifyContent={'space-between'}>
      <div style={{
        backgroundColor:"#8CCFFF",
        height:"13vh",
        width:"13vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:"100%"
      }}>
        <img style={{width:"8vh"}} src='https://s3-alpha-sig.figma.com/img/4667/f883/b3e2f8072c3b5c69af5f4bb1596a887f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J7e0twlEdqODYfdLYOE-ZwTiDxWgaW6RS4ZPQcAph4k0zySe2xbCIhjfJvVvWEIAwevb-NzG2PTXUPrgT-K7-srrFy8yHOKJtfYQY2qU~cJpjw3s-VgS74~in2bKp1QVxXjrqF20EUnjz5wzU4DLUWall4P~TikRk43U~asFKQIaTpw3q-YgmREBY9If09PnJiS983elQU77VpKhV7D~Ceqn9SyqaQQ0jR7ZZdTER-4i7Iqv07KD1E3RGgXso8j-LEdBwYkT~KXgAy~d8bL~jscI1P1FHCaFcDEE8DzgkXqVbHGl1RFFrk3Up9XFRNR6r1wOMSmqenmUpEEpMwwlKg__' alt='hospital'/>
      </div>
      <Stack direction={'column'}>
        <div style={{color:"#14BEF0",fontSize:"20px",fontWeight:"600"}}>{name}</div>
        <div style={{color:"#414146",fontSize:"14px",fontWeight:"700"}}>{city}, {state}</div>
        <div style={{color:"#414146",fontSize:"14px",fontWeight:"400",paddingBottom:"20px"}}>Smilessence Center for Advanced Dentistry + 1 more</div>
        <div style={{fontSize:"14px"}}>
            <span style={{color:"#02A401",fontWeight:"700"}}>FREE</span>&nbsp;
            <span style={{textDecoration:"line-through",color:"#787887",fontWeight:"400"}}>$500</span>&nbsp;
            <span style={{color:"#414146",fontWeight:"400"}}>Consultation fee at clinic</span>
        </div>
        <div style={{
          backgroundColor:"#02A401",
          width:"5vh",
          color:"white",
          textAlign:"center",
          borderRadius:"5px",
          padding:"4px"
        }}><FaThumbsUp></FaThumbsUp>{rating}</div>
      </Stack>
      <Stack direction={'row'} justifyContent={'start'} alignItems="center" spacing={2}>
        <div style={{
            border:"1px solid #14BEF0",
            borderRadius:"5px",
            color:"#14BEF0",
            padding:"5px 10px"
        }}>{time1}</div>
        <div style={{
            border:"1px solid #02A401",
            borderRadius:"5px",
            color:"#02A401",
            padding:"5px 10px"
        }}>{date}</div>
      </Stack>
    </Stack>
    </Stack>
  )
}

export default FinalHospitalCard
