//Grabbing data using d3
    d3.json("/avocado_prices").then(function(avocado_prices){
       console.log(avocado_prices);
    
    
    }).catch(function(error) {
        console.log(error);
      
     
});