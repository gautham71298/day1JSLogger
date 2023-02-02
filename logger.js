import { Chalk } from "chalk";

export default class Logger {
  constructor() {
    this.chalk = new Chalk();
  }

  logInfo(message) {
    console.log(`INFO: ${this.chalk.blue(message)}`);
  }

  logErr(message) {
    console.log(`ERR: ${this.chalk.red(message)}`);
  }
}
