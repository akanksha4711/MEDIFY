import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import SearchBox from '../../components/SearchBox/SearchBox';
import Discounts from '../../components/Discounts/Discounts';
import Specialisation from '../../components/Specialisation/Specialisation';
import Specialist from '../../components/Specialist/Specialist';
import PatientCare from '../../components/PatientCare/PatientCare';
import Blogs from '../../components/Blogs/Blogs';
import Families from '../../components/Families/Families';
import FAQ from '../../components/FAQ/FAQ';
import "./Home.css"

function Home() {
  const [states, setStates] = useState([]);
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
  useEffect(() => {
    fetchStates()
  }, []);
  return (
    <div>
      <div className='bkg'>
        <Banner/>
        <div className='container'>
          <Navbar/>
          <Hero/>
        </div>
      </div>
      <div className='container'>
        <SearchBox states={states}/>
      </div>
      <div className='container'>
        <Discounts/>
      </div>
      <div className='bkg'>
        <div className='container'>
          <Specialisation/>
        </div>
      </div>
      <div>
        <Specialist/>
      </div>
      <div className='bkg'>
        <div className='container'>
          <PatientCare/>
        </div>
      </div>
      <div className='container'>
        <Blogs/>
      </div>
      <div className='bkg'>
        <div className='container'>
          <Families/>
        </div>
      </div>
      <div className='container'>
        <FAQ/>
      </div>
    </div>
  )
}

export default Home
