import { Grid, Stack } from '@mui/material'
import React from 'react'
import Swiper from 'swiper';
import 'swiper/css';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "./Discounts.css"

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
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

function DiscountGrid () {
  return (
    <Grid container spacing={2}>
              <Grid item xs={4}>
                <img style={{
                  width:"100%",
                  borderRadius:"20px"
                }} src='https://s3-alpha-sig.figma.com/img/de86/24e6/39f85edb6078e19d7a6e7fdbb9054f70?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LoGmoeR8a8XfAz1wsq7RlyaJ8qEH-b6l5HDYNKxGL7M1lPpUBnFJVr91qQqCcxK3wfXB-2vsb6oSoFMxeZgpz8n6DEfyafIPEGOFKkWU~Q-xSxlsCdiGxQmQzutX4Sr~rjMyCms5p1dj8kElSW1IKc1fQ5YsRwYxSX0lxkdfsOMTCpUQB2Hn3vAlHKGo~ge-bIzW-b1wcaCvtPU~ZUzq2zkJri5ois58jydxGca4vleTq11GX44~iRIQsJ70Utln1vjxeut~AmDFkY3YrALUKm65PmtC7eXrDI9Sq1C-6FTyGXW4D4rVh7gQd0BtXsI4EFkiGNBlAj2twDpqcAPxgg__' alt='img'/>
              </Grid>
              <Grid item xs={4}>
                <img style={{
                  width:"100%",
                  borderRadius:"20px",
                  height:"100%"
                }} src='https://s3-alpha-sig.figma.com/img/b284/93da/72ad49e23d6d55549e1b5970acfba4c0?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GH7KVhvsWBV43zNw2Snq15SYEPEDMEc-uR24rJX8QmwMTMSHyLSULa3X2ohDDMXASYnNYk2K3Le-2e-xqhooCB0immiOEJLGlKiDaDTqRraxuyHr3viznjul2XZR-~CRcE4Wv90zcol0PE1D5R9kbhfBF3lxrG6-Y6v0DFlFLZGL2BvDu~L-57x9BBI8Ap3uGMsTNJo9bc1aOpLOQtvXWYoB1F96HfFZj90FeNsB42T1rjqY8ZFOJT9DsoRqtU13K~J~V2OGWTbGP~w0QgKieswBqdhgjxq4nErta1qRczlx0RhN0Zqwwg36kKcit0hpJwCIy7N-QoEH1uSTDHgSeg__' alt='img'/>
              </Grid>
              <Grid item xs={4}>
                <img style={{
                  width:"100%",
                  borderRadius:"20px"
                }} src='https://s3-alpha-sig.figma.com/img/de86/24e6/39f85edb6078e19d7a6e7fdbb9054f70?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LoGmoeR8a8XfAz1wsq7RlyaJ8qEH-b6l5HDYNKxGL7M1lPpUBnFJVr91qQqCcxK3wfXB-2vsb6oSoFMxeZgpz8n6DEfyafIPEGOFKkWU~Q-xSxlsCdiGxQmQzutX4Sr~rjMyCms5p1dj8kElSW1IKc1fQ5YsRwYxSX0lxkdfsOMTCpUQB2Hn3vAlHKGo~ge-bIzW-b1wcaCvtPU~ZUzq2zkJri5ois58jydxGca4vleTq11GX44~iRIQsJ70Utln1vjxeut~AmDFkY3YrALUKm65PmtC7eXrDI9Sq1C-6FTyGXW4D4rVh7gQd0BtXsI4EFkiGNBlAj2twDpqcAPxgg__' alt='img'/>
              </Grid>
            </Grid>
  )
}

function Discounts() {
  return (
    <Stack pt={20} mb={10}>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide"><DiscountGrid/></div>
          <div class="swiper-slide"><DiscountGrid/></div>
          <div class="swiper-slide"><DiscountGrid/></div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-scrollbar"></div>
      </div>
    </Stack>
  )
}

export default Discounts
