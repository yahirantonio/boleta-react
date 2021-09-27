import { groups } from "../../database/groups"


export const getPoliticalGroupsById = (political='') => {
   // console.log(groups)
   // groups.forEach(value=>{
   //    console.log(value.id)
   // })
   return groups.some(({id})=>id===political)
}
