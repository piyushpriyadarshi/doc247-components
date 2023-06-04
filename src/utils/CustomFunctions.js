export const GetDates = (daysToAdd)=> {
    let aryDates = [];
    let startDate = new Date();

    for(let i = 0; i <= daysToAdd; i++) {
        let currentDate = new Date();
        currentDate.setDate(startDate.getDate() + i);
        if(i<2)
        aryDates.push((i < 1 ? 'Today' : 'Tomorrow') + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth()) + " " );
        else
        aryDates.push(DayAsString(currentDate.getDay()) + ", " + currentDate.getDate() + " " + MonthAsString(currentDate.getMonth()) + " " );
    }
    
    return aryDates;
}

const MonthAsString = (monthIndex)=> {
    let d=new Date();
    let month=[];
    month[0]="January";
    month[1]="February";
    month[2]="March";
    month[3]="April";
    month[4]="May";
    month[5]="June";
    month[6]="July";
    month[7]="August";
    month[8]="September";
    month[9]="October";
    month[10]="November";
    month[11]="December";
    
    return month[monthIndex];
}

const DayAsString = (dayIndex)=> {
    let weekdays =[];
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    
    return weekdays[dayIndex];
}