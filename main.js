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
    let vowels =['a','e','i','o','u']

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
    
    for (let i=2; i < str.length;i+=3){

        console.log(str[i]);
}
}


every3rd('I am the alfalfa and the omelette.')
challenge(4)
const first4char = function(str, start){

    let count =0
    let i= start
    while (i < str.length){

        if (count < 4 ){
            console.log(str[i])
            count++
        }
        i++
    }

}

first4char(`Oh hi, I didn't see you there. Welcome.`, 4)

first4char(`Oh hi, I didn't see you there. Welcome.`, 36)

const indexOfU= function(str){
let i= 0
while (i < str.length){
if (str[i]=== 'u'){
    console.log(i)
}
    i++
}

}


challenge(5)
indexOfU('You picked the wrong house, bub.')
