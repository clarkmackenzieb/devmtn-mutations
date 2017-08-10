
function mutation(arr) {
  
 arr[0] = arr[0].toLowerCase(); 
 arr[1] = arr[1].toLowerCase();
  
  
  
  var arrCheck;
  
  for (var i = 0; i < arr[1].length; i++) {
    
    if (arr[0].indexOf(arr[1][i]) !== -1){
      
      arrCheck = true;
      
    }
      
    else {
      
      return false;
    }  
    
  }
  
  return arrCheck;
}

mutation(["hello", "hey"]);