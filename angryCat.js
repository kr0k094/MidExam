function solve(arr, checkPoint, itemRating){
    
 
    
    if(itemRating == "cheap"){
        if(arr[checkPoint] >= arr[checkPoint - 1]){
            let result = arr.slice(checkPoint -1, checkPoint);
            console.log(`Left - ${result}`);

        }else{
            result = arr.slice(checkPoint + 1, checkPoint + 2);
            console.log(`Right - ${result}`);
            
            
        }
    }else if(itemRating == "expensive"){
        let leftSide = arr.splice(0,checkPoint);
        let rightSide = arr.splice(1);
        let leftSum = leftSide.reduce((a,b)=> a + b, 0);
        let rightSum = rightSide.reduce((a,b)=> a + b, 0);
        
    if(leftSum >= rightSum){
        console.log(`Left - ${leftSum}`);
    }else{
        console.log(`Right - ${rightSum}`);
    }
}



}
solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive")

    // solve([5, 10, 12, 5, 4, 20],
    //     3,
    //     "cheap")

    // solve([1, 5, 1],
    //     1,
    //     "cheap")
        
        
    