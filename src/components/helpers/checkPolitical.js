export const checkPolitical = (dataVote = []) => {
   console.log("entro")
   let problema;
   console.log(dataVote)

   if(dataVote.length > 3){
      return problema = false;
   }

   if(dataVote.length > 0){

      dataVote.forEach(value=>{
         if(value.candidato !== dataVote[0].candidato){
            console.log("mosntrando candidato en value")
            console.log(value.candidato)
            console.log("mostrando candidato de dataVote")
            console.log(dataVote[0].candidato)
            problema =  false
         } else {
            problema = true
         }
      })

      return problema;
   }

   return problema = true
}
