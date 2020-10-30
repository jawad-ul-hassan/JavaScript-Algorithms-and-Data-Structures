
/*
Truncate a string (first argument) if it is longer than the given maximum 
string length (second argument). Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
    let arr = str.split("");
    let newArr=[];
    for (var i=0; i<num; i++){
      if(arr.length>num){
        newArr.push(arr[i]);
      }
      else{
        return arr.join("");
      }
    }
    return newArr.join("") + "...";
}
  
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
  