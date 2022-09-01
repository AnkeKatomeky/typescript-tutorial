export class Invoice {
    constructor(Recipient, Description, Amount) {
        this.Recipient = Recipient;
        this.Description = Description;
        this.Amount = Amount;
    }
    ToString() {
        return `${this.Recipient.Name} is owed ${this.Amount} for ${this.Description}`;
    }
}
