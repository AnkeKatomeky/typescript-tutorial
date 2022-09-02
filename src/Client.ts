import { IPerson } from "./IPerson";
import { IVallet } from "./IVallet";

export class Client implements IPerson, IVallet {
    Guid: string;
    Value: number;
    GetValue(): number {
        return this.Value;
    }
    Spend(value: number): void {
        if (this.Value < value) {
            throw new Error("Not enough money");
        }
        this.Value -= value;
    }
    Gain(value: number): void {
        this.Value += value;
    }
    TrySpend(value: number): [boolean, string | null] {
        try {
            this.Spend(value);
            return [true, null];
        } catch (error) {
            return [false, (error as Error).message];
        }
    }
    Name: string;
    Age: number;
    Speak(phrase: string): void {
        console.log(`${this.Name} says \"${phrase}\"`);
    }

    constructor(guid: string, name: string, age: number, value: number) {
        this.Value = value;
        this.Name = name;
        this.Age = age;
        this.Guid = guid;
    }
}
