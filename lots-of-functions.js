

function sayHi(name){
let result = "Hi, " + name;
return result 
}
console.log(sayHi("Victor"))


function bigString(x, y){
    if(x.length > y.length){
        return x;
    } else if( y.length > x.length)
    {
        return y;
    }
    return "Equal in size"
}

console.log()
console.log(bigString("bird","dog"))
console.log(bigString("dog","bird"))
console.log(bigString("cat","dog"))

 console.log()

function bigNumber(x,y){
    if(x > y){
        return x;
    } else if(y > x)
    {
        return y;
    }
    return "Equal in size"
}
console.log(bigNumber(2,1))
console.log(bigNumber(1,2))
console.log(bigNumber(1,1))
console.log()
let num = [1,2,3,4,5]
function fiveMoreOdd(arr){
    for(let i = 0; i < arr.length ; i++){
        if(arr[i]  % 2 !== 0){
             arr[i] = arr[i] + 5;
        }
        
    }
    return arr
}
console.log(fiveMoreOdd(num))
console.log()

function arraySummer(arr){
    let sum = 0
    for(let i = 0; i < arr.length ; i++){
        console.log(arr[i])
        sum+=arr[i]
}
return sum
}
console.log(arraySummer([1,2,3,4,5]))

console.log()
let n = 7;
function everyDivisible(x){
    z = 0
    while(z <= 100){
        z = z + x
        if(z<=100){
            console.log(z)
        }
    }
}
everyDivisible(n)