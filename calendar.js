let now = new Date();
let month = now.getMonth();
let year = now.getFullYear();
let dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
let firstDay = new Date(year, month, 1).getDay();
let lastDay = new Date(year, month+1, 0).getDay();
let lastDate = new Date(year, month+1, 0).getDate();

let title = createTitle();
let table = createTable();

document.getElementById("calName").innerHTML = title;
document.getElementById("demo").innerHTML = table;

function createTitle() {
    let calTitle = year+"년 "+(month+1)+"월"
    return calTitle;
}

function createTable() {
    let table = "<table>";
    table += "<tr>"
    for(let i=0;i<7;i++) {
        table += "<td class=\"day"+i+"\">"+dayOfWeek[i]+"</td>"
    }
    table += "</tr><tr>"
    for(let i=0;i<lastDate;i++) {
        let day = new Date(year, month, i+1).getDay();
        let dayName = dayOfWeek[day];
        if(i==0) { for(let j=0;j<firstDay;j++) table += "<td></td>"; }
        if(now.getFullYear()==year && now.getMonth()==month && (i+1)==now.getDate()) {
            table += `<td id="today" class="day${day}">${i+1}<small id="todaytext">today!</small><br>`
            table += `<p id="todaytime"><small>${getTime()}</small></p>`
            } else { table += `<td class="day${day}">${i+1}` }
        table += "</td>"
        if(dayName=="토") table += "</tr><tr>"
        if(i==lastDate-1 && dayName!="토") { for(let j=lastDay+1;j<7;j++) table += "<td></td>"}
    }
    table += "</table>"
    return table;
}

function getTime() {
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let ap;

    if(hour>12) {
        hour -= 12;
        ap = "오후";
    } else if(hour==12) ap = "오후";
    else ap = "오전";

    if(minutes<10) {
        minutes = "0" + minutes;
    }

    return ap + " " + hour + ":" + minutes;
}

function preView() {
    if(month==0) {
        month = 11;
        year -= 1;
    } else month -= 1;
    
    firstDay = new Date(year, month, 1).getDay();
    lastDay = new Date(year, month+1, 0).getDay();
    lastDate = new Date(year, month+1, 0).getDate();

    title = createTitle();
    table = createTable();

    document.getElementById("calName").innerHTML = title;
    document.getElementById("demo").innerHTML = table;
}

function nextView() {
    if(month==11) {
        month = 0;
        year += 1;
    } else month += 1;
    firstDay = new Date(year, month, 1).getDay();
    lastDay = new Date(year, month+1, 0).getDay();
    lastDate = new Date(year, month+1, 0).getDate();

    title = createTitle();
    table = createTable();

    document.getElementById("calName").innerHTML = title;
    document.getElementById("demo").innerHTML = table;
}