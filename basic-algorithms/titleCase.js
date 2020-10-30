
/*
Return the provided string with the first letter of each word capitalized. Make sure the rest of
the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
    let newStr= str.toLowerCase();
    let arr = newStr.split(" ");
    let newArr=[]
    for(var i=0; i<arr.length; i++){
      newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
    }
    return newArr.join(" ");
}
  
console.log(titleCase("I'm a little tea pot"));
  