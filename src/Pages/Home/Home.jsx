import React, { useState, useEffect} from "react";
import './Home.css'

export const Home = () => {
 
  const Slideshow = ({ imgs }) => {
    const [index, setIndex] = useState(0)
  
    useEffect(() => {
      setIndex(0)
    }, [])
  
    const next = () => {
      if (index === imgs.length - 1) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
    const prev = () => {
      if (index === 0) {
        setIndex(imgs.length - 1)
      } else {
        setIndex(index - 1)
      }
    }
  
  
    return (
      <div className="slideshow">
        <img className="mainImg" src={imgs[index]} />
        <div className="actions">
          <button onClick={prev}>←</button>
          <button onClick={next}>→</button>
        </div>
        {/* <Thumbnail arr={imgs} image={setIndex} index={index} /> */}
      </div>
    )
  }
  return (
    <div className="images">
     
      <Slideshow
        imgs={[
          'https://robbreport.com/wp-content/uploads/2022/07/Hublot_CF_Ibiza.jpg?w=1024',
          'https://maestro.rs/en/wp-content/uploads/2022/05/big-bang-meca-10-blue-ceramic-lifestyle-shot-maestro-jewerly.webp',
          'https://robbreport.com/wp-content/uploads/2022/01/Grand_Seiko_Lead.jpg?w=1000',
          'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-waterproof-watches-lead-1658329410.jpg?crop=1.00xw:0.750xh;0,0.108xh&resize=1200:*',
          'https://www.bobswatches.com/rolex-blog/wp-content/uploads/2016/01/Rolex-Deepsea-d-blue-dial.jpeg'


        ]}
      />
    
      <div className="message">
      <h1>Welcome to Valid</h1>
      <h2>Your ultimate destination for the latest and greatest timepieces from around the world. Our collection features a wide range of watches for every taste and style, from classic leather-strapped watches to sleek and modern digital timepieces.</h2>
      <br></br>
      <h2> Whether you're looking for a watch for everyday wear or a special occasion, Valid has got you covered. Shop our products today and discover the perfect timepiece to suit your style and budget.</h2>
      <br></br> 
      </div>

     </div>
  )
}

