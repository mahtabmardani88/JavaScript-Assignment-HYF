
"use strict";
/**
 * The `possibleStates` property define the states (in this case: colours)
 * in which the traffic light can be.
 * The `stateIndex` property indicates which of the possible states is current.
 */
const trafficLight = {
  possibleStates: ["green", "orange", "red"],
  stateIndex: 0
};
// TODO
let cycle = 0;
while (cycle < 2) {

  // read one by one state index with possible state
  trafficLight.stateIndex += 1;

  //read every element in index with by possible states
  // if the color is green, turn it orange
  // if the color is orange, turn it red
  // if the color is red, add 1 to cycles and turn it green
  if (trafficLight.possibleStates.length === trafficLight.stateIndex) {

    // when read 3 color should stop
    trafficLight.stateIndex = 0;

    // read again by while condition
    cycle++;
  }

  const currentState = trafficLight.possibleStates[trafficLight.stateIndex];
  console.log("The traffic light is on", currentState);
}

/**
 * The output should be:

The traffic light is on green
The traffic light is on orange
The traffic light is on red
The traffic light is on green
The traffic light is on orange
The traffic light is on red

*/
