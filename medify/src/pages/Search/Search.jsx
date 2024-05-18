import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner/Banner'
import { useSearchParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { Grid, Stack } from '@mui/material';
import Button from '../../components/Button/Button';
import { FaSearch } from 'react-icons/fa';
import HospitalCard from '../../components/HospitalCard/HospitalCard';
import FAQ from '../../components/FAQ/FAQ';
import Download from '../../components/Download/Download';
import Footer from '../../components/Footer/Footer';

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [hospitals, setHospitals] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const fetchHospitals = async () => {
    try{
      const res = await fetch(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}`);
      const data = await res.json();
      setHospitals(data);
      setSearchParams("state",state);
      setSearchParams("city",city);
      return
    } catch (err){
      console.log(err);
    }
  }
  const fetchStates = async () => {
    try {
      const res = await fetch("https://meddata-backend.onrender.com/states");
      const data = await res.json();
      setStates(data);
      return;
    } catch (err){
      console.log(err);
    }
  }
  const fetchCities = async () => {
    try {
        const res = await fetch(`https://meddata-backend.onrender.com/cities/${state}`);
        const data = await res.json();
        setCities(data);
    } catch (err){
        console.log(err);
    }
  }
  useEffect(() => {
    if(searchParams.get("state"))
      setState(searchParams.get("state"));
    if(searchParams.get("state"))
      setCity(searchParams.get("city"));
    fetchStates()
  }, [])
  useEffect(() => {
    if(city.length!==0 && state.length!==0) fetchHospitals();
  },[city,state])
  useEffect(() => {
    if(state.length!==0) fetchCities();
  }, [state])
  
  console.log(city,state,hospitals);
  return (
    <div className='bkg'>
      <Banner/>
      <div className='container'><Navbar/></div>
      <div style={{
        height:"50px",
        backgroundColor:"#2AA7FF",
        marginTop:"10px",
        borderRadius:"0 0 10px 10px"
      }}></div>
      <Stack direction={'row'} pl={20} pr={10} justifyContent={'space-between'} sx={{
        backgroundColor:"white",
        position:"absolute",
        top:"20%",
        left:"15%",
        padding:"20px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius:"10px",
        width:"65%"
      }}>
        <select style={{width: "50vh"}} name="states" id="states" value={state} onChange={(e) => {
            setState(e.target.value)
        }}>
          {states.map(st => <option value={st}>{st}</option>)}
        </select>
        <select style={{width: "50vh"}} name="cities" id="cities" value={city} onChange={(e) => {
            setCity(e.target.value)
        }}>
          {cities.map(ct => <option value={ct}>{ct}</option>)}
        </select>
        <Button onClick={() => {
          if(state.length!==0 && city.length!==0) fetchHospitals();
        }}><FaSearch/> Search</Button>
      </Stack>
      <div className='container' style={{padding:"80px 0"}}>
        <div style={{fontSize:"24px",fontWeight:"500"}}>{hospitals.length} medical centers available in {state}</div>
        <div style={{color:"#787887", marginBottom:"20px"}}>Book appointments with minimum wait-time & verified doctor details</div>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            {hospitals.map((hospital) => {
              return <HospitalCard name={hospital["Hospital Name"]} address={hospital["Address"]} city={city} state={state} zipcode={hospital["ZIP Code"]} rating={hospital["Hospital overall rating"]} key={hospital["Provider ID"]}/>
            })}
          </Grid>
          <Grid item xs={12} md={4}>
            <img style={{
              width:"100%"
            }} src='https://s3-alpha-sig.figma.com/img/1fe6/7356/75bf68ac8b03b8adc3d5939338d5479e?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WU409ZIYNGeIAosfoCm6eV0im9Mj0wFviK3X~ZYf7YylRi~HloJarZTe~eobazPdBiQ1t7~tsPiCoosB9-uhK5J5MauLOKrbog6anhWijj5YHjQbKjfwJjvUFrY4FphrvOZRTRXbQjoHGQ5QCIMui-LRyR~D1IseuKSEjHysRVCtjHuIk95i-yVWZGIjAXHotOIQov-CRntdb6Z8V14oERg~TXgv~UkYLs94x1izs9XWpryFujThmQMnqNgY3A1WVZwMaEn-xxaV3-06BrLlf2DF5ZHIuQfCMXEnXLKD~SEYQBRQgIZyTG-YSDSI0TioHHA4~04wtt6Ulu2ynTDlaA__' alt='add'/>
          </Grid>
        </Grid>
      </div>
      <div style={{backgroundColor:"white"}}>
        <div className='container'>
          <FAQ/>
        </div>
      </div>
      <div className='bkg'>
        <div className='container'>
          <Download/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Search
