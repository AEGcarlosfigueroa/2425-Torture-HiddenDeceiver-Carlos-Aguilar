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

    fumble()
    {
        const weapons = this.getAllWeapon();

        const randomValue = Math.floor(Math.random()*weapons.length);

        const weapon = weapons[randomValue];

        const armors = this.getAllArmor();

        const randomValue2 = Math.floor(Math.random()*armors.length);

        const armor = armors[randomValue2];

        console.log("BEFORE");

        this.showAttributes(weapon, armor);

        const damageWeapon = weapon.getDamage();

        const damageDone = Math.ceil((damageWeapon + this.level)/ 4);

        armor.reduceDefenseBy(damageDone);

        weapon.reduceDurability();

        this.stamina -= 5;

        console.log("AFTER");

        this.showAttributes(weapon, armor);
    }

    showAttributes(weapon, armor)
    {
        console.log("----------------");
        console.log("Name: " + this.name);
        console.log("Level: " + this.level);
        console.log("Stamina: " + this.stamina);
        console.log("-------------");
        console.log("Weapon");
        console.log("-------------");
        weapon.showAttributes();
        console.log("Armor")
        console.log("-------------");
        armor.showAttributes();
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