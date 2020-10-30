

/*
Return the length of the longest word in the provided sentence.
Your response should be a number.
*/

function findLongestWordLength(str) {
    let arr = str.split(" ");
    let longest = 0;
    let longestWord = "";
    for(var i=0; i<arr.length; i++){
      if (arr[i].length>longest){
        longest = arr[i].length
        longestWord = arr[i]
      }
    }
    console.log(longestWord);
    return longest;
}
  
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
  