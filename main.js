//IIFE

(function(){

})(); 

function (){}()


function onEdit(e){
    var row = e.range.getRow();
    var col = e.range.getColumn();
  
    if (col === 2 && row > 1 && e.source.getActiveSheet().getName() === "Inventario-de-Computo" ){
        e.source.getActiveSheet().getRange(row,4).setValue(new Date());
  
    }
     
  }