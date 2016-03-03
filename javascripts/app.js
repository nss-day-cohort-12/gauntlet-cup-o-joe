"use strict";

// const WeaponsPage = require("./weapons");
// const classes = require("./classes");
// const spells = require("./spells");
// const enemies = require("./enemies");
// const player = require("./player");

// let PlayerCreation = {
//     weapons, classes, spells, enemies, player
// };


  // Test code to generate a human player and an orc player

    // let warrior = new Gauntlet.Combatants.Human();
    // warrior.setWeapon(new Gauntlet.Armory.Weapon());
    // warrior.generateClass();  // This will be used for "Surprise me" option
    // console.log("warrior", warrior.toString());

    // let orc = new Gauntlet.Opponents.Orc();
    // orc.generateClass();
    // orc.setWeapon(new Gauntlet.Armory.BroadSword());
    // console.log("orc", orc.toString());

let newEnemy = new Gauntlet.Opponents.Orc();
newEnemy.generateClass();
newEnemy.setWeapon(new Gauntlet.Armory.BroadSword());
console.log("newEnemy", newEnemy.toString());

let playerOne = "";
let input1 = document.getElementById("player-name");
let button1 = document.getElementById("firstButton");
let classSelection;
let weaponSelection;

// Build Human Player's Human Combatant
let newHuman = new Gauntlet.Combatants.Human();
console.log("newHuman", newHuman);


/*
  Test code to generate a spell
 */
let spell = new Gauntlet.SpellBook.Sphere();
console.log("spell: ", spell.toString());



$(document).ready(function() {
  /*
    Show the initial view that accepts player name
  */
  $("#player-setup").show();

  // Capture the user's input and save the name in a variable

    button1.addEventListener ("click", function(){
        playerOne = input1.value;
        console.log("playerOne", playerOne);
    });

    input1.addEventListener ("keyup", function(event){
        if (event.keyCode === 13){
            playerOne = input1.value;
            console.log("playerOne", playerOne);
          $("#adventurerName").html(playerOne);
        }
    });

    // Capture Player's Selected Class
    let selectedClass;
    $(".addClass").click(function(e){
        selectedClass = $(e.currentTarget).find(".btn__text").html();
        console.log("selectedClass", selectedClass);
    });

    let selectedWeapon;
    $(".addWeapon").click(function(e){
        selectedWeapon = $(e.currentTarget).find(".btn__text").html();
        console.log("selectedWeapon", selectedWeapon);
    });

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
                newHuman.setClass(selectedClass);
                break;
            case "card--battleground":
                moveAlong = ($("#player-name").val() !== "");
                newHuman.setWeapon(selectedWeapon);

                switch (selectedWeapon) {
                  case "BroadSword":
                    newHuman.weapon = new Gauntlet.Armory.BroadSword();
                    break;

                  case "War Axe":
                    newHuman.weapon = new Gauntlet.Armory.WarAxe();
                    break;

                  case "BroadSword":
                    newHuman.weapon = new Gauntlet.Armory.Claymore();
                    break;

                  case "Bow and Arrow":
                    newHuman.weapon = new Gauntlet.Armory.BowandArrow();
                    break;

                  case "Dagger":
                    newHuman.weapon = new Gauntlet.Armory.Dagger();
                    break;

                  case "Katana":
                    newHuman.weapon = new Gauntlet.Armory.Katana;
                    break;
                }
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



var attackbutton = document.getElementById("attack-button");
var domcrap = document.getElementById("display");
var statsOutput = document.getElementById("playerOneInfo");

var humanInfo;

humanInfo += "<h2>Class: " + newHuman.class + "</h2>";



attackbutton.addEventListener("click", function(){
    //Player1 attack
    newEnemy.health = newEnemy.health - newHuman.weapon.damage;
    domcrap.innerHTML= "";
    domcrap.innerHTML += "<p>Player 1 gashes Enemy for " + newHuman.weapon.damage + " damage. Enemy health is " + newEnemy.health + "</p>";

    //Enemy Attack
    newHuman.health = newHuman.health - newEnemy.weapon.damage;
    domcrap.innerHTML += "Enemy gashes Player1 for " + newEnemy.weapon.damage + " damage. Enemy health is " + newHuman.health;
    console.log("newEnemy.health", newEnemy.health);
    console.log("newHuman.health", newHuman.health);
    if (newEnemy.health<=0) {
        domcrap.innerHTML= "";
        domcrap.innerHTML= "Player1 wins";

    };
    if (newHuman.health<=0) {
        domcrap.innerHTML= "";
        domcrap.innerHTML= "Computer wins";

    };

})






// module.exports = PlayerCreation; 
