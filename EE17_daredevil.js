var iFileName = "Homebrew - Daredevil.js";
RequiredSheetVersion(12.999); 
AddSubClass( 
	"rogue",
	"Daredevil", 
	{ 
		regExpSearch : /^(?=.*daredevil).*$/i, 
		subname : "daredevil", 
		source : ["HB", 12],
		fullname : "Daredevil Rogue", 
		features : {
			"subclassfeature3" : {
				name : "Aerialist",
				source : ["HB", 12],
				minlevel : 3,
				description : "\n   " + "When you leap through the air you appear to be flying to all but the most potent observers. Starting at 3rd level, you have a climbing speed equal to your movement speed." + "\n   " + "In addition, you use your reflexes and acrobatic skill to propel yourself through the air. When you make a running or standing long or high jump, you use your Dexterity score, in place of Strength, to calculate the distance of your jump.",
        speed : {
		      climb : { spd : 'walk', enc : 'walk' }
	        },
			},
			"subclassfeature3.1" : {
			  	name : "Death from Above",
			  	source : ["HB", 12],
			  	minlevel: 3, 
				description : "\n   " + "When you adopt this archetype at 3rd level, you can use your maneuverability and momentum to turn your airborne body into a projectile. If you move at least 10 feet through the air, and land within 5 feet of a Large or smaller creature, you can use your action to force the creature to make a Strength saving throw. The save DC is equal to 8 + your proficiency bonus + your Dexterity modifier. On a failed save, it is knocked prone and takes 2d6 bludgeoning damage." + "\n   " + "This special attack can apply your Sneak Attack damage, even if it doesn't meet the requirements for Sneak Attack.",
				},
			"subclassfeature9" : {
				name : "Slow Fall",
				source : ["HB", 11],
				minlevel : 9,
				description : "\n   " + "Beginning at 9th level, your experience falling from heights has made you an expert in landing without hurting yourself. As a reaction while falling, you can reduce any falling damage you take by an amount equal to five times your rogue level. If you manage to land on something soft that breaks your fall, like a wagon full of hay, you take no damage from the fall.",
			},
			"subclassfeature13" : {
				name : "Defy Death",
				source : ["HB", 11],
				minlevel : 13,
				description : "\n   " + "Your Daredevil lifestyle has been cause for many near-death experiences, any you've gained an unfortunate familiarity with death. Starting at 13th level, you have advantage on death saving throws.",
			},
	      		"subclassfeature17" : {
				name : "Airborne Strikes",
				source : ["HB", 11],
				minlevel : 17,
				description : "\n   " + "Starting at 17th level, you can maneuver yourself while airborne to strike at your enemies in unexpected ways. You have advantage on any attack roll you make while you are in the air, and at least 5 feet off the ground.",
			},
		}
	}
);
