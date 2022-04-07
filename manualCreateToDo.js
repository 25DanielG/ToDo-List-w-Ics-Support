console.log("manualCreateToDo.js is working");
onload = todoMain;
function todoMain(){
  let inputElem,
      inputElem2,
      inputElm3,
      inputElm4,
      button,
      ulElem;

  getElements();
  addListeners();
  function getElements(){
    inputElem = document.getElementsByTagName("input")[0];
    inputElem2 = document.getElementsByTagName("input")[1];
    inputElem3 = document.getElementsByTagName("input")[2];
    inputElem4 = document.getElementsByTagName("input")[3];
    button = document.getElementById("addBtn");
    ulElem = document.getElementsByTagName("ul")[0];
  }
  function addListeners(){
    button.addEventListener("click", addEntry, false);
  }
  function addEntry(event){
    let inputValue = inputElem.value;
    inputElem.value = "";
    let inputValue2 = inputElem2.value;
    inputElem2.value = "";
    let inputValue3 = inputElem3.value;
    inputElem3.value = "";
    let inputValue4 = inputElem4.value;
    inputElem4.value = "";
    // add a new row
    let table = document.getElementById("todoList");
    let trElem = document.createElement("tr");
    table.appendChild(trElem);
    // checkbox cell
    let checkboxElem = document.createElement("input");
    checkboxElem.type = "Checkbox";
    checkboxElem.addEventListener("click", done, false);
    let tdElem1 = document.createElement("td");
    tdElem1.appendChild(checkboxElem);
    trElem.appendChild(tdElem1);
    // to-do cell
    let tdElem2 = document.createElement("td");
    tdElem2.innerText = inputValue;
    trElem.appendChild(tdElem2);
    // desc cell
    let tdElem3 = document.createElement("td");
    tdElem3.innerText = inputValue2;
    trElem.appendChild(tdElem3);
    // url cell
    let tdElem4 = document.createElement("td");
    tdElem4.innerText = inputValue3;
    trElem.appendChild(tdElem4);
    // date cell
    let tdElem5 = document.createElement("td");
    tdElem5.innerText = inputValue4;
    trElem.appendChild(tdElem5);
    // delete cell
    let spanElem = document.createElement("span");
    spanElem.innerText = "delete";
    spanElem.className = "material-icons";
    spanElem.addEventListener("click", deleteItem, false);
    let tdElem6 = document.createElement("td");
    tdElem6.appendChild(spanElem);
    trElem.appendChild(tdElem6);
    function deleteItem(){
      trElem.remove();
    }
    function done(){
      trElem.classList.toggle("strike");      
    }
  }
}