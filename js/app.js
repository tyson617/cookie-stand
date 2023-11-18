`use strict`

// **** Global Variables ****

const storesArray = [];

let storeSection = document.getElementById('stores');

console.dir(storeSection);

// *** Helper Functions ***


function renderAll(){
  for(let i = 0; i < storesArray.length; i++){
    storesArray[i].render();
  }
};

// **** Constructor Function ****

function Stores(name, minCustomers, maxCustomers, avgCookiesPerCustomer, salesData, hours) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.salesData = salesData;
  this.hours = hours;
}

// **** Prototype Methods ****

Stores.prototype.generateRandomCustomers = function () {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};

Stores.prototype.simulateHourlySales = 
function () {
  for (let hour = 0; hour < this.hours.length; hour++) {
    const customers = this.generateRandomCustomers();
    const cookiesSold = Math.round(customers * this.avgCookiesPerCustomer);
    this.salesData.push(`${this.hours[hour]}: ${cookiesSold} cookies`);
  }
};

Stores.prototype.calculateTotalCookies = function () {
  return this.salesData.reduce((acc, sales) => {
    const cookies = parseInt(sales.split(': ')[1]);
    return acc + cookies;
  }, 0);
};

Stores.prototype.render = function(){
  this.simulateHourlySales();

  let articleElement = document.createElement('article');
  
  storeSection.appendChild(articleElement);

  let storeHeading = document.createElement('h2');
  storeHeading.innerText = this.name;
  articleElement.appendChild(storeHeading);

  let salesTable = document.createElement('table');
  articleElement.appendChild(salesTable);

  this.renderTableHeader(salesTable);

  let salesList = document.createElement('ul');
  articleElement.appendChild(salesList);

  this.salesData.forEach((sales) => {
    let salesLI = document.createElement('li');
    salesLI.innerText = sales;
    salesList.appendChild(salesLI);
  });
  
  let totalCookies = document.createElement('p');
  totalCookies.innerText = `Total: ${this.calculateTotalCookies()} cookies`;
  articleElement.appendChild(totalCookies);
};

let Hours = ['6am', '7am', '8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm', '7pm'];

// *** Add Table ***

Stores.prototype.renderTableHeader = function(storeTable) {
  let tableHeader = document.createElement('thead');
  let headerRow = document.createElement('tr');

  headerRow.appendChild(document.createElement('th'));

  for (let hour of this.hours) {
    let headerCell = document.createElement('th');
    headerCell.innerText = hour;
    headerRow.appendChild(headerCell);
  }

  headerRow.appendChild(document.createElement('th')).innerText = 'Daily Location Total';

  tableHeader.appendChild(headerRow);
  storeTable.appendChild(tableHeader);
};

Stores.prototype.renderTableRow = function(storeTable) {
  let tableRow = document.createElement('tr');

  tableRow.appendChild(document.createElement('td')).innerText = this.name;

  for (let hour of this.hours) {
    let cell = document.createElement('td');
    cell.innerText = this.getSalesDataForHour(hour);
    tableRow.appendChild(cell);
  }

  tableRow.appendChild(document.createElement('td')).innerText = this.calculateTotalCookies();

  storeTable.appendChild(tableRow);
};

Stores.prototype.getSalesDataForHour = function(hour) {
  for (let salesEntry of this.salesData) {
    if (salesEntry.startsWith(hour)) {
      return salesEntry.split(': ')[1].trim();
    }
  }
  return '';
};

// **** Object Literals ****

//let seattle = {
//  name: 'Seattle',
//  minCustomers: 23,
//  maxCustomers: 65,
//  avgCookiesPerCustomer: 6.3,
//  salesData: [],
//  generateRandomCustomers: function(min, max) {
//    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
//  },

//  simulateHourlySales: function () {
//    for (let hour = 0; hour < Hours.length; hour++) {
//      const customers = this.generateRandomCustomers();
//      const cookiesSold = Math.round(customers * this.avgCookiesPerCustomer);
//      this.salesData.push(`${hour}am: ${cookiesSold} cookies`);
//    }
//  },
//  calculateTotalCookies: function () {
//    return this.salesData.reduce((acc, sales) => {
//      const cookies = parseInt(sales.split(' ')[1]);
//      return acc + cookies;
//    }, 0);
//  },

//  render: function(){
//    this.simulateHourlySales();

//    let articleElement = document.createElement('article');
    

    // *** Add to DOM ***
//    storeSection.appendChild(articleElement);

//    let storeHeading = document.createElement('h2');
//    storeHeading.innerText = this.name;
//    articleElement.appendChild(storeHeading);

//    let salesList = document.createElement('ul');
//    articleElement.appendChild(salesList);

//    this.salesData.forEach((sales) => {
//      let salesLI = document.createElement('li');
//      salesLI.innerText = sales;
//      salesList.appendChild(salesLI);
//    });
    
//    let totalCookies = document.createElement('p');
//    totalCookies.innerText = `Total: ${this.calculateTotalCookies()} cookies`;
//    articleElement.appendChild(totalCookies);
//  },
//};

// *** Create Table ***

function renderTableHeader(storeTable) {
  let tableHeader = document.createElement('thead');
  let headerRow = document.createElement('tr');

  headerRow.appendChild(document.createElement('th'));

  for (let hour of Hours) {
    let headerCell = document.createElement('th');
    headerCell.innerText = hour;
    headerRow.appendChild(headerCell);
  }

  headerRow.appendChild(document.createElement('th')).innerText = 'Daily Location Total';

  tableHeader.appendChild(headerRow);
  storeTable.appendChild(tableHeader);
}

function renderTableFooter(storeTable) {
  let tableFooter = document.createElement('tfoot');
  let footerRow = document.createElement('tr');

  footerRow.appendChild(document.createElement('td'));

  for (let hour of Hours) {
    let footerCell = document.createElement('td');
    footerCell.innerText = calculateHourlyTotal(hour);
    footerRow.appendChild(footerCell);
  }

  footerRow.appendChild(document.createElement('td')).innerText = calculateGrandTotal();

  tableFooter.appendChild(footerRow);
  storeTable.appendChild(tableFooter);
}

function calculateHourlyTotal(hour) {
  let total = 0;
  for (let store of storesArray) {
      total += store.getSalesDataForHour(hour) !== '' ? parseInt(store.getSalesDataForHour(hour)) : 0;
  }
  return total;
}

function calculateGrandTotal() {
  let grandTotal = 0;
  for (let store of storesArray) {
      grandTotal += store.calculateTotalCookies();
  }
  return grandTotal;
}

// **** Executable (executes on page load) Code ****

let seattle = new Stores('Seattle', 23, 65, 6.3, [], Hours);
console.log(seattle);

let tokyo = new Stores('Tokyo', 3, 24, 1.2, [], Hours);
console.log(tokyo);

let dubai = new Stores('Dubai', 11, 38, 3.7, [], Hours);
console.log(dubai);

let paris = new Stores('Paris', 20, 38, 2.3, [], Hours);
console.log(paris);

let lima = new Stores('Lima', 2, 16, 4.6, [], Hours);
console.log(lima);

storesArray.push(seattle, tokyo, dubai, paris, lima);

let storeTable = document.createElement('table');
storeSection.appendChild(storeTable);

renderTableHeader(storeTable);

for (let store of storesArray) {
  store.renderTableRow(storeTable);
}

renderTableFooter(storeTable);

for (let store of storesArray) {
  store.renderTableRow(storeTable);
}

renderAll();
