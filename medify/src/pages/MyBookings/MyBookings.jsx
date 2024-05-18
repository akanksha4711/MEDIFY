import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import FinalHospitalCard from '../../components/FinalHospitalCard/FinalHospitalCard';
import { Grid } from '@mui/material';
import Download from '../../components/Download/Download';
import Footer from '../../components/Footer/Footer';

function MyBookings() {
  const [bookings, setBookings] = useState([])
  useEffect(() => {
    if(localStorage.getItem("bookings")) setBookings(JSON.parse(localStorage.getItem("bookings")).bookings)
  })
  return (
    <div className='bkg'>
      <Banner/>
      <div className='container'>
        <Navbar/>
      </div>
      <div style={{
        height:"50px",
        backgroundColor:"#2AA7FF",
        marginTop:"10px",
        borderRadius:"0 0 10px 10px",
        color:"white",
        fontSize:"32px",
        marginBottom:"30px"
      }}>
        <div className='container'>
          My Bookings
        </div>
      </div>
      <div className='container'>
      <Grid container spacing={2} pb={10}>
        <Grid item xs={12} md={8}>
          {bookings.map(bk => <FinalHospitalCard name={bk.name} city={bk.city} state={bk.state} rating={bk.rating} time={bk.time}/>)}
        </Grid>
        <Grid item xs={12} md={4}>
        <img style={{
              width:"100%",
            }} src='https://s3-alpha-sig.figma.com/img/1fe6/7356/75bf68ac8b03b8adc3d5939338d5479e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WU409ZIYNGeIAosfoCm6eV0im9Mj0wFviK3X~ZYf7YylRi~HloJarZTe~eobazPdBiQ1t7~tsPiCoosB9-uhK5J5MauLOKrbog6anhWijj5YHjQbKjfwJjvUFrY4FphrvOZRTRXbQjoHGQ5QCIMui-LRyR~D1IseuKSEjHysRVCtjHuIk95i-yVWZGIjAXHotOIQov-CRntdb6Z8V14oERg~TXgv~UkYLs94x1izs9XWpryFujThmQMnqNgY3A1WVZwMaEn-xxaV3-06BrLlf2DF5ZHIuQfCMXEnXLKD~SEYQBRQgIZyTG-YSDSI0TioHHA4~04wtt6Ulu2ynTDlaA__' alt='add'/>
        </Grid>
      </Grid>
      </div>
      <div style={{backgroundColor:"white"}}>
        <div className='container'>
          <Download/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default MyBookings
