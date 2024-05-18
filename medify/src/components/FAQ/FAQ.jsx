import { Grid, Stack } from '@mui/material'
import React from 'react'

function FAQ() {
  return (
    <Stack justifyContent={'center'} alignItems={"center"} pt={4} pb={4} spacing={2}>
      <div style={{color:"#2AA7FF",fontWeight:"600"}}>Get Your Answer</div>
      <div style={{color:"#1B3C74",fontSize:"48px",fontWeight:"600"}}>Frequently Asked Questions</div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
            <img src='https://s3-alpha-sig.figma.com/img/e227/fb42/a6ada2ba341019c7efd2dc283f78b62d?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l3OCRUFc9kL2nVxnMYyY2qWLk4eHmCxuc1A53m4DDQNtExxzDwNjC8xkg-4FlGyxkmscQgPvy-4M11cT66C7lQXRJqynsMAyBsecT~oW1CZI9lDK4T8WjkuG3CZkIW5DsGZl2sJFvjv8OFHyigogPl1dJyhxygo-gQEZ--K0nG5rzN7YA2-RGwVwiZbn5CSkuQjG4A2XojoO9DG7yMuzcmU4Yt~dWd2BaCUQqHg2xqivtatdbMt4lwR6h1WtIzZzqGZ-cDgLzkdHJXjVPT4VYEF5vhTCKz~l~B7T6cF1KDcDxK5Xt~-3g0~DCAcAY54V~oVC3CajxSVAT-IUFERIgA__' alt='img'/>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default FAQ
