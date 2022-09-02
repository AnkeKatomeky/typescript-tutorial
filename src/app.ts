import { Client } from "./Client.js";
import { Invoice } from "./Invoice.js";
import { IPerson } from "./IPerson.js";
import { IToString } from "./IToString.js";
import { ListTemplate } from "./ListTemplate.js";
import { Payment } from "./Payment.js";


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const typeInput = document.querySelector('#type') as HTMLSelectElement;
const fromInput = document.querySelector('#from') as HTMLSelectElement;
const toInput = document.querySelector('#to') as HTMLSelectElement;
const detailInput = document.querySelector('#details') as HTMLInputElement;
const amountInput = document.querySelector('#amount') as HTMLInputElement;
const documentList = document.querySelector('#documentList') as HTMLUListElement;
const template = new ListTemplate(documentList);

let clients: Client[] = [];
let jain = new Client(generateGuidQuickly(), "Jain", 30, 1000);
let josh = new Client(generateGuidQuickly(), "Josh", 26, 8000);
let denis = new Client(generateGuidQuickly(), "Denis", 62, 500);
let macDuck = new Client(generateGuidQuickly(), "MacDuck", 62, 60000);
clients.push(jain, josh, denis, macDuck);

clients.forEach((q: Client) => {
    let optionFrom = new Option(q.Name, q.Guid);
    let optionTo = new Option(q.Name, q.Guid);
    fromInput.options.add(optionFrom);
    toInput.options.add(optionTo);
});

let documents: IToString[] = [];

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    createDocument();
});

function createDocument() {
    let findedFromClient = clients.find((client) => {
        return client.Guid == fromInput.value;
    })!;
    let findedToClient = clients.find((client) => {
        return client.Guid == toInput.value;
    })!;
    if (findedFromClient === findedToClient) {
        console.log("error: clients are the same");
        return;
    }
    let document: IToString;
    let documentType : DocumentType = (<any>DocumentType)[typeInput.value];
    console.log(typeInput.value);
    console.log(documentType);

    if (documentType === DocumentType.payment) {
        document = new Invoice(findedFromClient, detailInput.value, amountInput.valueAsNumber);
    }
    else if (documentType === DocumentType.invoice) {
        document = new Payment(findedToClient, detailInput.value, amountInput.valueAsNumber);
    }
    else {
        throw new Error("Unnkown document type");
    }
    documents.push(document);
    template.Render(document, typeInput.value, 'end');
}

function generateGuidQuickly() {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
}

enum DocumentType{
    payment,
    invoice
}