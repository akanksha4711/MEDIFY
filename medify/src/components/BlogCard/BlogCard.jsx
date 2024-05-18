import React from 'react'

function BlogCard() {
  return (
    <div style={{
        width:"100%",
        wordWrap: "break-word",
        border:"1px solid grey",
        borderRadius:"5px"
    }}>
      <img style={{width:"100%", borderRadius:"5px"}} src='https://s3-alpha-sig.figma.com/img/80e8/521b/357080ed899ad27873e3bebb35e6ab6a?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=L0FEKfXuT17OQOIOAecbl2soZQF6j-g2DNa0rwN0yWMP7UrUw7EeIC5zn66pw3PsyyHIfscPn1FvtfJlprAXUiHG18w3POnaFd9xRBUTLlkywiJtFo-UJIKU1-C-H7l08sMRuXCamiby-fQQTC7tQOmsqvzOMluVybm6QxdBVeEOn4mrApMJeenHTii3pQmusH4R8phk130ubKTkhda4fzQi1kR7he~1l8~nD7NFao683mydS~pWA0sQErWs0qy19dzsJ94gwWNCar9wizWpOwrj6Rj~0yKQu4OnoH0iZhptfii9rB9jTzLeE9U6GeQc-3-uMdKNfyCYjL0syX78hw__' alt='blog-img'/>
      <div style={{padding:"10px",color:"#77829D",fontSize:"16px",fontWeight:"500"}}>
        <span>Medical</span>
        &nbsp;|&nbsp;
        <span>March 31, 2024</span>
      </div>
      <p style={{width:"90%", padding:"0 10px",color:"#1B3C74",fontSize:"18px"}}>6 tips to prevent your mental health when you're sick</p>
      <div style={{padding:"0 10px", color:"#1B3C74", display:"flex", alignItems:"center"}}>
        <img style={{width:"5vh", paddingRight:"5px", borderRadius:"100%"}} src='https://s3-alpha-sig.figma.com/img/f2b1/95b8/8432b7bc2559a85010e594f78aacfc8c?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SIIFCceHowz44KCtbjmWCAVSI4H3N5FcLBzuOi9irPyF4JJ7kj2zAAOfG7PILM6XkgJauN39vBDxN3W3CONaXNL8SQ9vkDqfvX18ZSFeuj~do-rX7YlwpLEwXRXN-C7zqRZxX9wE6Hji8wzj9DO4pjitFMydM5QsxUx8v5a3PhI4FgOwIe0yKfYTkdY~Vqaw09VDc0mgrCN1bFiCn8s-H6wFMf3VAKFdu1LyJuooMj3PkDQ-ySQMCttihetjGQIzVupcTn0LOjKHAweUQ3FsqwLjYrQFEQz9B5pRGRZvFe-BXYoAURq~zlq2Q2z3-qq3bXG~fDu3ZRjIfFw1LaA94A__' alt='logo-img'/>
        <span>Rebecca Lee</span>
      </div>
    </div>
  )
}

export default BlogCard
