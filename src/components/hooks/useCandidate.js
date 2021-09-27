import { useEffect, useState } from 'react'
import {groups} from '../../database/groups';

export const useCandidate = () => {
   const [candidate, setCandidate] = useState([])

   useEffect(() => {
      let vote = false
      const newGroups = groups.map(({id,candidato,partido}) =>{
         return {id,candidato,partido, vote}
      })
      setCandidate(newGroups)
   }, [])

   return [candidate]
}
