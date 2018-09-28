console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============



  
  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

const makeMiddleEarth = () => {

  const $middleEarth = $('<section/>');
  $middleEarth.attr('id', 'middle-earth');

$('body').append($middleEarth);

for(let i = 0; i < lands.length; i++) {
  const $land = $('<article/>')
  $land.attr('id', lands[i]);
  $land.append(`<h1>${lands[i]}</h1>`);
  $middleEarth.append($land);
  
}
}




// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============


const makeHobbits = () =>{
  const $hobbitList = $('<ul class="hobbits"></ul>')
  hobbits.forEach((hobbit)=>{
    const $hobbit = $('<li/>').text(hobbit).addClass('hobbit');
    $hobbit.appendTo($hobbitList)
    console.log(hobbit)
  });
  $('#The-Shire').append($hobbitList);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
 const keepItSecretKeepItSafe = () => {

const $ring = $('div').attr('id', 'the-ring');
  const $frodo = $('.hobbit:contains("frodo")')
$frodo.append($ring)


 }

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {
 
  const $baddyList = $('<ul class="baddies"></ul>')
  baddies.forEach((baddy)=>{
    const $baddy = $('<li/>').text(baddy).addClass('baddy');
    $baddy.appendTo($baddyList)

  });
  $('#Mordor').append($baddyList);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  const $buddyAside = $('<asside class="buddies"></aside>')
  const $buddyList = $('<ul class="buddies"></ul>')
  $('#middle-earth').append($buddyAside);
  buddies.forEach((buddy)=>{
    const $buddy = $('<li/>').text(buddy).addClass('buddy');
    $buddy.appendTo($buddyList);

  })
$buddyAside.append($buddyList);
$('#middle-earth').append($buddyAside);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {
  $('.hobbit').parent().appendTo('#middle-earth #Rivendell');

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {
  $('.buddy:contains("Strider")').text('Aragorn');

  // 1. change the buddy 'Strider' textnode to "Aragorn"

  // hint: You can get a list of elements by tag name, such as 'aside'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  const $theFellowShip = $('<div/>');
  $theFellowShip.attr('id', 'the-fellowship');
  $theFellowShip.append('<h1>The Fellowship</h1>');
  $theFellowShip.append($('.hobbits'))
  $theFellowShip.append($('.buddies'))
  $('#middle-earth').append($theFellowShip)

  // 1. create a new div with an id 'the-fellowship'

  // 2. add an h1 with the text 'The Fellowship' to this new div

  // 3. append the fellowship to middle-earth

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  $('.buddy:contains("Gandalf the Grey")').text('Gandalf the White').addClass("the-white");

  // 1. change the 'Gandalf' textNode to 'Gandalf the White'

  // 2. add a class "the-white" to this element

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  alert("The Horn of Gondor has been blown");
  $('.buddy:contains("Boromir")').css("text-decoration", "line-through")
  $('.baddy:contains("Uruk-hai")').remove();

  // 1. create a pop-up alert that the horn of gondor has been blown

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {
  $('#Mordor').append($('.hobbit:contains("Sam"), .hobbit:contains("Frodo")'))
  $('#mordor').append('<div id=mount-doom></div>')


  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  // 2. add a div with an id of 'mount-doom' to Mordor

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {
$('#Mordor').append('<div id= gollum></div>')
$('#gollum').append($('#the-ring'))
$('#mount-doom').append($('#gollum'))
  // 1. Create a div with an id of 'gollum' and add it to Mordor

  // 2. Move the ring from Frodo and give it to Gollum

  // 3. Move Gollum into Mount Doom

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {
  $('#gollum').remove();
  $('#baddies').remove();
  $('#hobbits').appendTo($('#The-Shire'));

  // 1. remove Gollum and the Ring from the DOM

  // 2. remove all the baddies from the DOM

  // 3. Move all the hobbits back to the shire

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);
  $('#1').click();
  $('#2').click();
  $('#3').click();
  $('#4').click();
  $('#5').click();
  $('#6').click();
  $('#7').click();
  $('#8').click();
  $('#9').click();
  $('#10').click();
  $('#11').click();
  $('#12').click();
  $('#13').click();
  
})
