function analyzeArray (arr){
    let min =  arr[0]
    let max = arr[0]
    let arrSum = 0
    let length

    
    for ( length = 0; length < arr.length; length++){
        arrSum += arr[length]
        if(min > arr[length]){
            min = arr[length]
        }
        if(max < arr[length]){
            max = arr[length]
        }
    }
    let averge = arrSum / length
   
    
    
    return {
        min,
        max,
        averge,
        length
    }
}

export default analyzeArray