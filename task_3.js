// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


// Solution: ----------

const FindMostFrequent = (arr)=>{
    let record = {}
    let maxValue = 0;
    let maxKey = null;
    // recording the occurrence of each element
    for (let i = 0; i<arr.length; i++){
        record[arr[i]] = record[arr[i]] >= 0 ? record[arr[i]]+1: 0+1;
    }
    
    // finding the most occurred
    for (const key in record) {
        const value = record[key];
        if (value > maxValue) {
          maxValue = value;
          maxKey = key;
        }
    }
    // returning the most occurrence element
    return maxKey
}

//test case 1: 
const arr_1 = [1,2,3,4,5];
//test case 2: 
const arr_2= [3, 5, 2, 5, 3, 3, 1, 4, 5, 5, 0, 20];

const mostFrequent = FindMostFrequent(arr_1)
if(mostFrequent==1){
    console.log(`No element found which occurred more then one time in the array` )
}
else{
    console.log(`${mostFrequent} element is the most frequent` )
}
