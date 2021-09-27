import React from 'react'

export const Vote = ({handleClick}) => {
   return (
      <>
         <input 
         className="vote_button" 
         type="submit"
         onClick={handleClick}/>
      </>
   )
}
