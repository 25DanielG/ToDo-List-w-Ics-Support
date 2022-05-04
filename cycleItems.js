document.addEventListener('click', function (event) {
    let cnt = 0;
    let elems = new Map();
    let cntdwn;
    function reset () {
    count = 0;
    cntdwn = null;
  }
  ++cnt;
  if (cnt === 3) {
    if (!elems.has(event.target)) {
      elems.set(event.target, 1);
    } else {
      let curCnt = elems.get(event.target);
      ++curCnt;
      elems.set(event.target, curCnt);
    } 
    let tripleClick = new CustomEvent('trplclick', {
      bubbles: true,
      detail: {
        numberOfTripleClicks: elems.get(event.target)
      }
    });
    event.target.dispatchEvent(tripleClick);
    reset();
  }
  if (!cntdwn) {
    cntdwn = window.setTimeout(function () {
      reset();
    }, 500);
  }
});
function dateCompareToday(D1) { // Simple function to compare dates
    const date1 = new Date(D1);
    const date2 = new Date();
    return (date1 > date2);
}
CycleItems.addEventListener('click', function() {
    CycleItems.textContent = 'Showing Tests/Quizzes';
    table = document.getElementById("todoList")
    while (table.childNodes.length > 2) {
        table.removeChild(table.lastChild);
    }
    for (var used in events) {
        used = events[used];
        var str = used.title.toLowerCase();
        if (!(str.includes("quiz") || str.includes("test"))) continue;
        let inputVal = used.title;
        let inputVal2 = used.description;
        let inputVal3 = used.url;
        let inputVal4 = used.date;
        // Add a new row
        let tble = document.getElementById("todoList");
        let hrElement = document.createElement("hr");
        let trElement = document.createElement("tr");
        tble.appendChild(hrElement);
        tble.appendChild(trElement);
        // Checkbox cell
        let checkboxElem = document.createElement("input");
        checkboxElem.type = "Checkbox";
        checkboxElem.addEventListener("click", done, false);
        let tdElement1 = document.createElement("td");
        tdElement1.appendChild(checkboxElem);
        trElement.appendChild(tdElement1);
        // ToDo cell
        let tdElement2 = document.createElement("td");
        tdElement2.innerText = inputVal;
        trElement.appendChild(tdElement2);
        // Desc cell
        let tdElement3 = document.createElement("td");
        tdElement3.innerText = inputVal2;
        trElement.appendChild(tdElement3);
        // Url cell
        let tdElement4 = document.createElement("td");
        tdElement4.innerText = inputVal3;
        trElement.appendChild(tdElement4);
        // Date cell
        let tdElement5 = document.createElement("td");
        tdElement5.innerText = inputVal4;
        trElement.appendChild(tdElement5);
        // Delete cell
        let spanElem = document.createElement("span");
        spanElem.innerText = "delete";
        spanElem.className = "material-icons";
        spanElem.addEventListener("click", deleteItem, false);
        let tdElement6 = document.createElement("td");
        tdElement6.appendChild(spanElem);
        trElement.appendChild(tdElement6);
        function deleteItem() {
            trElement.remove();
            hrElement.remove();
            for(var i = 0; i < events_i; ++i) {
                if(events[i].title == inputVal) {
                    let cnt = events_i;
                    console.log(events[cnt - 1]);
                    events[i] = events[cnt - 1];
                    delete(events[cnt - 1]);
                    --events_i;
                    console.log(events);
                    break;
                }
            }
            console.log("Deleted element from events");
        }
        function done() {
            trElement.classList.toggle("del");  
            hrElement.classList.toggle("del");
        }
    }
}, false);
CycleItems.addEventListener("dblclick", function() {
    CycleItems.textContent = 'Showing Homework';
    table = document.getElementById("todoList")
    while (table.childNodes.length > 2) {
        table.removeChild(table.lastChild);
    }
    for (var used in events) {
        used = events[used];
        var str = used.title.toLowerCase();
        if ((str.includes("quiz") || str.includes("test"))) continue;
        let inputVal = used.title;
        let inputVal2 = used.description;
        let inputVal3 = used.url;
        let inputVal4 = used.date;
        // Add a new row
        let tble = document.getElementById("todoList");
        let hrElement = document.createElement("hr");
        let trElement = document.createElement("tr");
        tble.appendChild(hrElement);
        tble.appendChild(trElement);
        // Checkbox cell
        let checkboxElem = document.createElement("input");
        checkboxElem.type = "Checkbox";
        checkboxElem.addEventListener("click", done, false);
        let tdElement1 = document.createElement("td");
        tdElement1.appendChild(checkboxElem);
        trElement.appendChild(tdElement1);
        // ToDo cell
        let tdElement2 = document.createElement("td");
        tdElement2.innerText = inputVal;
        trElement.appendChild(tdElement2);
        // Desc cell
        let tdElement3 = document.createElement("td");
        tdElement3.innerText = inputVal2;
        trElement.appendChild(tdElement3);
        // Url cell
        let tdElement4 = document.createElement("td");
        tdElement4.innerText = inputVal3;
        trElement.appendChild(tdElement4);
        // Date cell
        let tdElement5 = document.createElement("td");
        tdElement5.innerText = inputVal4;
        trElement.appendChild(tdElement5);
        // Delete cell
        let spanElem = document.createElement("span");
        spanElem.innerText = "delete";
        spanElem.className = "material-icons";
        spanElem.addEventListener("click", deleteItem, false);
        let tdElement6 = document.createElement("td");
        tdElement6.appendChild(spanElem);
        trElement.appendChild(tdElement6);
        function deleteItem() {
            trElement.remove();
            hrElement.remove();
            for(var i = 0; i < events_i; ++i) {
                if(events[i].title == inputVal) {
                    let cnt = events_i;
                    console.log(events[cnt - 1]);
                    events[i] = events[cnt - 1];
                    delete(events[cnt - 1]);
                    --events_i;
                    console.log(events);
                    break;
                }
            }
            console.log("Deleted element from events");
        }
        function done() {
            trElement.classList.toggle("del");  
            hrElement.classList.toggle("del");
        }
    }
}, false);
document.addEventListener('trplclick', function (event) {
    CycleItems.textContent = 'Showing All';
    table = document.getElementById("todoList")
    while (table.childNodes.length > 2) {
        table.removeChild(table.lastChild);
    }
    for (var used in events) {
        used = events[used];
        var str = used.title.toLowerCase();
        let inputVal = used.title;
        let inputVal2 = used.description;
        let inputVal3 = used.url;
        let inputVal4 = used.date;
        // Add a new row
        let tble = document.getElementById("todoList");
        let hrElement = document.createElement("hr");
        let trElement = document.createElement("tr");
        tble.appendChild(hrElement);
        tble.appendChild(trElement);
        // Checkbox cell
        let checkboxElem = document.createElement("input");
        checkboxElem.type = "Checkbox";
        checkboxElem.addEventListener("click", done, false);
        let tdElement1 = document.createElement("td");
        tdElement1.appendChild(checkboxElem);
        trElement.appendChild(tdElement1);
        // ToDo cell
        let tdElement2 = document.createElement("td");
        tdElement2.innerText = inputVal;
        trElement.appendChild(tdElement2);
        // Desc cell
        let tdElement3 = document.createElement("td");
        tdElement3.innerText = inputVal2;
        trElement.appendChild(tdElement3);
        // Url cell
        let tdElement4 = document.createElement("td");
        tdElement4.innerText = inputVal3;
        trElement.appendChild(tdElement4);
        // Date cell
        let tdElement5 = document.createElement("td");
        tdElement5.innerText = inputVal4;
        trElement.appendChild(tdElement5);
        // Delete cell
        let spanElem = document.createElement("span");
        spanElem.innerText = "delete";
        spanElem.className = "material-icons";
        spanElem.addEventListener("click", deleteItem, false);
        let tdElement6 = document.createElement("td");
        tdElement6.appendChild(spanElem);
        trElement.appendChild(tdElement6);
        function deleteItem() {
            trElement.remove();
            hrElement.remove();
            for(var i = 0; i < events_i; ++i) {
                if(events[i].title == inputVal) {
                    let cnt = events_i;
                    console.log(events[cnt - 1]);
                    events[i] = events[cnt - 1];
                    delete(events[cnt - 1]);
                    --events_i;
                    console.log(events);
                    break;
                }
            }
            console.log("Deleted element from events");
        }
        function done() {
            trElement.classList.toggle("del");  
            hrElement.classList.toggle("del");
        }
    }
}, false);