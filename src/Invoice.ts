import { IPerson } from "./IPerson";
import { IToString } from "./IToString";

export class Invoice implements IToString {
    constructor(public Recipient: IPerson,
                public Description: string,
                public Amount: number) {
    }

    ToString() {
        return `${this.Recipient.Name} is owed ${this.Amount} for ${this.Description}`;
    }
}