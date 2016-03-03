"use strict";

let Gauntlet = {};
Gauntlet.Armory = {};

// WEAPON PROTOTYPE CONSTRUCTOR
Gauntlet.Armory.Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

// WARRIOR CLASS WEAPONS
    // BROADSWORD
    Gauntlet.Armory.BroadSword = function() {
      this.name = "broad sword";
      this.damage = 14;
      this.hands = 2;
    };
    Gauntlet.Armory.BroadSword.prototype = new Gauntlet.Armory.Weapon();

    // WARAXE
    Gauntlet.Armory.WarAxe = function() {
      this.name = "war axe";
      this.damage = 18;
      this.hands = 2;
    };
    Gauntlet.Armory.WarAxe.prototype = new Gauntlet.Armory.Weapon();

    // CLAYMORE
    Gauntlet.Armory.Claymore = function() {
      this.name = "Claymore";
      this.damage = 15;
      this.hands = 2;
    }
    Gauntlet.Armory.Claymore.prototype = new Gauntlet.Armory.Weapon();

// STEALTH CLASS WEAPONS
    // BOW AND ARROW
    Gauntlet.Armory.BowAndArrow = function() {
      this.name = "bow and arrow";
      this.damage = 12;
      this.hands = 2;
    }
    Gauntlet.Armory.BowAndArrow.prototype = new Gauntlet.Armory.Weapon();

    // DAGGER
    Gauntlet.Armory.Dagger = function() {
      this.name = "dagger";
      this.damage = 4;
      this.hands = 1;
    };
    Gauntlet.Armory.Dagger.prototype = new Gauntlet.Armory.Weapon();

    // KATANA
    Gauntlet.Armory.Katana = function() {
      this.name = "katana";
      this.damage = 12;
      this.hands = 2;
    }
    Gauntlet.Armory.Katana.prototype = new Gauntlet.Armory.Weapon();

// module.exports = WeaponsPage;