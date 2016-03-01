"use strict";

let Gauntlet = Gauntlet || {};
Gauntlet.Armory = {};

// WEAPON PROTOTYPE CONSTRUCTOR
let Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

// WARRIOR CLASS WEAPONS
    // BROADSWORD
    let BroadSword = function() {
      this.name = "broad sword";
      this.damage = 14;
      this.hands = 2;
    };
    BroadSword.prototype = new Weapon();

    // WARAXE
    let WarAxe = function() {
      this.name = "war axe";
      this.damage = 18;
      this.hands = 2;
    };
    WarAxe.prototype = new Weapon();

    // CLAYMORE
    let Claymore = function() {
      this.name = "Claymore";
      this.damage = 15;
      this.hands = 2;
    }
    Claymore.prototype = new Weapon();

// STEALTH CLASS WEAPONS
    // BOW AND ARROW
    var BowAndArrow = function() {
      this.name = "bow and arrow";
      this.damage = 12;
      this.hands = 2;
    }
    BowAndArrow.prototype = new Weapon();

    // DAGGER
    let Dagger = function() {
      this.name = "dagger";
      this.damage = 4;
      this.hands = 1;
    };
    Dagger.prototype = new Weapon();

    // KATANA
    let Katana = function() {
      this.name = "katana";
      this.damage = 12;
      this.hands = 2;
    }
    Katana.prototype = new Weapon();

// module.exports = WeaponsPage;