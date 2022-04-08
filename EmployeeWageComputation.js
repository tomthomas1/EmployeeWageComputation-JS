console.log("******** Welcome To Employee Wage Computation Application *********");
/**
 * We are using the random fun to check if the employee has done part time or full time.
 * We have created a function to calculate the working hours
 * Then we are using a while loop to calculate total hours for a month or max hours
 * And then we multiple the total hours with wage per hour.
 */
 const IS_PART_TIME = 1;
 const IS_FULL_TIME = 2;
 const PART_TIME_HOURS = 4;
 const FULL_TIME_HOURS = 8;
 const WAGE_PER_HOUR = 20;
 const NUM_OF_WORKING_DAYS = 20;
 const MAX_HOURS_IN_MONTH = 160;
 
 let employeeHours = 0;
let totalEmployeeHours = 0;
let totalWorkingDays = 0;
 let employeeCheck = Math.floor(Math.random() * 10) % 3;
 
 function getWorkingHours(employeeCheck){
 
     switch (employeeCheck) {
     
         case IS_PART_TIME:
             console.log("Employee works Part Time");
             return PART_TIME_HOURS;
             
         case IS_FULL_TIME:
             console.log("Employee works Full Time");
             return FULL_TIME_HOURS;
             
         default:
            console.log("Employee is Absent");
             return 0;
     }
 }
 while(totalEmployeeHours <= MAX_HOURS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    employeeCheck = Math.floor(Math.random() * 10) % 3;
    totalEmployeeHours += getWorkingHours(employeeCheck);
}

let employeeWage = totalEmployeeHours * WAGE_PER_HOUR;
console.log("\nTotal Working Days = " + totalWorkingDays + "\nTotal Working Hours = " + totalEmployeeHours + "\nEmployee Wage = " + employeeWage);