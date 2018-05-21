SETUP
-make HTML file
-get jQuery
-get bootstrap
-make CSS file
-make JS file
-make .gitignore

HTML
-src and link files
-header!
-make inputs for first name, last name, id, title and annual salary
-make button for submitting
-make a table for existing employees
-havea box for monthly total
-make delete input and button?

JQUERY
-get click handler on submit
-make an array of employee objects(HARD)
-append new employee to the DOM
-clear inputs
-show monthly
-change to red if over $20k per month

STYLING
-bootstrap buttons
-alternating table row colors
-disable vs enable

link css
script javascript


section and divs are block level elements

ids are very specific to one element
calsses can me assgned to multiple elements

.val() is a jQuery method

project without a constructor

const employeeArray = [];

const firstName = $('#firstName).val();
const firstName = $('#lastName).val();
const firstName = $('#id).val();
const firstName = $('#title).val();
const firstName = $('#annualSalary).val();

const employee = {
    firstName : firstName;
    lastName : lastName;
    id : id;
    title : title;
    salary : salary;

    keyName : referencing variable
}
constructor is called when you say new,as in new Employee

constructor creates an instance of the object

this - it is the current context in which you are

val() always returns a string

template literals