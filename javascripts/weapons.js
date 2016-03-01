// WEAPON PROTOTYPE CONSTRUCTOR
var Weapon = function() {
  this.name = "bare hands";
  this.damage = 1;
  this.hands = 2;

  this.toString = function() {
    return this.name;
  }
};

// WARRIOR CLASS WEAPONS
    // BROADSWORD
    var BroadSword = function() {
      this.name = "broad sword";
      this.damage = 14;
      this.hands = 2;
    };
    BroadSword.prototype = new Weapon();

    // WARAXE
    var WarAxe = function() {
      this.name = "war axe";
      this.damage = 18;
      this.hands = 2;
    };
    WarAxe.prototype = new Weapon();

    // CLAYMORE
    var Claymore = function() {
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
    var Dagger = function() {
      this.name = "dagger";
      this.damage = 4;
      this.hands = 1;
    };
    Dagger.prototype = new Weapon();

    // KATANA
    var Katana = function() {
      this.name = "katana";
      this.damage = 12;
      this.hands = 2;
    }
    Katana.prototype = new Weapon();