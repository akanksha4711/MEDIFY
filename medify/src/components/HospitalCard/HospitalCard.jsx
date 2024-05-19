import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import BasicTabs from '../BasicTab/BasicTab'
import { FaThumbsUp } from "react-icons/fa";

function HospitalCard({name,address,city,state,zipcode,rating}) {
  const [bookings, setBookings] = useState([])
  const [showBookings, setShowBookings] = useState(false);
  console.log(bookings)
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
      <Stack direction={'column'} justifyContent={'end'} alignItems="center" spacing={2}>
        <div style={{color:"#01A400",fontSize:"16px",fontWeight:"700"}}>Available today</div>
        <Button handleClick={() => {
          if(showBookings){
            if(!localStorage.getItem("bookings") && bookings){
              localStorage.setItem("bookings",JSON.stringify({bookings}))
            } else {
              const bookingsObj = JSON.parse(localStorage.getItem("bookings"))
              bookings.forEach(bk => {
                if(!bookingsObj.bookings.find(bk1 => (bk1.name === bk.name && bk1.time === bk.time)))
                  bookingsObj.bookings.push(bk)
              });
              localStorage.setItem("bookings",JSON.stringify({bookings:bookingsObj.bookings}))
            }
          }
            setShowBookings(!showBookings);
        }}>{showBookings?"CLICK HERE TO BOOK NOW":"Book FREE Center Visit"}</Button>
      </Stack>
    </Stack>
    {showBookings && <BasicTabs name={name} address={address} city={city} state={state} zipcode={zipcode} rating={rating} bookings={bookings} setBookings={setBookings}/>}
    </Stack>
  )
}

export default HospitalCard
