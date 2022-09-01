export interface IVallet {
    Value: number;
    GetValue(): number;
    TrySpend(value: number): [boolean, string | null];
    Spend(value: number): void;
    Gain(value: number): void;
}
