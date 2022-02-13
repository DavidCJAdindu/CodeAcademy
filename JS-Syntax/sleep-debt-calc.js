/*

Sleep Debt Calculator

Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal.

*/


const getSleepHours = day => {

    // switch statement to input daily hours of sleep 
    switch(day) {

    case 'monday':
        return 2;
        break;
    case 'tuesday':
        return 2;
        break;
    case 'wednesday':
        return 24;
        break;
    case 'thursday':
        return 42;
        break;
    case 'friday':
        return 2;
        break;
    case 'saturday':
        return 24;
        break;
    case 'sunday':
        return 2;
        break;
    default:
        return 'Day of the week not correct!';
        break;

    }

}
    
// function to get the total sleep hours that you actually slept
const getActualSleepHours = () => {
    return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
};


// function to get the ideal sleep hours that you prefer
const getIdealSleepHours = () => {
    const idealHours = 7.5;
    return idealHours * 7;
};


// function to calculate sleep debt
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {
        console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        let sleepGain = actualSleepHours - idealSleepHours;
        console.log(`You got ${sleepGain}hrs more sleep than needed! :)`);
    } else {
        let sleepLoss = idealSleepHours - actualSleepHours;
        console.log(`You should get some more rest, you need ${sleepLoss} more hours! :(`);
    }
};
    
    
calculateSleepDebt();
    
    
    
    
// console.log("The amount of hours you slept this week is: " + getActualSleepHours() + "hrs");

// console.log("Your ideal weekly hours of sleep is: " + getIdealSleepHours() + "hrs");


    
    
    
    
    

