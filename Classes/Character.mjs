export default class Character
{
    constructor(name, level, age, stamina, inventory)
    {
        this.name = name;
        this.level = level;
        this.age = age;
        this.stamina = stamina;
        this.inventory = inventory;
    }

    getAllArmor()
    {
        let armors = [];

        for(let i=0; i<this.inventory.length; i++)
        {
            if(this.inventory[i].getType() === 0)
            {
                armors.push(this.inventory[i]);
            }
        }

        return armors;
    }

    getAllWeapon()
    {
        let weapons = [];

        for(let i=0; i<this.inventory.length; i++)
        {
            if(this.inventory[i].getType() === 1)
            {
                weapons.push(this.inventory[i]);
            }
        }

        return weapons;
    }

}