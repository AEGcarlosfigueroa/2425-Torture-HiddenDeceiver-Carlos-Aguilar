export default class Weapon
{
    constructor(name, minLevel, damage, durability)
    {
        this.name = name;
        this.minLevel = minLevel;
        this.damage = damage;
        this.durability = durability;
        this.equipmentType = 1; //Weapon
    }

    reduceDurability()
    {
        this.durability -= 2;
    }

    getDamage()
    {
        return this.damage;
    }

    getType()
    {
        return this.equipmentType;
    }

    getLevel()
    {
        return this.minLevel;
    }

    showAttributes()
    {
        //console.log(this.name);
        console.log("Name: " + this.name);
        console.log("Min level: " + this.minLevel);
        console.log("Damage: " + this.damage);
        console.log("Durability: " + this.durability);
        console.log("----------------");
    
    }
}