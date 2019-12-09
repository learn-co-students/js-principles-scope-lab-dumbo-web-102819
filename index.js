// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = '';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
    //no need to return anything, only change global var customerName
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "bob...";
}
