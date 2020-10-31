/**
 * 
 */

class Calendar {
	
    constructor() {
        var d = new Date();
        this.date = d;
        this.currentYear = new Year(this.date.getFullYear());
    }

    openCalendar() {
        var iMonth = this.date.getMonth();
        var flYear = new Year(this.date.getFullYear());
        var day = this.date.getDay();
        var date = this.date.getDate();
        var bgDay = day - (date % 7) + 1;
        var nbOfDays = this.findNumberOfDays(iMonth, flYear);
        var edDay = ((nbOfDays - date) % 7) + day;
        bgDay = this.fixDay(bgDay);
        edDay = this.fixDay(edDay)
        var openingMonth = new Month(iMonth, nbOfDays, bgDay, edDay);
        return openingMonth;
    }

    //
    nextMonth(currentMonth) {//Not finished
        var months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var index = currentMonth.getMonthIndex + 1;
        if(index === 1){
                if (this.currentYear.isLeap()) months[1] = 29;
        }
        var beginDay = currentMonth.getEndDay() + 1;
        var month = new Month(index, months[index]);
    }

    previousMonth(month){

    }

    findNumberOfDays(index, year){
        var numberOfDays;
        if (index === 1){
            if (year.isLeap()) numberOfDays = 29;
            else numberOfDays = 28;
        }
        else if (index === 0 || index === 2 || index === 4 || index === 6 || 
                        index === 7 || index === 9 || index === 11) {

            numberOfDays = 31;
        }
        else if (index === 3 || index === 5 || index === 8 || index === 10) {

            numberOfDays = 30;
        }
        else {
            numberOfDays = -1;
        }
        return numberOfDays;
    }

    fixDay(day){
        if(day === -1 || day === 12) day = 6;
        else if(day === -2 || day === 11) day = 5;
        else if(day === -3 || day === 10) day = 4;
        else if(day === -4 || day === 9) day = 3;
        else if(day === -5 || day === 8) day = 2;
        else if(day === -6 || day === 7) day = 1;
        else;
        return day;
    }

    get getCurrentYear() {
        return this.currentYear;
    }
    
    set setHTML(html){
        this.html = html;
    }
    
    get getHTML(){
        return this.html;
    }
}

class Month {
	
    constructor(index, numberOfDays, beginDay, endDay) {
        this.monthIndex = index;
        this.numberOfDays = numberOfDays;
        this.beginDay = beginDay;
        this.endDay = endDay;
    }

    set setNumberOfDays(numberOfDays) {
        this.numberOfDays = numberOfDays;
    }

    get getNUmberOfDays() {
        return this.numberOfDays;
    }

    get getMonthIndex(){
        return this.monthIndex;
    }

    get getBeginDay(){
        return this.beginDay;
    }

    get getEndDay(){
        return this.endDay;
    }
}

class Year {
	
    constructor(year) {
        this.year = year;
    }

    isLeap() {
        if (this.year % 4 === 0) return true;
        else return false;
    }

    set setYear(year) {
        this.year = year;
    }

    get getYear() {
        return this.year;
    }
}

function setCalendar(id){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var calendar = new Calendar();
    var currentMonth = calendar.openCalendar();
    var docHTML = "<div id="+"calendar"+""><style scoped="">table {max-width:200px;max-height:125px;}</style>"
    var current = months[currentMonth.getMonthIndex] + " " + calendar.getCurrentYear.getYear;
    document.getElementById(id).innerHTML = current;
}

<div id="calendar"><style scoped="">table {max-width:200px;max-height:125px;}</style>
<table><thead><tr><th id="title" colspan="5"></th>
<th onclick=""><img src="./icons/chevron-left.svg" alt="" width="24" height="24" title="Bootstrap"></th>
<th onclick=""><img src="./icons/chevron-right.svg" alt="" width="24" height="24" title="Bootstrap"></th>
</tr><tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th>
</tr></thead> <tbody><tr><td>01</td><td>22</td><td>17</td><td>09</td><td>04</td><td>31</td><td>10</td>
</tr><tr><td>01</td><td>22</td><td>17</td><td>09</td><td>04</td><td>31</td><td>10</td></tr><tr><td>01</td>
<td>22</td><td>17</td><td>09</td><td>04</td><td>31</td><td>10</td></tr><tr><td>01</td><td>22</td><td>17</td>
<td>09</td><td>04</td><td>31</td><td>10</td></tr><tr><td>01</td><td>22</td><td>17</td><td>09</td>
<td>04</td><td>31</td><td>10</td></tr><tr><td>01</td><td>22</td><td>17</td><td>09</td><td>04</td>
<td>31</td><td>10</td></tr><tbody> </table></div>

