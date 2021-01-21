import React, { useEffect, useState } from 'react';
import './App.css';     
import PokeCard from './PokeCard'


function App(){
    const noOfPokemon=150;
    var[data,setdata]=useState([])
    var[pokedata,setPokedata]=useState(data);
    var[loading,setloading]=useState(true);

    const getpokemon=async(id)=>{

        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data= await response.json(); 
        console.log(data.types[0].type.name)
        setdata((pre)=>{
            return [...pre,[data.name,data.sprites.front_default,data.types[0].type.name]]
        })
    }

    const searchpokemon=async(e)=>{
        var value=(e.target.value);

        if(value==''){
            setPokedata(data);
        }
        else{
            let newItems=data.filter((item)=>{
                return item[0].indexOf(value)>=0;
            })
            setPokedata(newItems)
        }
    }
    
    useEffect(async()=>{
        for(let i=1;i<=noOfPokemon;i++)
        {
            await getpokemon(i);
            setloading(false);
        }
    },[])
    useEffect(()=>{
        setPokedata(data)
    },[data])
   
    return(
    <>
    <h1 className="heading">POKE<span style={{color:'#F31313'}}>DEX</span></h1><br/>
    {
        loading?<h1>loading...</h1>:<><div className="searchBar_container">
        <input className="searchBar" placeholder="search pokemon" 
        onChange={searchpokemon}       />
        <i className="fa fa-search" aria-hidden="true"></i>
    </div>
    <div className="cardContainer">
       {
           pokedata.map((pokemon,id)=>{
               return <PokeCard name={pokemon[0]} img={pokemon[1]} key={id} type={pokemon[2]}/>
           })
       }
    </div></>
    }
 </>)
}
export default App;