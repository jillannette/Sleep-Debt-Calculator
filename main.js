const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 9
      break;
    case 'tuesday':
      return 8
      break;
    case 'wednesday':
      return 7
      break;
    case 'thursday':
      return 10
      break;
    case 'friday':
      return 10
      break;
    case 'saturday':
      return 10
      break;
    case 'sunday':
      return 9
      break;

      default:
      return "Error!"
  }
};


const getActualSleepHours = () => 
  getSleepHours('monday') +
  getSleepHours('tuesday') +
  getSleepHours('wednesday') +
  getSleepHours('thursday') +
  getSleepHours('friday') +
  getSleepHours('saturday') +
  getSleepHours('sunday');


console.log(getSleepHours('monday'));
console.log(getActualSleepHours());


const getIdealSleepHours = () => {
  let idealSleepHours = 8;
  return idealSleepHours * 7;
};

const calculateSleepDebt = () => {
    const actualSleepHours = 
  getActualSleepHours();
    const idealSleepHours =  
  getIdealSleepHours();

    if(actualSleepHours === idealSleepHours) {
      console.log('You got just the sleep you needed this week');
    } else if(actualSleepHours > idealSleepHours) {
      console.log('You will feel great, you got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep than you wanted this week!');
    } else if(actualSleepHours < idealSleepHours) {
      console.log('Go to bed early, you got ' + (idealSleepHours - actualSleepHours) + ' less hours of sleep than you needed this week!');
    } else {
      console.log('Error!  Something went wrong, check your code');
    }
};
calculateSleepDebt();
