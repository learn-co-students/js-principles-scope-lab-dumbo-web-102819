// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
     bestCustomer = 'not bob'
    return bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "before"

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "after"
}