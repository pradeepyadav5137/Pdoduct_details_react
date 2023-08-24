import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Slider.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function App() {
  const [img, setImg] = useState({})
  const [page, setPage] = useState(1);
  const [loading ,setloading] = useState(false)


  useEffect(() => {
   setloading(true)
    axios.get('https://fakestoreapi.com/products/'+ page)
      .then((res) => {
        console.log(res.data)
        setImg(res.data)
        setloading(false)
      })
    
  },[page]) 

  // function loader() {
  //   return( <h2> loading....</h2>)
  // }
  

    return (
      <>
        <div className="slider">

          <div className="left">
            { loading === true ? (<h2 id="loading">loading...</h2>):(<img src={img.image} alt="product name" />) 
            }
            
          </div>
          <div className="right">
            <h3>{img.title}</h3>
            <p>{img.description}</p>
          </div>
        </div>
        <div className="navigation">
          <button disabled={page === 1}
            onClick={() => setPage(page - 1)}>
            <ArrowBackIosIcon />
          </button>
          <button onClick={() => setPage(page + 1)}>
            <ArrowForwardIosIcon />
          </button >
        </div>
      </>
    )
    }

export default App;
