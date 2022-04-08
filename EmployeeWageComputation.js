console.log("******** Welcome To Employee Wage Computation Application *********");
/**
 * We are using the random fun to check if the employee has done part time or full time.
 * We have created a function to calculate the working hours
 * Then we are using a for loop to calculate total hours for a month 
 * And then we multiple the total hours with wage per hour.
 */
 const IS_PART_TIME = 1;
 const IS_FULL_TIME = 2;
 const PART_TIME_HOURS = 4;
 const FULL_TIME_HOURS = 8;
 const WAGE_PER_HOUR = 20;
 const NUM_OF_WORKING_DAYS = 20;
 
 let employeeHours = 0;
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
 for(let day = 0; day<NUM_OF_WORKING_DAYS; day++){
    employeeCheck = Math.floor(Math.random() * 10) % 3;
    employeeHours += getWorkingHours(employeeCheck);
}

let employeeWage = employeeHours * WAGE_PER_HOUR;
console.log("Total Working Hours = "+ employeeHours + "\nEmployee Wage = " + employeeWage);