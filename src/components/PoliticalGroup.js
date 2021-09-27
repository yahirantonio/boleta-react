import React from 'react'

export const PoliticalGroup = ({candidato, partido, imagen, cruz, description, handleClick, id}) => {
   
   return (
      <div
         className="card_political_group"
         onClick={()=>handleClick(id)}
      >
         <img 
            className="card_political_group_image" 
            src={`./assets/${imagen}`}
            alt={description}/>
         <p 
            className="card_political_group_candidate"
         >{candidato}</p>
         <p 
            className="card_political_group_group"
         >{partido}</p>
         <img 
            className="card_political_group_image_cross" 
            src={cruz}
            name={id}
            alt="imagen de una cruz"
            />
            
      </div>
   )
}
