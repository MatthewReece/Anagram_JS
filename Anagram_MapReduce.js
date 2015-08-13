var text = "the cat act in tic tac toe.";

var keyVal = {}; 

function matchAnagram(textInput) {
	var text = textInput;
    
    //format the string to convert to lowercase, remove spaces and puctuation
	text = text.toLowerCase();
    text = text.replace(/\s+/g, ' ');
    text = text.replace(/(?:[\(\)\-&$#!\[\]{}\"\',\.]+(?:\s|$)|(?:^|\s)[\(\)\-&$#!\[\]{}\"\',\.]+)/g, ' ')
.trim();
	text = text.split(" ");
    //the key is the alphabetized letters of each word
    //the value is the word and matching keys add the word to a string
    for(var k in text){
      var anagram = text[k].split("").sort().join("");
      if(keyVal.hasOwnProperty(anagram)){
        keyVal[anagram] +=  " " + text[k];
      }else {keyVal[anagram] = text[k];}
      anagram = "";
    } 
  
    //remove words from KeyVal that have no matching anagrams
    for(var x in keyVal){
      //the minimum length of anagrams is at least 3 chars
      //so 2 words will be a minimum length of 7 including the space
      if(keyVal[x].length < 7){
        delete keyVal[x];
      }
    }
    return keyVal;
}

matchAnagram(text);
console.log(keyVal);