// Example of SWITCH case
let day = 5;
let dayname;

switch(day){
    case 1:
        dayname = 'Sunday';
        break;
    case 2:
        dayname = 'Monday';
        break;
    case 3:
        dayname = 'Tuesday';
        break;
    case 4:
        dayname = 'Wednesday';
        break;
    case 5:
        dayname = 'Thursday';
        break;
    case 6:
        dayname = 'Friday';
        break;
    case 7:
        dayname = 'Saturday';
        break;
    default:
        dayname = 'Invalid Day';
    }

    //printing the day
    console.log(dayname);