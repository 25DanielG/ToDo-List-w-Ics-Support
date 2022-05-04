console.log("autoIcsCreate.js is working");
// Formatting functions for the titles and summaries of the ToDo's
function removeEscapeSequences(str) {
    str = str.replace(/\\n/g, ''); // Removes all the \n's from a string
    str = str.replace(/\\/g, ''); // Removes all the \'s from a string
    return str;
}
function dateCompareToday(D1) { // Simple function to compare dates
    const date1 = new Date(D1);
    const date2 = new Date();
    return (date1 > date2);
}
const input = document.querySelector('input[type = "file"]')
var events = {}, events_i = 0, date, title, url, desc, isAfterToday;
input.addEventListener('change', function (e) {
    console.log(input.files)
    const reader = new FileReader()
    reader.onload = function () {
        var lines = reader.result.split("\n");
        for (var i = 0; i < lines.length; ++i) {
            if (lines[i].includes('DTSTART')) { // Date
                date = lines[i].split(":");
                events[events_i] = {}; // Prevents null error with events[events_i]
                // Parses the ISO8601 date/time format in UTC
                var curDate = date[1];
                if(curDate.includes('T')) { // Checks if the date given includes the time
                    var num = parseInt(curDate.substring(9, 11));
                    curDate = curDate.substring(0, 4) + '-' + curDate.substring(4, 6) + '-' + curDate.substring(6, 8) + // Includes time
                    'T' + ((num + 5) % 24) + ':' + curDate.substring(11, 13) +
                    ':' + curDate.substring(13, 15);
                    // At this point curDate is in a format for the javascript Date object
                    curDate = curDate.replace("T", "_");
                } else {
                    curDate = curDate.substring(0, 4) + '-' + curDate.substring(4, 6) + '-' + curDate.substring(6, 8); // No time included
                }
                if(dateCompareToday(curDate.replace("_", "T"))) isAfterToday = true;
                else isAfterToday = false;
                if(isAfterToday)
                    events[events_i].date = curDate;
            }
            if (lines[i].includes('SUMMARY')) { // Title
                const [first, ...rest] = lines[i].split(":")
                var title = rest.join('-');
                title = removeEscapeSequences(title);
                if(isAfterToday)
                    events[events_i].title = title;
                title = title.toLowerCase()
            }
            if (lines[i].includes('URL')) { // Link
                url = lines[i].split(":");
                if(isAfterToday)
                    events[events_i].url = url[1] + ":" + url[2];
            }
            if (lines[i].includes('DESCRIPTION')) { // Description
                const [first, ...rest] = lines[i].split(":")
                var txt = rest.join(":");
                txt = removeEscapeSequences(txt);
                if(isAfterToday)
                    events[events_i].description = txt;
            }
            if (lines[i].includes('END:VEVENT')) {
                if(isAfterToday)
                    ++events_i;
            }
        }
        console.log(events);
        console.log("manualCreateToDo.js part of Ics is working");
        var i = 0;
        while (i < events_i) {
            let inputVal = events[i].title;
            let inputVal2 = events[i].description;
            let inputVal3 = events[i].url;
            let inputVal4 = events[i].date;
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
            ++i;
        }
    }
    reader.readAsText(input.files[0])
}, false)