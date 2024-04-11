 # WEEK 1
JavaScript exercises in Hack Your Future Week 1
---
This repository contains a simple simulation of a traffic light system implemented in JavaScript. The core logic of the simulation is encapsulated within a while loop that mimics the cycle of a traffic light changing colors from green to orange (amber) to red, and then repeating the cycle. The code is organized into three main iterations, each refining the approach to simulate the traffic light's operation.

 <h4>1-Direct State Management:</h4> The first iteration directly manipulates the traffic light's state 
 
 Transitioning between "green", "orange", and "red" upon each loop iteration. 
 This straightforward approach demonstrates basic conditional logic and state changes within a single object's property.

<h4>2-Array-Based State Transition:</h4> The subsequent iterations introduce an array

PossibleStates,to define the sequential colors of the traffic light and a stateIndex to track the current state. 
This method enhances the code's flexibility and scalability by facilitating the addition of more states without significantly altering the logic structure. 
It iterates through the possibleStates array, cycling back to the beginning once the end is reached, thus simulating continuous traffic light cycles.

<h4>3-Cycle Control:</h4> Across all iterations, a cycle variable is employed to ensure the simulation runs for a predetermined number of full traffic light cycles. The logic ensures that for each cycle, the traffic light transitions through all its states ("green" to "orange" to "red") before starting over, accurately reflecting a real-world traffic light's behavior.

#### <h3>In summary </h3>These snippets illustrate the evolution of a basic simulation to a more dynamic and scalable solution. The code serves as a practical example of conditional logic, loop control, and array manipulation in JavaScript, making it an excellent learning resource for beginners in programming.

---
You can click on every Link and see how those work 

 > [traffic-light-1](./traffic-light-1.js)
 ---

 > [traffic-light-2](./traffic-light-2.js)