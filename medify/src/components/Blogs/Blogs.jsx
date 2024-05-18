import { Grid, Stack } from '@mui/material'
import React from 'react'
import BlogCard from '../BlogCard/BlogCard'

function Blogs() {
  return (
    <Stack pt={10} pb={10} justifyContent={'center'} alignItems={'center'} spacing={2}>
      <div style={{fontSize:'16px',fontWeight:"600",color:"#2AA7FF"}}>Blogs & News</div>
      <div style={{fontSize:'48px',fontWeight:"600",color:"#1B3C74"}}>Read Our Latest News</div>
      <Grid container spacing={4}>
        <Grid xs={12} md={4} item>
            <BlogCard/>
        </Grid>
        <Grid xs={12} md={4} item>
            <BlogCard/>
        </Grid>
        <Grid xs={12} md={4} item>
            <BlogCard/>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default Blogs
