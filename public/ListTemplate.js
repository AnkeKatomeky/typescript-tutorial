export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    Render(documentEntity, heading, positon) {
        const li = document.createElement("li");
        const h4 = document.createElement("h4");
        h4.innerHTML = heading;
        li.append(h4);
        const p = document.createElement("p");
        p.innerText = documentEntity.ToString();
        li.append(p);
        if (positon === "start") {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
