try {
  fetch("./notes/git")
    .then((res) => res.text())
    .then((textstring) => {
      generateItem(textstring, "datastructures");
    });
  fetch("./notes/datastructures")
    .then((res) => res.text())
    .then((textstring) => {
      generateItem(textstring, "git");
    });
} catch (err) {
  console.error(err);
}

function generateItem(textstring, id) {
  generateTableOfContentsItem(id);
  const section = document.createElement('section');
  section.id = id;
  section.innerHTML = textstring;
  const main = document.querySelector('main');
  main.appendChild(section);
}

function generateTableOfContentsItem(id) {
  const tableOfContents = document.getElementById("table-of-contents");
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = `#${id}`;
  a.innerText = id;
  li.appendChild(a);
  tableOfContents.appendChild(li);
  console.log(tableOfContents.children);
}
