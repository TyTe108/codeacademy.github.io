//Define three arrays containing different parts of the quote: subjects, actions, and positive outcomes.
const subjects = ['You', 'Your friend', 'Your family', 'Your colleague'];
const actions = ['can achieve', 'can overcome', 'will conquer', 'will master'];
const positiveOutcomes = ['great success', 'any obstacle', 'all challenges', 'your dreams'];


//Create a function to generate a random index for each array.
function getRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

//Create a function to generate the inspirational quote.
function generateInspirationalQuote() {
  const randomSubject = subjects[getRandomIndex(subjects.length)];
  const randomAction = actions[getRandomIndex(actions.length)];
  const randomOutcome = positiveOutcomes[getRandomIndex(positiveOutcomes.length)];

  return `${randomSubject} ${randomAction} ${randomOutcome}.`;
}

//Call the generateInspirationalQuote function and log the result to the console.
console.log(generateInspirationalQuote());

