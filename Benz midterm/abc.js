function removeABC(text){
    if(text.match(/[abc]/g)){
        text = text.replace(/[abc]/g,' ');
        return text;
    } else {
        return null
    }
}

console.log(removeABC("This might be a bit hard"));
console.log(removeABC("hello world!"));
console.log(removeABC(""));