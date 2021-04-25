/*	-WHAT IS THIS?-
	The script featured here is an explanation of how to make your own custom addition to MPMB's D&D 5e Character Tools.
	To add your own content to the Character Sheet, use the syntax below and save it in a file. You can then import this file directly to the sheet using the "Import" button and "Import/Export" bookmark.
	There you can either import the file as a whole or just copy the text into a dialogue.
	-KEEP IN MIND-
	Note that you can add as many custom codes as you want, either by importing consecutive files or pasting the scripts into the dialogue.
	It is recommended to enter the code in a freshly downloaded or reset sheet before adding any other information so that there won't be any conflicts.
*/

/*	-INFORMATION-
	Subject:	Subclass (a.k.a. Archetype)
	Effect:		This is the syntax for adding a new subclass/archetype to a class that is defined in the sheet, or to a class you made yourself
	Sheet:		v12.999 (2017-11-29)
*/

var iFileName = "Homebrew - Spellbreaker.js"; // Optional; This is how the file will be named in the sheet if you import it as a file and not copy-paste its content. Only the first occurrence of this variable will be used
RequiredSheetVersion(12.999); // Optional; This is the minimum required version number of the sheet for the script to work. If the sheet being used to import the script is of an earlier version, the user will be warned

AddSubClass( // this is the function you will be calling to add the variant

	"ranger", // Parent Class object name; Required; This has to be the exact name of the class of which you are adding a subclass. Look for the name of the class in the ClassList variable. For the default 12 classes these names are: "barbarian", "bard", "cleric", "druid", "fighter", "monk", "paladin", "ranger", "rogue", "sorcerer", "warlock", and "wizard"

	"spellbreaker", // Object name; Required; The name the entry in the ClassSubList will have. This can be anything, it is just something that the sheet uses to reference the new entry and it will never be printed anywhere

	{ // don't forget this opening bracket

		regExpSearch : /^(?=.*spellbreaker).*$/i, //required; regular expression of what to look for (i.e. now it looks for any entry that has both the words "special" and "me" in it, disregarding capitalization). If this looks too complicated, just write: /specialme/i

		subname : "archetype of the spellbreaker", //required; the name of the subclass

		source : ["HB", 11], //required; the source and the page number. "HB" stands for homebrew. See the "Complete SourceList" for an overview of sources that are already defined. Or define a new source using the "Homebrew Syntax - SourceList.js". // This can be an array of arrays to indicate the things appears in multiple sources. For example, if something appears on page 7 of the Elemental Evil Player's Companion and on page 115 of the Sword Coast Adventure Guide, use the following: [["E", 7], ["S", 115]]

		// after defining the above three, you don't need to define anything more, but you can. Defining more stuff will overwrite the entries as they are given in the ClassList. So if you do not need something to be different than the basics of the class (for example, you subclass uses the same spellcasting ability), then you don't need to define it again.
		// For the syntax of how to define more stuff, look at the ClassList (see "Homebrew Syntax - ClassList.js"). You can define all the same stuff in the same way. The below are a couple of examples:

		fullname : "Spellbreaker Ranger", //if no fullname is defined it will be automatically generated as "Class Name (Subclass name)". In this example that would be: "MyClass (Path of SpecialMe)"

		features : { //unlike the other entries, "features" will not delete all the features from the ClassList, but will add to the features in the ClassList. For this to work properly, the feature object has to be named "subclassfeatureX" and not something appropriate for the feature. The below are the features of the purple Dragon Knight

			"subclassfeature3" : { // has to start with "subclassfeature" followed by a number. Note that the name has to be unique for this subclass, but it can be the same name as one of the features of the class in the ClassList variable. If you use the same name as a feature in the ClassList variable, it will be overwritten with this entry
				name : "Mage Hunter",
				source : ["HB", 11],
				minlevel : 3,
				description : "\n   " + "I gain proficiency with the Arcana skill and can double proficiency to checks related to spellcasting",
        killstxt : "\n\n" + toUni("Spellbreaker (Mage Hunter)") + ": Arcana proficiency",
        skills : ["Arcana"],
        spellcastingExtra : ["absorb elements", "blindness/deafness", "counterspell", "resilient sphere", "wall of force"],
      },
			"subclassfeature3.1" : {
			  name : "Spellsight",
			  source : ["HB", 11],
			  minlevel : 3,
			  description : desc([
				"I can learn the spellcasting modifier and maximum spell slot anyone I can see within 60 feet use",
			]),
			  recovery : "short rest",
			  usages : 1,
			  action : [["action", ""]],
			  altresource : "SS 1+"
      },
			"subclassfeature7" : {
				name : "Arcane defense",
				source : ["HB", 11],
				minlevel : 7,
				description : "\n   " + "When I make saving throws against spells, I can add my wisdom modifier to the save.",
			},
			"subclassfeature11" : {
				name : "Bulwark",
				source : ["HB", 11],
				minlevel : 11,
				description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same affect" + "\n   " + "It only works if I'm not incapacitated, the ally is within 60 ft and can see or hear me",
			},
      "subclassfeature15" : {
				name : "Bulwark",
				source : ["HB", 11],
				minlevel : 15,
				description : "\n   " + "When I use Indomitable to reroll a Int, Wis, or Cha save, I can extend it to an ally" + "\n   " + "The ally can reroll its failed saving throw against the same affect" + "\n   " + "It only works if I'm not incapacitated, the ally is within 60 ft and can see or hear me",
			},
		}
	}
);
