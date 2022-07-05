const model = [
    {
        type: "title",
        value: "Hello from title!!!!"
    },
    {
        type: "text",
        value: "Hello from text"
    },
    {
        type: "columns",
        value: [
            "Hello from content 1",
            "Hello from content 2",
            "Hello from content 3", 
        ]
    },
    {
        type: "img",
        value: "./assets/image.png"
    }
];
const site = document.querySelector("#site");
model.forEach((block)=>{
    let html = "";
    if (block.type == "title") html = title(block);
    else if (block.type == "text") html = text(block);
    else if (block.type == "columns") html = content(block);
    else if (block.type == "img") html = img(block);
    site.insertAdjacentHTML("beforeend", html);
});
function title(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
    `;
}
function text(block) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
    `;
}
function content(block) {
    const html = block.value.map((i)=>`<div class="col-sm"><p>${i}</p></div>`);
    return `
        <div class="row">
            ${html.join("")}
        </div>
    `;
}
function img(block) {
    return `
        <div class="row">
            <img src="${block.value}" />
        </div>
    `;
}

//# sourceMappingURL=index.816e7b21.js.map
