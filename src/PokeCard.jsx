import React from 'react'
import './App.css';
function PokeCard(props) {
    const colors = {
        fire: '#FDDFDF',
        grass: '#DEFDE0',
        electric: '#FCF7DE',
        water: '#DEF3FD',
        ground: '#f4e7da',
        rock: '#d5d5d4',
        fairy: '#fceaff',
        poison: '#98d7a5',
        bug: '#f8d5a3',
        dragon: '#97b3e6',
        psychic: '#eaeda1',
        flying: '#F5F5F5',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    };
    

    return (
        <>
            <div className='card' style={{backgroundColor:colors[props.type]}}>
                <img src={props.img}/>
                <h3 className="pokename">{props.name}</h3>
                <h4 className="type">{props.type}</h4>
            </div>
        </>
    )
}
export default PokeCard

