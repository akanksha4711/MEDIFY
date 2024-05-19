import { Grid, Stack } from '@mui/material'
import React from 'react'
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Specialist.css"

const swiper = new Swiper('.swiper2', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar'
  }
});

function SpecialistCard () {
  return (
    <Stack spacing={1} direction={'column'} justifyContent={'center'} alignItems={'center'}>
      <div style={{
        backgroundImage: "linear-gradient(180deg, #E1F3FF, #2AA7FF)",
        paddingTop:"20px",
        borderRadius:"100px 100px 0 0"
      }}>
        <img style={{
          height:"200px"
        }} alt='img' src='https://s3-alpha-sig.figma.com/img/6f24/e1db/3aec5da26ceba574fbcd4af774a9fcce?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MuAPutjypjHl4DTR8wZNp06leqtcPrXsT1~Uk755L20o0BfUNqFNQ2EDSYWOdgUq83FMqkJhViDldR25dXRql~vt2KgzF2DInp4y6ojaAVTAAC5-iPXjWLjtT~zftMnCul6Zj0Z0g5Xr~qMt2cbIFtwflf1GI3g-~i3~POdstCENhhGeUC95qF4sHH3BXd7QwJ2DQdkQk0~jUk-wMlb7FmbYfwz4oiIg-ZoxMDUjIwnrZd1iEJ99erPJVUX8D1idYPgMtV1CrnjC~0rLXuTc6mefwfA-hfo9CnTIGH6Ih63aa7thGRQJ6rpoiZdoeJnJ12bA~Fze1v301uVFJcaQBA__'/>
      </div>
      <Stack direction={'column'} justifyContent={'center'} alignItems={'center'}>
        <div style={{color:"#1B3C74"}}>Dr. Ahmad Khan</div>
        <div style={{color:"#2AA7FF", fontSize:"14px"}}>Neurologist</div>
      </Stack>
    </Stack>
  )
}

function Specialist() {
  return (
    <Stack pt={20} mb={10}>
      <div class="swiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide slides"><SpecialistCard/></div>
          <div class="swiper-slide slides"><SpecialistCard/></div>
          <div class="swiper-slide slides"><SpecialistCard/></div>
          <div class="swiper-slide slides"><SpecialistCard/></div>
          <div class="swiper-slide slides"><SpecialistCard/></div>
          <div class="swiper-slide slides"><SpecialistCard/></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>
      </div>
    </Stack>
  )
}

export default Specialist
