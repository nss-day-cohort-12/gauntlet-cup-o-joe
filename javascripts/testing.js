describe("The specs for Gauntlet Group Project", function() {

// Gauntlet.Combatants object   player.js
  it("Gauntlet should have a Combatants object", function() {
    expect(Gauntlet.Combatants).toBeDefined();
  });

// Player Constructor  player.js
  it("Gauntlet should have a Combatants.Player constructor", function() {
    expect(Gauntlet.Combatants.Player).toBeDefined();
  });

// Player.setWeapon     player.js
  it("Gauntlet.Combatants.Player should have a setWeapon method", function() {
    expect(Gauntlet.Combatants.Player.prototype.setWeapon).toBeDefined();
  });

// Player.generateClass    player.js
  it("Gauntlet.Combatants.Player should have a generateClass method", function() {
    expect(Gauntlet.Combatants.Player.prototype.generateClass).toBeDefined();
  });

// Human Constructor       player.js
  it("Gauntlet should have a Combatants.Human constructor", function() {
    expect(Gauntlet.Combatants.Human).toBeDefined();
  });

// Gauntlet object        
  it("should have a Gauntlet object", function() {
    expect(Gauntlet).toBeDefined();
  });

// ---------------------------------------------------------
// Gauntlet.GuildHall object     classes.js
  it("Gauntlet should have a GuildHall object", function() {
    expect(Gauntlet.GuildHall).toBeDefined();
  });
              // classes.js
	it("Gauntlet should have a GuildHall.PlayerClass constructor", function() {
    expect(Gauntlet.GuildHall.PlayerClass).toBeDefined();
  });

// Fighter Prototype Constructors    classes.js
	it("Gauntlet should have a GuildHall.Fighter constructor", function() {
    expect(Gauntlet.GuildHall.Fighter).toBeDefined();
  });
            // classes.js
	it("Gauntlet should have a GuildHall.Warrior constructor", function() {
    expect(Gauntlet.GuildHall.Warrior).toBeDefined();
  });
            // classes.js
	it("Gauntlet should have a GuildHall.Valkyrie constructor", function() {
    expect(Gauntlet.GuildHall.Valkyrie).toBeDefined();
  });
            // classes.js
	it("Gauntlet should have a GuildHall.Berserker constructor", function() {
    expect(Gauntlet.GuildHall.Berserker).toBeDefined();
  });
            // classes.js
	it("Gauntlet should have a GuildHall.Monk constructor", function() {
    expect(Gauntlet.GuildHall.Monk).toBeDefined();
  });


// Mage Prototype Constructors
	it("Gauntlet should have a GuildHall.Mage constructor", function() {
    expect(Gauntlet.GuildHall.Mage).toBeDefined();
  });
            // classes.js
	it("Gauntlet should have a GuildHall.Shaman constructor", function() {
    expect(Gauntlet.GuildHall.Shaman).toBeDefined();
  });
            // classes.js
	it("Gauntlet should have a GuildHall.Wizard constructor", function() {
    expect(Gauntlet.GuildHall.Wizard).toBeDefined();
  });
            // classes.js
	it("Gauntlet should have a GuildHall.Conjurer constructor", function() {
    expect(Gauntlet.GuildHall.Conjurer).toBeDefined();
  });
            // classes.js
	it("Gauntlet should have a GuildHall.Sorcerer constructor", function() {
    expect(Gauntlet.GuildHall.Sorcerer).toBeDefined();
  });


// Stealth Prototype Constructors
	it("Gauntlet should have a GuildHall.Stealth constructor", function() {
    expect(Gauntlet.GuildHall.Stealth).toBeDefined();
  });
            // classes.js
	it("Gauntlet should have a GuildHall.Thief constructor", function() {
    expect(Gauntlet.GuildHall.Thief).toBeDefined();
  });
            // classes.js
	it("Gauntlet should have a GuildHall.Ninja constructor", function() {
    expect(Gauntlet.GuildHall.Ninja).toBeDefined();
  });
            // classes.js
	it("Gauntlet should have a GuildHall.Assassin constructor", function() {
    expect(Gauntlet.GuildHall.Assassin).toBeDefined();
  });
            // classes.js
  it("Gauntlet should have a GuildHall.Hunter constructor", function() {
    expect(Gauntlet.GuildHall.Hunter).toBeDefined();
  });



// ----------------------------------------------------------
// Monster Constructor  enemies.js
  it("Gauntlet should have a Opponents.Monster constructor", function() {
    expect(Gauntlet.Opponents.Monster).toBeDefined();
  });

// Orc Constructor      enemies.js
	it("Gauntlet should have a Opponents.Orc constructor", function() {
    expect(Gauntlet.Opponents.Orc).toBeDefined();
  });

// DarkElf Constructor      enemies.js
  it("Gauntlet should have a Opponents.DarkElf constructor", function() {
    expect(Gauntlet.Opponents.DarkElf).toBeDefined();
  });

  // DarkMage Constructor      enemies.js
  it("Gauntlet should have a Opponents.DarkMage constructor", function() {
    expect(Gauntlet.Opponents.DarkMage).toBeDefined();
  });
// ----------------------------------------------------------

// Gauntlet.SpellBook object   spells.js
  it("Gauntlet should have a SpellBook object", function() {
    expect(Gauntlet.SpellBook).toBeDefined();
  });

// Spell Constructor       spells.js
	it("Gauntlet should have a SpellBook.Spell constructor", function() {
    expect(Gauntlet.SpellBook.Spell).toBeDefined();
  });

// Sphere Constructor      spells.js
	it("Gauntlet should have a SpellBook.Sphere constructor", function() {
    expect(Gauntlet.SpellBook.Sphere).toBeDefined();
  });

// -----------------------------------------------------------

// Weapon Constructor      weapons.js
	it("There should be a Weapon constructor", function() {
    expect(Weapon).toBeDefined();
  });

// BroadSword Constructor      weapons.js
	it("There should be a BroadSword constructor", function() {
    expect(BroadSword).toBeDefined();
  });

// WarAxe constructor        weapons.js
	it("There should be a WarAxe constructor", function() {
    expect(WarAxe).toBeDefined();
  });

// Claymore constructor      weapons.js
  it("There should be a Claymore constructor", function() {
    expect(Claymore).toBeDefined();
  });

// BowAndArrow Constructor     weapons.js
  it("There should be a BowAndArrow constructor", function() {
    expect(BowAndArrow).toBeDefined();
  });

// Dagger Constructor       weapons.js
  it("There should be a Dagger constructor", function() {
    expect(Dagger).toBeDefined();
  });

// Katana Constructor      weapons.js
  it("There should be a Katana constructor", function() {
    expect(Katana).toBeDefined();
  });

});