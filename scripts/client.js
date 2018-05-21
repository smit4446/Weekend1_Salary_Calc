$(document).ready(onReady);

let employees = [];

function onReady(){
    console.log('JQ')
    $('#submitButton').on('click', addEmployee);
}

class Employee {
    constructor(firstName, lastName, id, title, annualSalary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.title = title;
        this.annualSalary = annualSalary;
    }
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
    let el = $('#employeesOut');
    
    el.empty();

    for (employee of employees){
        let outputString = '<tr>'
            outputString += '<td>' + employee.firstName + '</td>'
            outputString += '<td>' + employee.lastName + '</td>'
            outputString += '<td>' + employee.id + '</td>'
            outputString += '<td>' + employee.title + '</td>'
            outputString += '<td>' + employee.annualSalary + '</td>'
        outputString += '</tr>'

        el.append(outputString);

    }
}

function calculateMonthlyCost(){
    let sum = 0;
    for (employee of employees){
        sum += parseInt(employee.annualSalary); 
        }
        console.log(sum);
        
        $('#monthlyCosts').empty();
        $('#monthlyCosts').append('<h3>Total Monthly Costs: $' + parseInt(sum/12).toFixed(2) + "</h3>");

        if(sum > 20000){
            $('#monthlyCosts').css('background-color', 'red');
        }
      }
   
    