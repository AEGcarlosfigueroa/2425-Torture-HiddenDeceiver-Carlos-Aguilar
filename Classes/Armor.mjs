export default class Armor
{
    constructor(name, minLevel, defense)
    {
        this.name = name;
        this.minLevel = minLevel;
        this.defense = defense;
        this.equipmentType = 0; //Armor
    }

    reduceDefenseBy(value)
    {
        this.defense -= value;
    }

    getLevel()
    {
        return this.minLevel;
    }

    getType()
    {
        return this.equipmentType;
    }

    showAttributes()
    {
        //console.log(this.name);
        
        console.log("Name: " + this.name);
        console.log("Min level: " + this.minLevel);
        console.log("Defense: " + this.defense);
        console.log("----------------");
        
    }
}