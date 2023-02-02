export default class Greeter {
  constructor(greeter) {
    this.greeter = greeter;
  }

  sayHelloTo(name) {
    console.log(`Hi ${name} from ${this.greeter}`);
  }

  myProfession(role) {
    console.log(`I'm working as a ${role}`);
  }
}

export const persons = {
  atmaram: {
    name: "Atmaram",
    role: "Bootcamp Trainer",
  },
  gautham: {
    name: "Gautham",
    role: "QA",
  },
};
