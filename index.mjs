import Armor from "./Classes/Armor.mjs";
import Weapon from "./Classes/Weapon.mjs";
import Character from "./Classes/Character.mjs";

console.log("start");

execute();

function execute()
{
    const characters = createCharacters();

    console.log(characters);
}

function createCharacters()
{
    let characterArray = [];

    characterArray.push(createRagnar());
    characterArray.push(createSeraphina());
    characterArray.push(createThalgrim());
    characterArray.push(createLyara());
    characterArray.push(createDraven());

    return characterArray;

}

function createSeraphina()
{
    const weapon = new Weapon("Celestial Rapier", 25, 18, 75);
    const armor = new Armor("Phantom Shroud", 22, 12);
    const character = new Character("Seraphina Nightshade", 27, 120, 92, [weapon, armor]);
    return character;
}

function createThalgrim()
{
    const weapon = new Weapon("Obsidian Warhammer", 38, 18, 75);
    const armor = new Armor("Titan's Bulwark", 35, 18);
    const character = new Character("Thalgrim Ironfist", 40, 52, 95, [weapon, armor]);
    return character;
}

function createLyara()
{
    const weapon = new Weapon("Starfire Bow", 33, 22, 85);
    const armor = new Armor("Sylvan Guardian", 30, 14);
    const character = new Character("Lyara Moonwhisper", 35, 29, 88, [weapon, armor]);
    return character;
}

function createDraven()
{
    const weapon = new Weapon("Doomfang Dagger", 28, 20, 78);
    const armor = new Armor("Abyssal Carapace", 25, 10);
    const character = new Character("Draven Blackthorn", 30, 37, 90, [weapon, armor]);
    return character;
}

function createRagnar()
{
    const weapon = new Weapon("Stormbreaker Axe", 30, 25, 80);
    const armor = new Armor("Shadowplate", 28, 15);
    const character = new Character("Ragnar Wolfbane", 32, 45, 87, [weapon, armor]);
    return character;
}