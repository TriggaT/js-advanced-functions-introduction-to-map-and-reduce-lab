// Your code here
function mapToNegativize(sourceArray){
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * -1)
    }
    return newArray
}

function mapToNoChange(sourceArray){
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i])
    }
    return newArray
}

function mapToDouble(sourceArray){
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] * 2)
    }
    return newArray
}

function mapToSquare(sourceArray){
    let newArray = []
    for(let i = 0; i < sourceArray.length; i++){
        newArray.push(sourceArray[i] ** 2)
    }
    return newArray
}

function reduceToTotal(sourceArray, startingPoint = 0){
    let a = startingPoint
    for(let i = 0; i < sourceArray.length; i++){
       a = sourceArray[i] + a
    }
    return a 
}

function reduceToAllTrue(sourceArray){
    let a = true 
    for (let i = 0; i < sourceArray.length; i++){
        if (!!sourceArray[i] === false)
        a = false  
    }
    return a  
}

function reduceToAnyTrue(sourceArray){
    let a = false 
    for (let i = 0; i < sourceArray.length; i++){
        if (!!sourceArray[i] === true)
        a = true 
    }
    return a 
}