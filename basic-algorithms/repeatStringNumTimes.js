
/*
Repeat a given string str (first argument) for num times (second argument). 
Return an empty string if num is not a positive number.
*/

function repeatStringNumTimes(str, num) {
    let newStr = "";
    for (var i=0; i<num; i++){
      newStr += str;
    }
    return newStr;
}
  
console.log(repeatStringNumTimes("abc", 3));
  

