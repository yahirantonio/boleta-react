export const findAndDeletePolitical = (dataVote, id) => {
   let indice;

   dataVote.forEach((value,index) => {
      if(value.id === id)
         indice = index;
   });

   dataVote.splice(indice,1);
}
