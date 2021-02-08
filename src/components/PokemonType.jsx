import React from 'react'

export default function PokemonType(props) {

    const colors = {
        fire: '#f0ac3e',
        grass: '#75ed5c',
        electric: '#FADE7A',
        water: '#50b0d9',
        ground: '#f08f4f',
        rock: '#8e9799',
        fairy: '#ed7bc3',
        poison: '#D579F5',
        bug: '#f8d5a3',
        dragon: '#ed3b3b',
        psychic: '#841fff',
        flying: '#82f5ff',
        fighting: '#E6E0D4',
        normal: '#F5F5F5'
    };

    var stripStyle={
        display:'inline-block',
        margin:'0.6rem',
        backgroundColor: colors[props.type],
        padding:'3px 10px',
        borderRadius:'20%/50%',
        color:'black',
        fontFamily:'Segoe UI',
        fontWeight:'600',
        fontSize:'1rem'
    }

    return (
        <div className="pokemon_type_strip"
         style={stripStyle} >
            {props.type}            
        </div>
    )
}
