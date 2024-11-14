import React, { useState } from 'react';
import pizza from "./image/pizza.jpg";
import cake from "./image/cake.jpg";
import chili from "./image/chili paneer.jpg";
import burger from "./image/burger.jpg";
import panner from "./image/panner.jpg";
import dosa from "./image/dosa.jpg";
import { Link } from 'react-router-dom';
import "./Search.css";


const Search = () => {

const [store,setStore]=useState([

    {
        id: 1,
        name: "Pizza",
        brand: "Dominose",
        img: pizza,
      },
    
      {
        id: 2,
        name: "Burger",
        brand: "Kfc",
        img: burger,
      },
    
      {
        id: 3,
        name: "Dosa",
        brand: "Anna",
        img: dosa,
      },
    
      {
        id: 4,
        name: "Panner",
        brand: "shahi",
        img: panner,
      },
    
      { id: 5, 
        name: "Cake", 
        brand: "Softcake", 
        img: cake ,
      },
    
      {
        id: 6,
        name: "chili panner",
        brand: "Softcake",
        img: chili,
      },

      {
        id: 7,
        name: "chili panner",
        brand: "Softcake",
        img: chili,
      },

      {
        id: 8,
        name: "chili panner",
        brand: "Softcake",
        img: chili,
      },

      {
        id: 9,
        name: "chili panner",
        brand: "Softcake",
        img: chili,
      },

      {
        id: 10,
        name: "chili panner",
        brand: "Softcake",
        img: chili,
      },
])


  return (
      
    <>

    <div className='itme1'>

      {store.map((s)=>

      (
        
             <div className='name-id'>
                
             <Link to={`/Food/${s.id}`}>
              
             <div>
                    <img src={s.img}  className='img-name'/>
             </div>

             <h3>{s.name}</h3>

             </Link></div>

             

    ))}

     <Link to='/Todolist'>Todolist</Link>

    </div>

    </>
  )
}

export default Search;