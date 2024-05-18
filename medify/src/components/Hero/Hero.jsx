import { Grid } from '@mui/material'
import React from 'react'
import Button from '../Button/Button'

function Hero() {
  return (
    <div>
      <Grid container spacing={2} mt={10} pb={20}>
        <Grid item xs={12} md={6}>
            <div style={{
                fontFamily: "Poppins",
                fontWeight: "500",
                fontSize: "31px",
                marginBottom: "20px"
            }}>Skip the travel! Find Online
            <br/>
            <span style={{
                fontSize:"56px",
                fontWeight:"700"
            }}>Medical <span style={{color: "#2AA7FF"}}>Centers</span>
            </span>
            </div>
            <div style={{
                fontFamily: "Poppins",
                fontSize: "20px",
                color: "#5C6169",
                marginBottom: "30px"
            }}>
                Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </div>
            <Button>Find Centers</Button>
        </Grid>
        <Grid item xs={12} md={6}>
            <img style={{
                width: "80vh"
            }} src='https://s3-alpha-sig.figma.com/img/7804/e5f2/776e41d6b125a1ff07effac37d6ff11b?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=azrpMEf-WLIMwNMGxho~iwuoNMDCWcSrE2YB-v08OpaefmYH6cG2hG67oPurv7rBoyj3s0RkQiI6UJaB6SbdpQJFpZwnokJNter~Yu7uMYcDWkyTqpd5Xf2xdcb0RR6hNDD3Dahe6CeVUz9Madtj3KowUZoXiTPwiXsemMgXQMnf8zvjsjcqlvmniKf4879kxU-p2TC5kvkc6ypltra89THgS3hVJcCL2WSCkXuY3k5Psba~H1Dr1Qbf7U40vwyBFQ-2ZTRK4z4R4LnqNBfRciewnRgfPPROGujPggpVpj5oYAo3GF-7yQ5B9ARTudx0iJiI3XuugyCXZef6TmyD2w__' alt='hero'/>
        </Grid>
      </Grid>
    </div>
  )
}

export default Hero
