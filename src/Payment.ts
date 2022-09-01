import { IPerson } from "./IPerson";
import { IToString } from "./IToString";

export class Payment implements IToString {
    constructor(public Client: IPerson,
        public Description: string,
        public Amount: number) {
    }


    ToString() {
        return `${this.Client.Name} owes ${this.Amount} for ${this.Description}`;
    }
}