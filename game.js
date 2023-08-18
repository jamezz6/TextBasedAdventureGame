console.clear()
import * as inq from "./inq.js";
import * as rooms from "./rooms.js";
import * as theClass from "./Newclass.js"

export const start = async () => {
    console.log(`welcome who are you?`)
    let userName = await inq.getName()
    let shipName = await inq.getShip() 
    const player = new theClass.HealthPlayer(userName, shipName, 100);

    console.log(`You are ${userName} you are the captain of the ${shipName}. \n
You awaken at the console of your ship red lights flash from every corner of the room. The controls are not responding,\n
An alarm blares away, sending a ringing straight through your ears, reverberating throughout your spinal cord. \n
You enter into the hallway and see the doors to the engine room have sealed shut. You have two paths; to the left, the kitchen;  to the right, the Breakroom. Whatever shall you do?`)
let userChoice = await inq.selectTypeStart()
if ((userChoice) === "Kitchen") {
    rooms.kitchen()
} else if ((userChoice) === "Breakroom") {
    rooms.breakroom()
} else { console.log("Error") }
}
     


start()