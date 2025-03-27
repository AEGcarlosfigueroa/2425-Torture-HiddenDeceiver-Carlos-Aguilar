import Armor from "./Classes/Armor.mjs";
import Weapon from "./Classes/Weapon.mjs";
import Character from "./Classes/Character.mjs";

console.log("start");

execute();

function execute()
{
    console.log("enter execute");

    const armor = new Armor("Light Armor", 5, 10);
    const weapon = new Weapon("Spear", 5, 10, 15);
    const character = new Character("Ignatius", 10, 23, 25, [armor, weapon])

    console.log(armor);
    console.log(weapon);
    console.log(character);
}