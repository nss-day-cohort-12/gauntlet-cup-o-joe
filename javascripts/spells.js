/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = Gauntlet || {};
Gauntlet.SpellBook = {};


/*
  Base spell function that defines name, damage, damage type
 */
Gauntlet.SpellBook.Spell = function() {
  this.name = "";
  this.damage = 0;

  this.damageTypes = ["lightning", "fire", "water", "earth", "mysticism"];
  this.type = "";

  this.toString = function() {
    return this.name + " of " + this.type + " for " + this.damage + " damage!";
  }
};

/*
  An elemental water sphere that can be cast by a magical class
 */
Gauntlet.SpellBook.WaterSphere = function() {
  this.name = "water sphere";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.WaterSphere.prototype = new Gauntlet.SpellBook.Spell();

/*
  An elemental thunderbolt that can be cast by a magical class
 */
Gauntlet.SpellBook.ThunderBolt = function() {
  this.name = "thunder bolt";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.ThunderBolt.prototype = new Gauntlet.SpellBook.Spell();

/*
  An elemental thunderbolt that can be cast by a magical class
 */
Gauntlet.SpellBook.FireStream = function() {
  this.name = "fire stream";
  this.damage = Math.floor(Math.random() * 10 + 10);

  var random = Math.round(Math.random() * (this.damageTypes.length - 1));
  this.type = this.damageTypes[random];
};
Gauntlet.SpellBook.FireStream.prototype = new Gauntlet.SpellBook.Spell();

module.exports = spells;