import { Headphone } from "./Headphone";
import { translate } from "./Translator";

console.log(translate("Hi"));
console.log(translate("10"));
console.log(translate("true"));
console.log(translate("How are you?"));

const headphone = new Headphone("Sony", "USB-C", 499);
const headphone2 = new Headphone("Sony", "USB-C", 123);
console.log(headphone);
