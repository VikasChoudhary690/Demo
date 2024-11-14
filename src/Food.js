import React from 'react';
import pizza from "./image/pizza.jpg";
import cake from "./image/cake.jpg";
import chili from "./image/chili paneer.jpg";
import burger from "./image/burger.jpg";
import panner from "./image/panner.jpg";
import dosa from "./image/dosa.jpg";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import "./Food.css";


const Food = () => {

    const {id}=useParams()

    const [store,setStore]=useState([
        {
            id: 1,
            name: "Pizza",
            brand: "Dominose",
            img: pizza,
            prize:"prize=100 rs",
          },
        
          {
            id: 2,
            name: "Burger",
            brand: "Kfc",
            img: burger,
            prize:"prize=100 rs",
          },
        
          {
            id: 3,
            name: "Dosa",
            brand: "Anna",
            img: dosa,
            prize:"prize=100 rs",
          },
        
          {
            id: 4,
            name: "Panner",
            brand: "shahi",
            img: panner,
            prize:"prize=100 rs",
          },
        
          { id: 5, 
            name: "Cake", 
            brand: "Softcake", 
            img: cake ,
            prize:"prize=100 rs",
          },
        
          {
            id: 6,
            name: "chili panner",
            brand: "Softcake",
            img: chili,
            prize:"prize=100 rs",
          },
    
          {
            id: 7,
            name: "chili panner",
            brand: "Softcake",
            img: chili,
            prize:"prize=100 rs",
          },
    
          {
            id: 8,
            name: "chili panner",
            brand: "Softcake",
            img: chili,
            prize:"prize=100 rs",
          },
    
          {
            id: 9,
            name: "chili panner",
            brand: "Softcake",
            img: chili,
            prize:"prize=100 rs",
          },
    
          {
            id: 10,
            name: "chili panner",
            brand: "Softcake",
            img: chili,
            prize:"prize=100 rs",
          },
    ])
    const foods=store.filter((s)=>{
        // console.log(s,"s")
        return s.id == id
    });
    // console.log(foods,"foods")
    

  return (
    <>
    <center>
      
         <div className='show-deatils'>

           <img src={foods[0].img} style={{width:"250px",height:"250px"}}/> 
            <h3>{foods[0].name}</h3>
            <h3>{foods[0].prize}</h3>
            <h4>brand:-{foods[0].brand}</h4>
           
         </div>
         
     </center>

    </>
  )
}

export default Food;