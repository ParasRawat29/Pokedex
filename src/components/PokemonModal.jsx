import React ,{useState} from 'react'
import CancelIcon from '@material-ui/icons/Cancel';
import PokemonType from "./PokemonType";
import PokemonStats from '../components/PokemonStats'


export default function PokemonModal(props) {

    var [activeTab,setactiveTab]=useState(1);






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

                         <div className="tabsContainer" style={{marginBottom:'0.2rem'}}>
                             <button onClick={()=>{setactiveTab(1)}} className={activeTab==1?'active-tab':'tab'}><h2> STATS </h2></button>
                             <button onClick={()=>{setactiveTab(2)}} className={activeTab==2?'active-tab':'tab'}><h2> EVOLUTION </h2></button>
                         </div>   

                         <div className='tabContent'>
                            <div className={activeTab==1?'active-content':'content'} >
                                    <PokemonStats stats={props.stats}/> 
                            </div>
                            <div className={activeTab==2?'active-content':'content'}>
                                <h1>Yet to come</h1>
                            </div>
                        </div>                             
                           
                    </div>
                </section>
            </div>
            
    )
}
