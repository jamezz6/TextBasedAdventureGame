console.clear();

import inquirer from "inquirer";
import * as rooms from "./rooms.js";

export let hasGloves = false
export const getName = async () => {
  let { userName } = await inquirer.prompt({
    name: `userName`,
    type: `input`,
    message: `What is your name?`
  })
  return userName
}

export const getShip = async () => {
  let { ship } = await inquirer.prompt({
    name: `ship`,
    type: `input`,
    message: `What is your ship called?`
  })
  return ship
}

export const selectTypeStart = async () => {
  let choice1 = await inquirer.prompt({
    name: `choice1`,
    type: `list`,
    message: `you can either enter the Breakroom or the Kitchen."`,
    choices: [`Breakroom`, `Kitchen`],
  })
  return choice1.choice1
}

export const selectTypeKitchen = async () => {
  let choice2 = await inquirer.prompt({
    name: `choice2`,
    type: `list`,
    message: `you can either Go to the crop room or the oxygen storage room."`,
    choices: [`Go Forwards`, `Go Left`, `Eat the cake`],
  })
  return choice2.choice2

}

export const selectTypeBreakroom = async () => {
  let choice3 = await inquirer.prompt({
    name: `choice3`,
    type: `list`,
    message: `you can either enter the Toilet or try to fix the Panel."`,
    choices: [`Toilet`, `Panel`, `Search`],
  })
  return choice3.choice3
}
export const selectTypeOxy = async () => {
  let choice4 = await inquirer.prompt({
    name: `choice4`,
    type: `list`,
    message: `You can try to fix the leak by "`,
    choices: [`Shutoff oxygen`, `Use Tape`, `Use Foam`],
  })
  return choice4.choice4
}

export const selectTypeCryo = async () => {
  let choice5 = await inquirer.prompt({
    name: `choice5`,
    type: `list`,
    message: `you can either try to rerout the coolant or search for something to fix the leak."`,
    choices: [`Reroute coolant`, `Search`],
  })
  return choice5.choice5
}

export const findGloves = async () => {

  if (!hasGloves) {
    console.log("You find a pair of insulated gloves");
    rooms.breakroom();

    hasGloves = true;
  } else {
    console.log("You find nothing of value");
    rooms.breakroom()
  }
}

export const cropfarmSelect = async () =>{
  let cropfarmSelect = await inquirer.prompt({
    name: `cropfarmSelect`,
    type: `list`,
    message: `If don't put out the fire, the entire ship will burn, and you will lose your food and oxygen and die. What do you do?`,
    choices: [`Let it burn baby, burn`, `Shut down the oxygen supply`,`Fire Extinguisher`]
  })
 return cropfarmSelect.cropfarmSelect
}

export const selectTypeengine = async () => {
  let engChoice = await inquirer.prompt({
    name: `engChoice`,
    type: `list`,
    message: `did you get good or bad end"`,
    choices: [`its good`, `its bad`],
  })
  return engChoice.engChoice
}

