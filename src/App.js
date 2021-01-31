import React, { useEffect, useState } from 'react';
import "./App.css";     
import PokeCard from './components/PokeCard'
import PokemonModal from "./components/PokemonModal";
function App(){
    const noOfPokemon=50;
    var[data,setdata]=useState([])
    var[pokedata,setPokedata]=useState(data);
    var[loading,setloading]=useState(true);
    var[modalVisibility,setmodalVisibility]=useState(false);
    
    var[modalData,setModalData]=useState({})


    const getpokemon=async(id)=>{

        const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data= await response.json(); 
        setdata((pre)=>{
            return [...pre,{name:data.name,
                            img:data.sprites,
                            type:data.types,
                            weight:data.weight,
                            height:data.height,
                            order:data.order,
                            moves:data.moves
                        }
                    ]
        })
    }

    const searchpokemon=async(e)=>{
        let value=e.target.value;

        if(value===''){
            setPokedata(data);
        }
        else{
            let newItems=data.filter((item)=>{
                return item.name.indexOf(value)>=0;
            })
            setPokedata(newItems)
        }
    }



    const getMoreInfo=(showIndex)=>{

        console.log(showIndex)
        setmodalVisibility(()=> true);
        setModalData(()=>{
            return {
                    name:pokedata[showIndex].name,
                    img:pokedata[showIndex].img,
                    types:pokedata[showIndex].type,
                    weight:pokedata[showIndex].weight,
                    height:pokedata[showIndex].height
                }
        })
    }

    const closeModal=()=>{
        setmodalVisibility(false);
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
   
    // console.log(pokedata)
    return(
    <>
    <h1 className="heading">POKE<span style={{color:'#F31313'}}>DEX</span></h1><br/>
    {
        loading?<h1>Loading...</h1>:<><div className="searchBar_container">
        <input className="searchBar" placeholder="search pokemon" 
        onChange={searchpokemon}       />
        <i className="fa fa-search" aria-hidden="true"></i>
    </div>
    
    <div className="mainsection"> 
    {modalVisibility?<PokemonModal closeModal={closeModal} 
                                    name={modalData.name} 
                                    img={modalData.img}
                                    types={modalData.types}
                                    weight={modalData.weight}
                                    height={modalData.height}



    />:null}
        <div className="cardContainer">
        {
            pokedata.map((pokemon,index)=>{
                return <PokeCard getMoreInfo={getMoreInfo}
                name={pokemon.name} 
                img={pokemon.img.front_default} 
                id={index}
                key={index} 
                type={pokemon.type[0].type.name}
                order={pokemon.order}
                />
            })
        }
        </div>
    </div></>
    }
 </>)
}
export default App;