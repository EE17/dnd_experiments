
var iFileName = "Homebrew - Spellbreaker.js";
RequiredSheetVersion(12.999); 

AddSubClass( 

	"ranger",

	"spellbreaker", 

	{ 

		regExpSearch : /^(?=.*spellbreaker).*$/i, 

		subname : "spellbreaker", 

		source : ["HB", 11],

		fullname : "Spellbreaker Ranger", 

		features : {

			"subclassfeature3" : { 
				name : "Mage Hunter",
				source : ["HB", 11],
				minlevel : 3,
				description : "\n   " + "I gain proficiency with the Arcana skill and can double proficiency to checks related to spellcasting",
        		skillstxt : "\n\n" + toUni("Spellbreaker (Mage Hunter)") + ": Arcana proficiency",
       			skills : ["Arcana"],
        		spellcastingExtra : ["blindness/deafness", "counterspell", "resilient sphere", "wall of force"],
     			 },
			"subclassfeature3.1" : {
			  	name : "Spellsight",
			  	source : ["HB", 11],
			  	minlevel : 3,
			 	description : "\n   " + "I can learn the spellcasting modifier and maximum spell slot anyone I can see within 60 feet use",
			  	recovery : "short rest",
			  	usages : 1,
			  	action : [["action", ""]],
			  	altresource : "SS 1+"
      			},
			"subclassfeature3.2" : {
			  	name : "Spell Absorbtion",
			  	source : ["HB", 11],
			 	minlevel : 3,
			  	description : "\n   " + "I can cast Absrob Elements without expending a spell slot and hit the absorbed damage back as a maximum roll.",
			  	spellcastingExtra : ["absorb elements"],
				firstCol : 'atwill'
				recovery : "short rest",
			 	usages : "Wisdom modifier per ",
				usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			  	action : [["action", ""]],
			},
			"subclassfeature7" : {
				name : "Arcane defense",
				source : ["HB", 11],
				minlevel : 7,
				description : "\n   " + "When I make saving throws against spells, I can add my wisdom modifier to the save.",
			},
			"subclassfeature11" : {
				name : "Mage Breaker",
				source : ["HB", 11],
				minlevel : 11,
				description : "\n   " + "I can imbue my weapon with magic, it now deals force damage with a bonus equal to my wisdom modifier." + "\n   " + "If the target concentrates on a spell it takes an additional 1d8 force damage and has disadvantage on the concentration save.",
				recovery : "long rest",
			  	usages : "Wisdom modifier per ",
				usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			  	action : [["action", ""]],
			},
	      		"subclassfeature15" : {
				name : "Mantle of the Master",
				source : ["HB", 11],
				minlevel : 15,
				description : "\n   " + "I gain inate resistance to all damage dealt by spells and magical effects.",
			},
		}
	}
);
