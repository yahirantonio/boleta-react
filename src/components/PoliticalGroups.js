import React from 'react'
import { groups } from '../database/groups'
import { checkPolitical } from './helpers/checkPolitical';
import { findAndDeletePolitical } from './helpers/findAndDeletePolitical';
import { useCandidate } from './hooks/useCandidate'
import { PoliticalGroup } from './PoliticalGroup';

// {
//    id:"pan-anaya",
//    "candidato": "RICARDO ANAYA CORTES",
//    "partido": "PARTIDO ACCION NACIONAL",
//    imagen: "pan.png",
//    alt: "imagen del pan"
// },

export const PoliticalGroups = ({dataVote=[]}) => {
   const [candidate] = useCandidate()
   const imagenes = document.querySelectorAll(".card_political_group_image_cross")

   const handleClick = (id) =>{
      candidate.forEach((value, index)=>{
         if(value.id === id && value.vote === false){
            value.vote = true
            console.log("entro en meter valor")
            dataVote.push(value)
         } else if(value.id === id && value.vote === true){
            console.log("entro en quitar voto")
            value.vote = false
            // console.log(values)
            findAndDeletePolitical(dataVote, value.id);
            
         }
      })

      let indicator = checkPolitical(dataVote);
      
      console.log(indicator)

      if(indicator){
         doVote(id)
      } else {
         throw new Error("voto no permitido")
      }
   }

   const doVote=(id)=>{
      
      // console.log("mostrando data")
      // console.log(dataVote)
      
      imagenes.forEach(value=>{
         if(id===value.name){
            if(value.style.visibility === 'visible'){
               value.style.visibility = 'hidden';
            } else {
               value.style.visibility = 'visible';
            }
         }
      })
   }

   return (
     
      <div className="main_political_card">
         {
            groups.map(({id,candidato, partido, imagen, alt})=>(
               <PoliticalGroup
                  key={id}
                  candidato={candidato}
                  partido={partido}
                  imagen={imagen}
                  cruz={"./assets/plantilla_cruz.png"}
                  description={alt}
                  id={id}
                  handleClick={handleClick}
               />
            ))
         }
         
      </div>
   )
}
