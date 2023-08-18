export class Player {
    constructor(name, shipname) {
        this.name = name;
        this.shipname = shipname;
    }
}


export class HealthPlayer extends Player {
    constructor(name, shipname, health) {
        super(name, shipname);
        this.health = health;
    }
        }

export const Death = async () => {
    HealthPlayer.health -= 100
    console.log("Sorry you failed try again")
}