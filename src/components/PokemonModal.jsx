import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import PokemonType from "./PokemonType";
import PokemonStats from '../components/PokemonStats'


export default function PokemonModal(props) {

    console.log(props)
    return (

            <div className="modalContainer"> 
                <section className="modalMain">
                    <div className='modal_left'>
                        <img src={props.img.front_default}/>
                        <h3 className="nameInModal">{props.name}</h3>
                        <div className="modal_poke_types">
                            {
                                props.types.map((item)=>{
                                    console.log(item.type.name)
                                    return <PokemonType type={item.type.name}/>
                                })
                            }
                        </div>
                    </div>

                    <div className='modal_right'>
                        <button className="closeModalBtn" onClick={props.closeModal}>
                            <CancelIcon/>
                        </button>  
                            <div className='wt_ht_container'>
                                <div className='weight'>Weight : <span className='weightValue'>{props.weight} kg</span> </div>
                                <div className='height'>Height : <span className='heightValue'>{props.height} m </span> </div>
                            </div>
                            
                               <PokemonStats stats={props.stats}/>                                
                           
                    </div>
                </section>
            </div>
            
    )
}
