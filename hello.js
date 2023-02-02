import Greeter, { persons } from "./module1.js";
import Logger from "./logger.js";

const greeter1 = new Greeter("Mohan");
const greeter2 = new Greeter("Quinee");
const logger = new Logger();

greeter1.sayHelloTo(persons.atmaram.name);
logger.logInfo(`Greeted ${persons.atmaram.name}`);
greeter1.myProfession(persons.atmaram.role);

greeter2.sayHelloTo(persons.gautham.name);
logger.logInfo(`Greeted ${persons.gautham.name}`);
greeter2.myProfession(persons.gautham.role);
logger.logErr(
  `${persons.gautham.name} is lying, he's not a ${persons.gautham.role}`
);
