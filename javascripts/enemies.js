"use strict";

Gauntlet.Opponents = {};

/*
  Define the base properties for a monster in a 
  constructor function.
 */

Gauntlet.Opponents.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

Gauntlet.Opponents.Monster.prototype.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }

  Gauntlet.Opponents.Monster.prototype.generateWeapon = function() {
  // Get a random index from the allowed weapons array
  let random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

  // Get the string at the index
  let randomWeapon = this.allowedWeapons[random];

  // Composes the corresponding weapon into the player object
  this.weapon = new Gauntlet.Armory[randomWeapon]();

  return this.weapon;
  };

Gauntlet.Opponents.Monster.prototype = new Gauntlet.Combatants.Player();


// ORC
Gauntlet.Opponents.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk"];
  this.allowedWeapons = ["Broad Sword", "War Axe", "Claymore"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }

  // this.generateWeapon = function() {
  // // Get a random index from the allowed weapons array
  // let random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

  // // Get the string at the index
  // let randomWeapon = this.allowedWeapons[random];

  // // Composes the corresponding weapon into the player object
  // this.weapon = new Gauntlet.Armory[randomWeapon]();

  // return this.weapon;
  // };
};

Gauntlet.Opponents.Orc.prototype = new Gauntlet.Opponents.Monster();

// DARK ELF
Gauntlet.Opponents.DarkElf = function() {
  this.health = this.health + 30;
  this.species = "Dark Elf";
  this.allowedClasses = ["Assassin", "Thief", "Ninja", "Hunter"];
  this.allowedWeapons = ["Bow and Arrow", "Dagger", "Katana"];

  // this.generateClass = function() {
  //   // Get a random index from the allowed classes array
  //   let random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  //   // Get the string at the index
  //   let randomClass = this.allowedClasses[random];

  //   // Composes the corresponding player class into the player object
  //   this.class = new Gauntlet.GuildHall[randomClass]();
  //   return this.class;
  // }

  // this.generateWeapon = function() {
  // // Get a random index from the allowed weapons array
  // let random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

  // // Get the string at the index
  // let randomWeapon = this.allowedWeapons[random];

  // // Composes the corresponding weapon into the player object
  // this.weapon = new Gauntlet.Armory[randomWeapon]();

  // return this.weapon;
  // };
};

Gauntlet.Opponents.DarkElf.prototype = new Gauntlet.Opponents.Monster();

// DARK MAGE
Gauntlet.Opponents.DarkMage = function() {
  this.health = this.health + 20;
  this.species = "DarkMage";
  this.allowedClasses = ["Shaman", "Wizard", "Conjurer", "Sorcerer"];

  // this.generateClass = function() {
  //   // Get a random index from the allowed classes array
  //   let random = Math.round(Math.random() * (this.allowedClasses.length - 1));

  //   // Get the string at the index
  //   let randomClass = this.allowedClasses[random];

  //   // Composes the corresponding player class into the player object
  //   this.class = new Gauntlet.GuildHall[randomClass]();
  //   return this.class;
  // }

  // this.generateWeapon = function() {
  // // Get a random index from the allowed weapons array
  // let random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

  // // Get the string at the index
  // let randomWeapon = this.allowedWeapons[random];

  // // Composes the corresponding weapon into the player object
  // this.weapon = new Gauntlet.Armory[randomWeapon]();

  // return this.weapon;
  // };
};

Gauntlet.Opponents.DarkMage.prototype = new Gauntlet.Opponents.Monster();

// module.exports = Gauntlet;