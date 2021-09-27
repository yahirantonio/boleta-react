import React from 'react'
import { useForm } from '../hooks/useForms'

export const Ubicacion = () => {
   
   const [values, handleInputChange] = useForm({
      entidadFederativa: '',
      circunscripcionPlurinominal: '',
      distritoFederal: '',
      municipio: '',
   })

   const {
      entidadFederativa, 
      circunscripcionPlurinominal,
      distritoFederal,
      municipio
   } = values;

   return (
      <div className="main_div_form">
         <form className="form">
            <div className="first_form_group">
               <label>ENTIDAD FEDERATIVA: </label>
               <input
                  name="entidadFederativa"
                  type="text"
                  onChange={handleInputChange}
                  value={entidadFederativa}
               />
            </div>
            <div className="second_form_group">
               <label >CIRCUNSCRIPCION PLURINOMINAL: </label>
               <input
                  name="circunscripcionPlurinominal"
                  type="text"
                  onChange={handleInputChange}
                  value={circunscripcionPlurinominal}
                  className="form_group_input_mini"
               />
            </div>
            <div className="third_form_group">
               <label >DISTRITO FEDERAL: </label>
               <input
                  name="distritoFederal"
                  type="text"
                  onChange={handleInputChange}
                  value={distritoFederal}
                  className="form_group_input_mini"
               />
            </div>
            <div className="fourth_form_group">
               <label >MUNICIPIO: </label>
               <input
                  name="municipio"
                  type="text"
                  onChange={handleInputChange}
                  value={municipio}
                  className="form_group_input_municipality"
               />
            </div>
         </form>
      </div>
   )
}
