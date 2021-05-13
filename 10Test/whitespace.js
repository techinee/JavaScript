function insertWhitespace(string) {
    string = string.replace(/([a-z])([A-Z])/g, '$1 $2');
    string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2')
   return string;
}











console.log(insertWhitespace("SheWalksToTheBeach")) ;
console.log(insertWhitespace("MarvinTalksTooMuch"));
console.log(insertWhitespace("TheGreatestUpsetInHistory"));