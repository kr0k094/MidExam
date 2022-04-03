function solve(input){

    let experience = input.shift(); 
    let batles = input.shift();
    let batlesCounter = 0;
    let experienceFromNextBatle = input.shift();


    while(experience > 0 && batlesCounter < batles){
        batlesCounter++;
        
        if(batlesCounter % 3 == 0){
            experienceFromNextBatle += (experienceFromNextBatle * 0.15);
        }
        if(batlesCounter % 5 == 0){
            experienceFromNextBatle -= (experienceFromNextBatle * 0.1);
        }
        if(batlesCounter % 15 == 0){
            experienceFromNextBatle += (experienceFromNextBatle * 0.05);
        }
        
        experience -= experienceFromNextBatle;

        experienceFromNextBatle = input.shift();


    }

    if(experience > 0){
        console.log(`Player was not able to collect the needed experience, ${experience.toFixed(2)} more needed.`)
    }else{
        console.log(`Player successfully collected his needed experience for ${batlesCounter} battles.`)
    }



}


// solve(([500,
//     5,
//     50,
//     100,
//     200,
//     100,
//     20])
    
//     )

    solve(([400,
        5,
        50,
        100,
        200,
        100,
        20])
        )