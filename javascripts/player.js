"use strict";

/*
  TODO: Modularize this code with IIFE or Browserify
 */
Gauntlet.Combatants = {};

/*
  Define the base object for any player of Gauntlet,
  whether a human player or a monster.
 */
Gauntlet.Combatants.Player = function(name) {
  this.species = null;
  this.class = null;
  this.weapon = null;

  this.playerName = name || "unknown adventurer";
  this.health = Math.floor(Math.random() * 40 + 50);
  this.limbs = ["head", "neck", "arm", "leg", "torso"];
  this.skinColor = "gray";
  this.skinColors = [this.skinColor];
  this.strength = 90;
  this.intelligence = 90;

  this.toString = function() {
    let output = [this.playerName,
      ": a ",
      this.skinColor,
      " skinned ",
      this.species,
      " ",
      this.class,
      " with ",
      this.health,
      " health. ",
      (this.class.magical) ? "Able to cast " : " Wielding a ",
      this.weapon.toString(),
      "!"
    ].join("");
    return output;
  };
};

Gauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
  this.weapon = newWeapon
  this.name += this.weapon.name;
  this.damage += this.weapon.damage;
  this.hands += this.weapon.hands;
  return this.weapon;
}

Gauntlet.Combatants.Player.prototype.setClass = function(className) {
  // Composes the corresponding player class into the player object
  this.class = new Gauntlet.GuildHall[className]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  this.strength += this.class.strengthBonus;
  this.intelligence += this.class.intelligenceBonus;
  return this.class;
};

Gauntlet.Combatants.Player.prototype.generateClass = function() {
  // Get a random index from the allowed classes array
  let random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  // Get the string at the index
  let randomClass = this.allowedClasses[random];

  // Composes the corresponding player class into the player object
  this.class = new Gauntlet.GuildHall[randomClass]();

  // Add the health bonus
  this.health += this.class.healthBonus;
  return this.class;
};

// Gauntlet.Combatants.Player.prototype.generateWeapon = function() {
//   // Get a random index from the allowed weapons array
//   let random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

//   // Get the string at the index
//   let randomWeapon = this.allowedWeapons[random];

//   // Composes the corresponding weapon into the player object
//   this.weapon = new Gauntlet.Armory[randomWeapon]();

//   return this.weapon;
// };

/*
  Define the base properties for a human in a 
  constructor function.
 */
Gauntlet.Combatants.Human = function() {
  let randomSkin;

  this.species = "Human";
  this.intelligence = this.intelligence + 20;

  this.skinColors.push("brown", "red", "white", "disease");
  randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
  this.skinColor = this.skinColors[randomSkin];

  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk", "Wizard", "Sorcerer", "Conjurer", "Shaman", "Thief", "Ninja", "Assassin", "Hunter"];
};
Gauntlet.Combatants.Human.prototype = new Gauntlet.Combatants.Player();

// module.exports = Gauntlet;