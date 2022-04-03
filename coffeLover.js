function solve(input){

    function swapNumbersByIndexes(arr, index1, index2){

        let firstNum = arr[index1];
        let secondNum = arr[index2];

        arr[index1] = secondNum;
        arr[index2] = firstNum

        return arr

    }

    let myList = input.shift().split(" ");
    let commands = Number(input.shift());

    input.forEach(element => {
        let tokens = element.split(" ");
        let command = tokens[0];

        switch(command){
            case "Include": myList.push(tokens[1]); 
            break;
            case "Remove" : 
            if(myList.length > Number(tokens[2])){
                if(tokens[1] == "first"){
                   myList = myList.splice(Number(tokens[2]));
                }else{
                    let neededTool = Number(tokens[2]) * -1;
                    myList.splice(neededTool);
                }
            };
            break;
            case "Prefer": 

            swapNumbersByIndexes(myList,tokens[1], tokens[2]);
            break;
            case "Reverse": myList = myList.reverse();

        }
    });


console.log("Coffees:");

console.log(myList.join(" "));

}
// solve((["Robusta StrongCoffee BulkCoffee TurkishCoffee Arabica",
// "3",
// "Include OrdinaryCoffee",
// "Remove first 1",
// "Prefer 4 1"])
// )

// solve((["Arabica Robusta BulkCoffee StrongCoffee TurkishCoffee",
// "5",
// "Include OrdinaryCoffee",
// "Remove first 1",
// "Prefer 0 1",
// "Prefer 3 1",
// "Reverse"])
// )

solve(["Arabica Liberica Charrieriana Magnistipula Robusta BulkCoffee StrongCoffee",
   "5",
    "Include TurkishCoffee",
    "Remove first 2",
    "Remove last 1",
    "Prefer 3 1",
    "Reverse",])