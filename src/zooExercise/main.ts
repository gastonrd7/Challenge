import { Lion } from "./classes/lion";
import { Tiger } from "./classes/tiger";

const lion = new Lion();
const tiger = new Tiger();

console.log('--The lion and the tiger speak in their language--');
console.log(lion.speak(​"I'm a lion"​));
console.log(tiger.speak(​"Lions suck"));