const input = document.querySelector("input");
input.focus();

const addBtnRed = document.querySelector(".btn-add-red");
const addBtnYellow = document.querySelector(".btn-add-yellow");
const addBtnBlue = document.querySelector(".btn-add-blue");

const ulRed = document.getElementById("ul-red");
const ulYellow = document.getElementById("ul-yellow");
const ulBlue = document.getElementById("ul-blue");

const emptyRed = document.getElementById("emptyRed");
const emptyYellow = document.getElementById("emptyYellow");
const emptyBLue = document.getElementById("emptyBLue");

listElement(addBtnRed, ulRed, emptyRed);
listElement(addBtnYellow, ulYellow, emptyYellow);
listElement(addBtnBlue, ulBlue, emptyBlue);

function listElement(addBtn, ul, empty) {
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const text = input.value;
    if (text !== "") {
      const li = document.createElement("li");
      const p = document.createElement("p");
      p.textContent = text;
      li.appendChild(p);
      ul.appendChild(li);
      li.appendChild(addDeleteBtn());
      input.value = "";
      empty.style.display = "none";
    }
  });
  function addDeleteBtn() {
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";
    deleteBtn.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      ul.removeChild(item);
      const items = ul.hasChildNodes();
      if (!ul.hasChildNodes()) {
        empty.style.display = "block"
      }
    });
    return deleteBtn;
  }
}
