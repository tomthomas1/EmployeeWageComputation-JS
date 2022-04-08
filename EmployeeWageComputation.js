console.log("******** Welcome To Employee Wage Computation Application *********");
/**
 * We are using the random fun to check if the employee has done part time or full time.
 * We have created a function to calculate the working hours
 */
 const IS_PART_TIME = 1;
 const IS_FULL_TIME = 2;
 const PART_TIME_HOURS = 4;
 const FULL_TIME_HOURS = 8;
 const WAGE_PER_HOUR = 20;
 const NUM_OF_WORKING_DAYS = 20;
 const MAX_HOURS_IN_MONTH = 160;
 
 let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let totalEmployeeWage = 0;
let dayCounter = 0;
let employeeDailyWageArray = new Array();

function getWorkingHours(employeeCheck) {

    switch (employeeCheck) {

        case IS_PART_TIME:
            console.log("Employee works Part Time");
            return PART_TIME_HOURS;

        case IS_FULL_TIME:
            console.log("Employee works Full Time");
            return FULL_TIME_HOURS;

        default:
            console.log("Employee is ABSENT");
            return 0;
    }
}

function calculateDailyWage(employeeHours) {
    return employeeHours * WAGE_PER_HOUR;
}

function totalWage(dailyWage){
    totalEmployeeWage += dailyWage;
}

function totalWageUsingReduce(totalWage, dailyWage){
    return totalWage + dailyWage;
}

function mapDayWithDailyWage(dailyWage){
    dayCounter ++;
    return "Day " + dayCounter + " = " + dailyWage;
}

function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

function isAnyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}

while (totalEmployeeHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let employeeCheck = Math.floor(Math.random() * 10) % 3;
    let employeeHours = getWorkingHours(employeeCheck);
    totalEmployeeHours += employeeHours;
    employeeDailyWageArray.push(calculateDailyWage(employeeHours));
}

//Use Case - 7A
//Calculating Total Employee Wage Using ForEach
employeeDailyWageArray.forEach(totalWage);
console.log("\nTotal Working Days = " + totalWorkingDays + "\nTotal Working Hours = " + totalEmployeeHours + "\nTotal Employee Wage = " + totalEmployeeWage);

//Calculating Total Employee Wage Using Reduce
console.log("Employee Wage With Reduce : " + employeeDailyWageArray.reduce(totalWageUsingReduce, 0));

//Use Case - 7B
//Print day along with daily wage
let mapDayWithWageArray = employeeDailyWageArray.map(mapDayWithDailyWage);
console.log("Daily Wage Map : ");
console.log(mapDayWithWageArray);

//Use Case - 7C
//Show days when full time Wage of 160 is earned
let fullDayWageArray = mapDayWithWageArray.filter(fullTimeWage);
console.log("Daily Wage Filter When Full Time Wage Earned : ");
console.log(fullDayWageArray);

//Use Case - 7D
//Find first occurence when full time wage was eared using find function
console.log("First Full Time Wage was Earned on Day : " + mapDayWithWageArray.find(findFullTimeWage));

//Use Case - 7E
//Check if every element of full time wage is truely holding full time wage
console.log("Check All Element Have Full Time Wage: " + fullDayWageArray.every(isAllFullTimeWage));

//Use Case - 7F
//Check if ther eis any Part Time Wages
console.log("Check If Any Part Time Wage: " + mapDayWithWageArray.some(isAnyPartTimeWage));

//Use Case - 7G
//Find Number of days the Employee Worked
function totalDaysWorked(numberOfDays, dailyWage){
    if(dailyWage > 0)
        return numberOfDays + 1;
    return numberOfDays;
}
console.log("Numbe rof Days the Employee has Worked = " + employeeDailyWageArray.reduce(totalDaysWorked, 0));