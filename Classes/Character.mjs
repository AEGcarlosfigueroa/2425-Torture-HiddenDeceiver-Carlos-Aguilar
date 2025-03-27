export default class Character
{
    constructor(name, level, age, stamina)
    {
        this.name = name;
        this.level = level;
        this.age = age;
        this.stamina = stamina;
        this.inventory = [];
    }

    addItem(item)
    {
        this.inventory.push(item);
    }

    getLevel()
    {
        return this.level;
    }

    showAllAttributes()
    {
        console.log("----------------");
        console.log("Name: " + this.name);
        console.log("Level: " + this.level);
        console.log(" ");

        this.showAllWeapon();

        //this.showAllArmor();
    }

    showAllWeapon()
    {
        console.log("Weapons: ");
        console.log("----------------");
        for(let i=0; i<this.inventory.length; i++)
        {
            if(this.inventory[i].getType() === 1)
            {
                this.inventory[i].showAttributes();
            }
        }
    }

    showAllArmor()
    {
        console.log("Armors: ");
        console.log("----------------");
        for(let i=0; i<this.inventory.length; i++)
        {
            if(this.inventory[i].getType() === 0)
            {
                this.inventory[i].showAttributes();
            }
        }
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