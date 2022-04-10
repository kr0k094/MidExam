function solve(input) {


let numberArr = input.map(Number);
let students = numberArr.pop();
let employeesWorkForHour = numberArr.reduce((a,b)=> a + b, 0);
let hours = 0;

while(students > 0){
    hours++;
    if(hours % 4 !== 0){
        students -= employeesWorkForHour;
    }

}

console.log(`Time needed: ${hours}h.`);

}
solve(['5','6','4','20'])
solve(['1','2','3','45'])
solve(['3','2','5','40'])