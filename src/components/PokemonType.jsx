import React from 'react'

export default function PokemonType(props) {

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

    var stripStyle={
        display:'inline-block',
        margin:'0.6rem',
        backgroundColor: colors[props.type],
        padding:'3px 10px',
        borderRadius:'20%/50%',
        color:'black'
    }

    return (
        <div className="pokemon_type_strip" style={stripStyle}>
            {props.type}            
        </div>
    )
}
