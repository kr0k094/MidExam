function solve(input){

    let arr = input.shift().split(" ").map(Number);
    let numbers = arr.map(Number);

    function swapNumbersByIndexes(arr, index1, index2){

        let firstNum = arr[index1];
        let secondNum = arr[index2];

        arr[index1] = secondNum;
        arr[index2] = firstNum

        return arr

    }

    function multiplyByIndexes(arr, index1, index2){
        
        let firstNum = arr[index1];
        let secondNum = arr[index2];

        let multiply = firstNum * secondNum;
        arr[index1] = multiply;

        return arr;
    }
    


    for (const line of input) {
        let tokens = line.split(" ");
        
            let command = tokens[0];
            let index1 = Number(tokens[1]);
            let index2 = Number(tokens[2]);
        

       switch(command){
        case "swap" : swapNumbersByIndexes(numbers, index1, index2);
           break;

        case "multiply" : multiplyByIndexes(numbers, index1, index2);
            break;
        case "decrease" :  numbers = numbers.map((x)=> x - 1);
            break;
        case "end": break;
       }

        

    }



console.log(numbers.join(", "));

}
solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
  ]
  )