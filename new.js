function solve(arr, checkPoint, rating){
    let workArr = arr.slice();
    let isCheap = true  ;

    let leftSide = workArr.splice(0,checkPoint);
    let rightSide = workArr.splice(1);
    
if(rating == "expensive"){
    isCheap = false;
    leftSide = leftSide.filter((x)=> x >= arr[checkPoint]);
    rightSide = rightSide.filter((x)=> x >= arr[checkPoint])
}else{
    leftSide = leftSide.filter((x)=> x < arr[checkPoint]);
    rightSide = rightSide.filter((x)=> x < arr[checkPoint])
     
    }

    leftSum = leftSide.reduce((a,b)=> a + b, 0);
    rightSum = rightSide.reduce((a,b)=> a + b, 0);

    
    
        if(leftSum >= rightSum){
            console.log(`Left - ${leftSum}`);
        }else{
            console.log(`Right - ${rightSum}`);

        }
   
        
    

}
// solve([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
//     7,
//     "expensive")

// solve([5, 10, 12, 5, 4, 20],
//     3,
//     "cheap")
      
solve([1, 5, -1],
    1,
    "cheap")
    