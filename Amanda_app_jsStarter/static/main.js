//Grabbing data using d3
    d3.json("/avocadoData").then(function(avocados){
       console.log(avocados);
    
    
    }).catch(function(error) {
        console.log(error);
      
     
});