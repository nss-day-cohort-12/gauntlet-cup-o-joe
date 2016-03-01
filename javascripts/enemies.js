"use strict";

let Gauntlet = Gauntlet || {};
Gauntlet.Enemies = {};

Gauntlet.Combatants.Monster = function() {
  this.health = this.health - 30;
  this.intelligence = this.intelligence -20;
  this.strength = this.strength + 30;
};

Gauntlet.Combatants.Monster.prototype = new Gauntlet.Combatants.Player();

// ORC
Gauntlet.Combatants.Orc = function() {
  this.health = this.health + 20;
  this.species = "Orc";
  this.allowedClasses = ["Warrior", "Berserker", "Shaman"];

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }
};

Gauntlet.Combatants.Orc.prototype = new Gauntlet.Combatants.Monster();

// DARK ELF
Gauntlet.Combatants.DarkElf = function() {
  this.health = this.health + 30;
  this.species = "Dark Elf";
  // *** this.allowedClasses = ["Warrior", "Berserker", "Shaman"]; ***

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    let random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    let randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }
};

Gauntlet.Combatants.DarkElf.prototype = new Gauntlet.Combatants.Monster();

// 
Gauntlet.Combatants.DarkMage = function() {
  this.health = this.health + 20;
  this.species = "DarkMage";
  // *** this.allowedClasses = ["Warrior", "Berserker", "Shaman"]; ***

  this.generateClass = function() {
    // Get a random index from the allowed classes array
    let random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    let randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new Gauntlet.GuildHall[randomClass]();
    return this.class;
  }
};

Gauntlet.Combatants.DarkMage.prototype = new Gauntlet.Combatants.Monster();

// module.exports = Gauntlet;