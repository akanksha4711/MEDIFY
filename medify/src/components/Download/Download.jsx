import { Grid } from '@mui/material'
import React from 'react'
import Button from '../Button/Button'

function Download() {
  return (
    <Grid container spacing={2} pb={10}>
      <Grid item xs={12} md={6} sx={{position:"relative"}}>
        <img style={{
            position:"absolute",
            zIndex:"1",
            top:"10%",
            left:"29.2%",
            width:"26%"
            }} src='https://s3-alpha-sig.figma.com/img/6809/90cf/89195b86da2d6e512393a9734fd116d1?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l1Nq2tUaj~WipUCBN8E80cbh8aLV87UzNp~jdmgpc3A1NylHMmMAxH7N6C9xGEQbju9Sr5WBMafNAuN9v~~WiACq5Pkp1T6roKBwk0tF6OSnbD-lZ92IBNYiyAsAOejAGy5qtfq02pHciywc5lVvGQsl8gLIfb7QFaJMHnyS8rrspuNzhi5v8-ny1prhp3795fybtVwhw8S02dwBlt4TNkCv-jiPOrtYWyh9ZOWrDdnSBPfzPEeSeaEZQDY1XTGRYG1Hlp5bom7s9OE9FsUOXrzvScSEnaLYetC~ad8JLtxwyekJLKh-CzbgIT9cCSJ4HJRdWWVeSnKA53dciFqOzw__' alt='img'/>
        <img style={{
            position:"absolute",
            width:"80%"
            }} src='https://s3-alpha-sig.figma.com/img/cd7a/141a/3f2225b1820012068980e6ed1a5ae7f7?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JrfUdyK1AUby8wZCXxrJ116l5q3cfoiojWtHFJQuqsSRUsAc1JjfxKVFWx6CCtmM~Anp1iFQqfCQTu4Rv8sjbrmmvg5kYPTA8HC3Pewe24ZOspzV20~glYQlIboYI7VTJx9E0RYxNXAjYQ2N8p6GY0-Yd086XEWFMiEUAN3NSDUhaeItgI0cxdvEGytjTUKjSBvcTl-9Z9Lt1jVt8EuXpK8MUWzgdPakVolpHh4srsmTyZFtk3Ay-fvHqbC9IYABNUQwokPI9szp0gmOytjwvx3SCOh1T5fkD2fwOIUGHkTduMB6yEzSyPa-ZBbbN9cLs8paYAp77ip4~FuQDXhWoA__' alt='img'/>
      </Grid>
      <Grid item xs={12} md={6} justifyContent={"center"} alignItems={'center'}>
        <div style={{
            color:"#1B3C74",
            fontSize:"48px",
            fontWeight:"600"
        }}>Download the <br/> <span style={{color:"#2AA7FF"}}>Medify</span> App</div>
        <div style={{
            color:"#414146",
            fontWeight:"700",
            marginTop:"20px"
        }}>Get the link to download the app</div>
        <div style={{marginTop:"20px"}}>
            <input placeholder='+91 Enter your number' style={{height:"5vh",width:"40vh",borderRadius:"5px",marginRight:"30px",border:"none"}}/>
            <Button>Send SMS</Button>
        </div>
        <div style={{marginTop:"40px"}}>
            <img style={{marginRight:"50px"}} src='https://s3-alpha-sig.figma.com/img/f21a/8caa/cc3e4dc3a228882459de2a4d49e45055?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BW6J~3dPIWXMOwkD9LxL0CuoW0byspF4TZO1MTziiucL15jhUz1JC9KMqmL80Pl32is1XG9VYFLMKHVCmzn1US0trQlg8sNsPqVuDhkhduKuUNy72b9iuSSh4YRlAnvgQR9Kl~MpIQnE8H6QittjWWQR2ZQFcLgyGkh-9v4ptY5eHlzZMzT1KFndcU1S6TOs8l0DciQifp7o7XqlvUKsus6Xo~Kul9Cjlc2iRRbTRMDwmzJzd26e2BNmCnKoSP7YgrMvRc19ZHu5UA58qPlYn5DWZClJCl35Hu~3m4XX3aY4Za3hD16ttdbmmjOpz5vbYGYd6lIJP827LrIaK9CpoA__' alt='google-play'/>
            <img src='https://s3-alpha-sig.figma.com/img/560b/7f8f/cb4223c4079dc306eb83f5c12e95e22f?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bVjiuPxYgiZQVpjUa-6gT4GB2nZKtrNdJiorRfcm830e0Uwfjdlq~kOVGKngz88YLUhy0NHCjR~9NMEm8Y8NKjq~AuN99bwAq-X5Hu-dg1IvufvHYhOD3megfDDMu9e0ZyZMQvL9-BS7iKBx0AxyvcULfRiF8gikx3h8x6yMq9Ju4ytbWiRMuZh3k-wyLjLtxbbqgDiZMSvBttnhxaEExVjYicoSivhzd6w10tSvaq4Q2agb4d-NA-xDdSrO8AgEVjK7WrAyFInvobOK8S~s8HAUaG7kL6EZ7JrP1ppeKzwNUMgv-86yjcACNc6x02RMdKNmWl5JokbAwIKmJMg-vQ__' alt='app-store'/>
        </div>
      </Grid>
    </Grid>
  )
}

export default Download
