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
			},
			"subclassfeature3.1" : {
            			name : "Spellbreaker's tools",
            			source : ["HB", 11],
            			minlevel : 3,
            			description : "\n   " + "I add a spell to my known spells at level 3, 5, 9, 13, and 17" + "\n   " + "These count as ranger spells, but do not count against the number of spells I can know",
            			spellcastingExtra : ["absorb elements", "blindness/deafness", "counterspell", "resilient spehere", "wall of force"],
            			spellcastingExtraApplyNonconform : true,
     			 },
			"subclassfeature3.2" : {
			  	name : "Spellsight",
			  	source : ["HB", 11],
			  	minlevel : 3,
			 	description : "\n   " + "I can learn the spellcasting modifier and maximum spell slot anyone I can see within 60 feet use",
			  	recovery : "short rest",
			  	usages : 1,
			  	action : [["action", ""]],
			  	altresource : "SS 1+",
      			},
			"subclassfeature3.3" : {
			  	name : "Spell Absorption",
			  	source : ["HB", 11],
			 	minlevel : 3,
			  	description : "\n   " + "I can cast Absorb Elements without expending a spell slot and hit the absorbed damage back as a maximum roll.",
				recovery : "short rest",
			 	usages : "Wisdom modifier per ",
				usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			  	action : [["action", ""]],
			},
			"subclassfeature7" : {
				name : "Arcane defense",
				source : ["HB", 11],
				minlevel : 7,
				description : "\n   " + "I can add my Wisdom modifier to saving throws against spells.",
			},
			"subclassfeature11" : {
				name : "Mage Breaker",
				source : ["HB", 11],
				minlevel : 11,
				description : "\n   " + "I can imbue my weapon with magic, it now deals force damage with a bonus equal to my Wisdom modifier." + "\n   " + "If the target concentrates on a spell it takes an additional 1d8 force damage and has disadvantage on the concentration save.",
				recovery : "long rest",
			  	usages : "Wisdom modifier per ",
				usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			  	action : [["action", ""]],
			},
	      		"subclassfeature15" : {
				name : "Mantle of the Master",
				source : ["HB", 11],
				minlevel : 15,
				description : "\n   " + "I gain innate resistance to all damage dealt by spells and magical effects.",
			},
		}
	}
);
