import React from 'react'

export const Titulo = ({fecha}) => {
   return (
      <div className="cabecera">
         <p className="cabecera-p1">PROCESO ELECTORAL FEDERAL {fecha}</p>
         <p className="cabecera-p2">PRESIDENCIA</p>
         <p className="cabecera-p3">DE LOS ESTADOS UNIDOS MEXICANOS</p>
      </div>
   )
}
