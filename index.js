function isPalindrome(word) {
  // Write your algorithm here
  // iterate from the beginning to the middle
  for(let i=0; i < word.length / 2; i++){
     //   check each leteer to the corresponding letter from the end
     const j = word.length - 1 - i;
     const startChar = word[i];
     const endChar = word[j];
  //     if any letters don't match, return false.

      if (startChar !== endChar) return false;


  }
  
  // return type(true, false)
  return true;


}

/* 
how the iteration will execute
r a c e c a r
0 1 2 3 4 5 6
i           j

r a c e c a r
0 1 2 3 4 5 6
  i       j

r a c e c a r
0 1 2 3 4 5 6
    i   j

r a c e c a r
0 1 2 3 4 5 6
      ij
   


  Add your pseudocode here
  that means if the first letter is the same a the last letter and the second letter
  is the sam as the second to last letter, etc. should return true

  iterate from the beginning to the middle
    check each leteer to the corresponding letter from the end
      if any letters don't match, return false.

  otherwise return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("oppo"))
}

module.exports = isPalindrome;
