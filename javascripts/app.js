"use strict";

// const WeaponsPage = require("./weapons");
// const classes = require("./classes");
// const spells = require("./spells");
// const enemies = require("./enemies");
// const player = require("./player");

// let PlayerCreation = {
//     weapons, classes, spells, enemies, player
// };

/*
  Test code to generate a human player and an orc player
 */
// let warrior = new Gauntlet.Combatants.Human();
// warrior.setWeapon(new WarAxe());
// warrior.generateClass();  // This will be used for "Surprise me" option
// console.log(warrior.toString());

// let orc = new Gauntlet.Opponents.Orc();
// orc.generateClass();
// orc.setWeapon(new BroadSword());
// console.log(orc.toString());

// /*
//   Test code to generate a spell
//  */
// let spell = new Gauntlet.SpellBook.Sphere();
// console.log("spell: ", spell.toString());
var playerOne= "";
var input1= document.getElementById("player-name");
var button1= document.getElementById("firstButton");

button1.addEventListener ("click", function(){
  playerOne = input1.value;
  console.log("playerOne", playerOne);

})
input1.addEventListener ("keyup", function(event){
  if (event.keyCode===13){
  playerOne = input1.value;
  console.log("playerOne", playerOne);
  (playerOne)
  }
})















$(document).ready(function() {
  /*
    Show the initial view that accepts player name
   */
  $("#player-setup").show();

  /*
    When any button with card__link class is clicked,
    move on to the next view.
   */
  $(".card__link").click(function(e) {
    let nextCard = $(this).attr("next");
    let moveAlong = false;

    switch (nextCard) {
      case "card--class":
        moveAlong = ($("#player-name").val() !== "");
        break;
      case "card--weapon":
        moveAlong = ($("#player-name").val() !== "");
        break;
    }

    if (moveAlong) {
      $(".card").hide();
      $("." + nextCard).show();
    }
  });

  /*
    When the back button clicked, move back a view
   */
  $(".card__back").click(function(e) {
    let previousCard = $(this).attr("previous");
    $(".card").hide();
    $("." + previousCard).show();
  });

});

// module.exports = PlayerCreation; 