$(document).ready(onReady);

let employees = [];

class Employee {
    constructor(firstName, lastName, id, title, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
}

function onReady(){
    console.log('JQ')
    //click handler - target the button
    $('#submitButton').on('click', addEmployee);
    $('#deleteButton').on('click', deleteEmployee);
}

function deleteEmployee(){
    console.log('in delete emp');
    let deleteById = $('#deleteById').val();
    console.log(deleteById);
    for (let i=0; i<employees.length; i++){
        let employee = employees[i];
        if(deleteById == employees[i].id){
            employees.splice(i,1);   
        }     
    } 
    calculateMonthlyCost();
    displayEmployee();
}

function addEmployee(){
    console.log('in addEmployeeToTable');
    let newEmployee = new Employee( $('#firstName').val(), $('#lastName').val(), $('#id').val(), $('#title').val(), $('#annualSalary').val());
    employees.push(newEmployee);
    console.log(newEmployee);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');
    displayEmployee();
    calculateMonthlyCost();
}

function displayEmployee(){
    $('#employeesOut').empty(); 

    for (let employee of employees){
        let outputString = '<tr>'
            outputString += '<td>' + employee.firstName + '</td>'
            outputString += '<td>' + employee.lastName + '</td>'
            outputString += '<td>' + employee.id + '</td>'
            outputString += '<td>' + employee.title + '</td>'
            outputString += '<td>' + employee.annualSalary + '</td>'
        outputString += '</tr>'

        $('#employeesOut').append(outputString);
    }
}

function calculateMonthlyCost(){
    let sum = 0;
    for (let employee of employees){
        sum += parseInt(employee.annualSalary)/12; 
    }
    //append to the DOM   
    $('#monthlyCosts').empty();
    $('#monthlyCosts').append('<h3>Total Monthly Costs: $' + sum.toFixed(2) + "</h3>");

    if(sum > 20000){
        $('#monthlyCosts').addClass('red');
    } 
    else{
        $('#monthlyCosts').removeClass('red');
    }

    console.log(sum);
}
   
