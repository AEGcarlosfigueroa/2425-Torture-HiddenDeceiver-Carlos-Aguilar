import Armor from "./Classes/Armor.mjs";
import Weapon from "./Classes/Weapon.mjs";
import Character from "./Classes/Character.mjs";

execute();

function execute()
{
    const characters = createCharacters();

    showAllCharacters(characters);

    //showAllArmorsBelow30(characters);

    //showAllWeapons(characters);
}

function showAllCharacters(characterArray)
{
    console.log("CHARACTER LIST")
    console.log("--------------------");
    console.log(" ")
    for(let i=0; i<characterArray.length; i++)
    {
        const character = characterArray[i];

        character.showAllAttributes();

        console.log(" ");
        console.log("--------------------");
        console.log(" ");
    }
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

function createAllEquipment()
{
    let equipment = [];

    equipment.push(new Weapon("Celestial Rapier", 25, 18, 75));
    equipment.push(new Armor("Phantom Shroud", 22, 12));
    equipment.push(new Weapon("Obsidian Warhammer", 38, 18, 75));
    equipment.push(new Armor("Titan's Bulwark", 35, 18));
    equipment.push(new Weapon("Starfire Bow", 33, 22, 85));
    equipment.push(new Armor("Sylvan Guardian", 30, 14));
    equipment.push(new Weapon("Doomfang Dagger", 28, 20, 78));
    equipment.push(new Armor("Abyssal Carapace", 25, 10));
    equipment.push(new Weapon("Stormbreaker Axe", 30, 25, 80));
    equipment.push(new Armor("Shadowplate", 28, 15));

    return equipment;
}

function showAllWeapons(characterArray)
{
    console.log("Weapon List");
    console.log("----------------")
    for(let i=0; i<characterArray.length; i++)
    {
        const character = characterArray[i];

        const weapons = character.getAllWeapon();

        for(let j=0; j<weapons.length; j++)
        {
            weapons[j].showAttributes();
        }
    }

    console.log(" ");
}

function showAllArmorsBelow30(characterArray)
{
    console.log("Armor List (below 30)");
    console.log("----------------")
    for(let i=0; i<characterArray.length; i++)
    {
        const character = characterArray[i];

        const armors = character.getAllArmor();

        for(let j=0; j<armors.length; j++)
        {
            if(armors[j].getLevel() < 30)
            {
                armors[j].showAttributes();
            }
            
        }
    }

    console.log(" ");
}

function showAllArmors(characterArray)
{
    console.log("Armor List");
    console.log("----------------")
    for(let i=0; i<characterArray.length; i++)
    {
        const character = characterArray[i];

        const armors = character.getAllArmor();

        for(let j=0; j<armors.length; j++)
        {
            armors[j].showAttributes();
        }
    }

    console.log(" ");
}

function createSeraphina()
{
    const character = new Character("Seraphina Nightshade", 27, 120, 92);

    const items = createAllEquipment();

    for(let i=0; i<items.length; i++)
    {
        const itemLevel = items[i].getLevel();
        const characterLevel = character.getLevel();

        if(itemLevel <= characterLevel)
        {
            character.addItem(items[i]);
        }
    }
    return character;
}

function createThalgrim()
{
    const character = new Character("Thalgrim Ironfist", 40, 52, 95);
    const items = createAllEquipment();

    for(let i=0; i<items.length; i++)
    {
        const itemLevel = items[i].getLevel();
        const characterLevel = character.getLevel();

        if(itemLevel <= characterLevel)
        {
            character.addItem(items[i]);
        }
    }
    
    return character;
}

function createLyara()
{
    const character = new Character("Lyara Moonwhisper", 35, 29, 88);
    const items = createAllEquipment();

    for(let i=0; i<items.length; i++)
    {
        const itemLevel = items[i].getLevel();
        const characterLevel = character.getLevel();

        if(itemLevel <= characterLevel)
        {
            character.addItem(items[i]);
        }
    }
    
    return character;
}

function createDraven()
{
    const character = new Character("Draven Blackthorn", 30, 37, 90);
    const items = createAllEquipment();

    for(let i=0; i<items.length; i++)
    {
        const itemLevel = items[i].getLevel();
        const characterLevel = character.getLevel();

        if(itemLevel <= characterLevel)
        {
            character.addItem(items[i]);
        }
    }
    
    return character;
}

function createRagnar()
{
    const character = new Character("Ragnar Wolfbane", 32, 45, 87);
    const items = createAllEquipment();

    for(let i=0; i<items.length; i++)
    {
        const itemLevel = items[i].getLevel();
        const characterLevel = character.getLevel();

        if(itemLevel <= characterLevel)
        {
            character.addItem(items[i]);
        }
    }
    
    return character;
}