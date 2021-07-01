const noteDocuments = ["git", "data-structures", "typescript", "javascript", "regex"];

noteDocuments.forEach((document) => {
    try {
        fetch(`./notes/${document}`)
            .then((res) => res.text())
            .then((textstring) => {
                generateItem(textstring, document);
            });
    } catch (err) {
        console.error(err);
    }
});

function generateItem(textstring, id) {
    let title = id;
    if (id.includes('-')) title = id.split('-').join(' ');

    generateTableOfContentsItem(id);
    const h1 = document.createElement('h1');
    h1.classList.add('m-section-title');
    h1.innerHTML = title;
    const section = document.createElement("section");
    section.classList.add('m-item-section')
    section.id = id;
    section.appendChild(h1);

    const ul = document.createElement('ul');
    textstring.split('\n').forEach((item) => {
        const li = document.createElement('li');
        li.innerHTML = item;
        ul.appendChild(li);
    });
    section.appendChild(ul);

    const main = document.querySelector("main");
    main.appendChild(section);
}

function generateTableOfContentsItem(id) {
    const tableOfContents = document.getElementById("table-of-contents");
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = `#${id}`;
    a.innerText = id;
    li.appendChild(a);
    tableOfContents.appendChild(li);
}
