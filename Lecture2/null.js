function getVowels(str){
    const m = str.match(/[aeiou]/gi);//gi=ตรวจสอบว่าแมทกันมั้ย ไม่สนใจว่าตัวเล็กหรือตัวใหญ่
    if(m===null){
        return 0
    }
    console.log(m)
    return m.length;
}
console.log(getVowels("seeing"));