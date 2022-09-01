export class Client {
    constructor(guid, name, age, value) {
        this.Value = value;
        this.Name = name;
        this.Age = age;
        this.Guid = guid;
    }
    GetValue() {
        return this.Value;
    }
    Spend(value) {
        if (this.Value < value) {
            throw new Error("Not enough money");
        }
        this.Value -= value;
    }
    Gain(value) {
        this.Value += value;
    }
    TrySpend(value) {
        try {
            this.Spend(value);
            return [true, null];
        }
        catch (error) {
            return [false, error.message];
        }
    }
    Speak(phrase) {
        console.log(`${this.Name} says \"${phrase}\"`);
    }
}
