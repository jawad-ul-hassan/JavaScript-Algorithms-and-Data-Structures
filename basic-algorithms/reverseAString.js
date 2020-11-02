
/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/

function reverseString(str) {
    let arr = str.split("");
    let newArr=[];
    for(var i=arr.length-1; i>=0; i--){
      newArr.push(arr[i])
    }
    return newArr.join("");
}
  
console.log(reverseString("Greetings from Earth"));
  