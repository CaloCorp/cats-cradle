const challenge = function(num){

    console.log(`##### ${num} ##### `)

}

challenge(1)

const onlyVowels = function(str){
 
    for (let i=0; i < str.length; i++){

        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || 
        str[i] === "o" || str[i] === "u") {
                
            console.log(str[i])
        }   
       }
    }

    onlyVowels('Regular expressions are for term 2.')

challenge(2)

const firstFiveVowels = function(str){
let count = 0
    let vowels ='aeiou'

for (let i=0; i < str.length;i++){
    
    if (vowels.includes(str[i]) && count < 5){
    console.log(str[i])
    count++
}
    }   
   }

firstFiveVowels("Regular expressions are for term 2.")

challenge(3)

const every3rd = function (str){
    
    for (let i=0; i <= str.length;i+3){

        console.log(str[i])
}
}


