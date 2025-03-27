export default class Armor
{
    constructor(name, minLevel, defense)
    {
        this.name = name;
        this.minLevel = minLevel;
        this.defense = defense;
        this.equipmentType = 0; //Armor
    }

    getType()
    {
        return this.equipmentType;
    }

    showAttributes()
    {
        //console.log(this.name);
        
        console.log(this.name + ": Min Level = " + this.minLevel + ", Defense = " + this.defense);
    }
}