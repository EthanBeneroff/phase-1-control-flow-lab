function scuberGreetingForFeet(height){
  // Write your code here!
  let result;
  if (height > 2500) {result = `No can do.`}
  else if (height <= 0) {result = `No can do.`}
  else if (height <= 400){result = `This one is on me!`}
  else if (height > 2000){result = `I will gladly take your thirty bucks.`}
  else {result = `That will be twenty bucks.`}
  return result;
  
}

function ternaryCheckCity(city){
  // Write your code here!
  let result;
  city === `NYC` ? (result = `Ok, sounds good.`) : (result = `No go.`)
  return result;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let result;
  switch (tip){
    case `generous`: 
      result = `Thank you so much.`;
      break;
    case `not as generous`: 
      result = `Thank you.`;
      break;
    default:
      result= `Bye.`
      break;
    





  }
  return result;
}