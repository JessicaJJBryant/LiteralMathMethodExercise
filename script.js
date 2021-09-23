// LITERAL MATH METHOD EXERCISE

// 1a
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
// 1b
console.log(warmHugs.toUpperCase());
// 1c
console.log(warmHugs.replace("like", "love"));

// 2a
let beenImpaled = "Oh, look at that. I've been impaled.";
// 2b
console.log(beenImpaled.slice(18));

// 3a
let dotDotDot = "...";
// 3b
let skullBones = `I don't have a skull${dotDotDot}or bones`;

// 4
console.log(Math.PI);

// 5
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber = Math.floor(randomNumber);
randomNumber++;
console.log(randomNumber);

// 6
console.log(" Let It Go!".toUpperCase() .repeat(3) .trim());

// 7a
let reindeers = "Reindeers are better than people."
// 7b
console.log(reindeers
    .replace("Reindeers ", "Reindeers  ")
    .replace("are ", "are  ")
    .replace("better ", "better  ")
    .replace("than ", "than  "));

// 8
console.log(Math.sqrt(2));

// 9
let newRandomNumber = Math.floor(Math.random() * (23-7) + 7);
