import * as inq from "./inq.js"
import * as classes from "./Newclass.js"
let goodEnd1 = false
let goodEnd2 = false
export const kitchen = async () => {
    goodEnd1 = true
    console.log(`The kitchen is a mess dishes have shattered and the broken shards are strewn about all ocer the floor. \n
    The rations have been spilled, resulting in large puddles of liquid and mounds of food. \n
    Smoke is billowing out from underneath the door to your left, and the one in front of you. \n
    There is a delicious cake on the counter. It is a chocolate gateau with chocolate curls and a strawberry on top of it.`)
    let userChoice2 = await inq.selectTypeKitchen()
    if ((userChoice2) === "Go Left") {
        cropfarm()
    } else if ((userChoice2) === "Go Forwards") {
        oxygenRoom()
    } else if ((userChoice2) === "Eat the cake"){
        eatCake()
    } else { console.log("Error") }
    return kitchen
}

export const breakroom = async () => {
    console.log(`The Break Room is small; it has enough furnishings for a single person. \n
There is a table where spare equipment has been discarded haphazardly. \n
There is a door to the left leading to a small toilet it and a door on the right the panel looks broken `)
    let userChoice3 = await inq.selectTypeBreakroom()
    if ((userChoice3) === "Toilet") {
        toilet()
    } else if ((userChoice3) === "Panel") {
        panel()
    } else if ((userChoice3) === "Search") {
        inq.findGloves()
    } else { console.log("Error") }
    return breakroom
}

export const toilet = async () => {
    console.log(`As you enter the toilet you slip on a puddle of soap, your neck hits the toilet bowl and you instantll die a fitting end.`)
    classes.Death()
}

export const eatCake = async () => {
    console.log(`You eat too much cake as it is irresistibly delicious. Your stomach bursts, killing you instantly.
The cake was a lie`)
    classes.Death()
}

export const panel = async () => {
    if ((inq.hasGloves)) {
        console.log(`You fix the panel using your gloves to avoid any shocks and enter into the Cryo Chamber`)
        cryoChamber()
    } else { console.log("as you touch the panel you feel like every atom of your body is being shaken your body forgets how to breath as your fist clenches around the sparking wire you think about the pain but after a moment you no longer think at all")
    classes.Death()}
    return panel
}

export const oxygenRoom = async () => {
    console.log(`You enter a room filled with pipes and tubes. \n
There is a crack on one of the larger pipes leading to the other room. \n
The monitors show oxygen is leaking at an alarming rate. \n
There is a small cabinet with tools including some Tape and a bottle of Foam the label has been torn off. \n
What will you do?`)
    
    let userChoiceOxy = await inq.selectTypeOxy()
    if ((userChoiceOxy) === "Shutoff oxygen") {
        asphyx()
    } else if ((userChoiceOxy) === "Use Tape") {
        asphyx()
    } else if ((userChoiceOxy) === "Use Foam") {
        fixOxy()
    } else { console.log("Error") }
}


export const cropfarm = async () => {
    console.log(`The crop farm has caught fire your are surrounded by flame. \n
Searing heat begins to envelop you. \n
there is small extinguisher near the entrence and a console that controls oxygen levels for the crops. \n
What do you do?`)
let cropfarmChoice = await inq.cropfarmSelect()
    if ((cropfarmChoice) === "Let it burn baby, burn" || (cropfarmChoice) === "Fire Extinguisher"){
        fireBurnDeath()
    } else if ((cropfarmChoice) === "Shut down the oxygen supply")
        shutDownOxygen()
}

export const fireBurnDeath = async () => {
    console.log(`The fire was too far gone and you burned to death trying to put out the fire. crispy`)
    classes.Death()
}

export const shutDownOxygen = async () => {
    goodEnd2 = true
    console.log(`You successfully extinguished the fire and brought the oxygen back online before you ended up suffocating to death. \n
you move on to the next room.`)
    cryoChamber()
}

export const asphyx = async () => {
    console.log(`That method proves ineffective you don't have time to try anything else before your vision blacks out`)
    classes.Death()
}

export const fixOxy = async () => {
    console.log(`You spray the foam onto the leak it expands touching the air. \n
The leak is plugged and the oxygen levels return to normal. \n
You move to the next room.`)
    cryoChamber()
    
}

export const cryoChamber = async () => {
    console.log(`You enter into a chamber coolant flows through pipes on the wall \n
this chamber provides cooling for your deep space hibernation pod and the engine \n
coolant is leaking from the pipes leading to the pod and the temperature of the room is rapidly decreasing\n
you can search for a way to fix the leak or reroute all cooling to the engine \n
what do you do?`)
    let cryoChoice = await inq.selectTypeCryo()
    if ((cryoChoice) === "Reroute coolant") {
        console.log(`you reroute all coolant to the engine delaying the meltdown and preventing the leak`)
        engineRoom()
    } else if ((cryoChoice) === "Search") {
        freeze()
    } else { console.log("Error") }
}

export const freeze = async () => {
    console.log(`you take too long searching for a way fo fix the engine \n
you pass out from the cold luckly you do not suffer a long icy death \n
the engine will go critical long before that`)
    classes.Death()
}

export const engineRoom = async () => {
    console.log(`you enter the engine room and check its status`)
    if ((goodEnd1 && goodEnd2)){
        console.log("You fixed the ship and were able to fly away")
        console.log("YOU WIN!!!")
    }else{
        console.log("You could not fix all the damage to the ship and were left stranded in space")
        console.log("BAD END")
    }

}
