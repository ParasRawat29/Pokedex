import React from 'react'

export default function PokemonStats(props) {

 console.log(props)

    const progressColor={
        hp: '#21C34E',
        attack: '#F25454',
        defense: '#7FC0C5',
        speed:'#BB73DC'
    }

    return (
        <div className="stats">
                    
                  {props.stats.map((item)=>{

                      if(item.stat.name!='special-attack' && item.stat.name!='special-defense'){
                        return (
                            <div style={{textAlign:'right',width:'65%',margin:'auto',marginTop:'0.3rem'}}>
                            <h4 style={{display:'inline-block',fontSize:'1.4rem',fontFamily: 'Righteous',fontWeight:'500'}}>{item.stat.name}</h4>
                            <div className='progress_container' style={{display:'inline-block',margin:'0.2rem 0.6rem ' }}>
                                <div className="progress"  style={{width:`${item.base_stat}px`,backgroundColor:`${progressColor[item.stat.name]}`}}></div>
                            </div>
                            <span style={{fontSize:'1.2rem'}}>{item.base_stat}</span>
                        </div >)
                      }
                    
                  })
                  }        
        </div>
    )
}
