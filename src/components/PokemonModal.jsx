import React from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import PokemonType from "./PokemonType";



export default function PokemonModal(props) {

    console.log(props)
    return (
        <div className="modalContainer"> 
            <header className="modalHeader">
                <button className="closeModalBtn" onClick={props.closeModal}>
                    <CancelIcon/>
                </button>
            </header>       

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
                        <div className='wt_ht_container'>
                            <div className='weight'>Weight : {props.weight} kg</div>
                            <div className='height'>Height : {props.height}</div>
                        </div>
                        <div className="switch_info">
                            <div className="stats">
                                
                            </div>
                        </div>
                </div>
            </section>
        </div>
    )
}
