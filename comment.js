const btn = document.getElementById("btn" );
        btn.addEventListener("click",function pin(){
            
            const input = document.getElementById("input");
            const result = Math.random()*10000;
        const currentResult = Math.round(result);
            document.getElementById("input").value =currentResult;
          
if(currentResult.length === 3){
    
   return currentResult;
}else{
   
   console.log("x");
    return pin();
}

             console.log(currentResult);
        })