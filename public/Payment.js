export class Payment {
    constructor(Client, Description, Amount) {
        this.Client = Client;
        this.Description = Description;
        this.Amount = Amount;
    }
    ToString() {
        return `${this.Client.Name} owes ${this.Amount} for ${this.Description}`;
    }
}
