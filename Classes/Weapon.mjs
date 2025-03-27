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

    getType()
    {
        return this.equipmentType;
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