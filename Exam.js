function MyFunction(){
 var Rows = window.prompt("How many times?");
 
 document.getElementById('output').innerHTML = Draw(Rows);
}

function Draw (Rows){
 var result = "";
 var Build = "";
 var Count = 0; 
 if(Rows <= 0){
 return "";
 }
 else{
      for(i = Rows; i > 0; i--){
        Build += makeStars(i) + "<br>";
      }
      
       Return Build;
   }
 }
 
 function makeStars(num){
  var result = "";
  var count = 0;
  while(count < num){
    result += "*";
    count++;
    
    }
    Return result;
 }
