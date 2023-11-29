'use strict';

// **** Global Variables ****

const storesArray = [];
const storeSection = document.getElementById('sales');

// **** Hours Array ****

const Hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

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

Stores.prototype.simulateHourlySales = function () {
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

Stores.prototype.render = function () {
  this.simulateHourlySales();

  let table = document.createElement('table');
  storeSection.appendChild(table);

  this.renderTableHeader(table);
  this.renderTableRow(table);
  this.renderTableFooter(table);
};

Stores.prototype.renderTableHeader = function (table) {
  let headerRow = document.createElement('tr');
  table.appendChild(headerRow);

  let headerCell = document.createElement('th');
  headerRow.appendChild(headerCell);

  for (let i = 0; i < this.hours.length; i++) {
    let headerCell = document.createElement('th');
    headerCell.textContent = this.hours[i];
    headerRow.appendChild(headerCell);
  }

  let totalHeaderCell = document.createElement('th');
  totalHeaderCell.textContent = 'Daily Location Total';
  headerRow.appendChild(totalHeaderCell);
};

Stores.prototype.renderTableRow = function (table) {
  let row = document.createElement('tr');
  table.appendChild(row);

  let nameCell = document.createElement('td');
  nameCell.textContent = this.name;
  row.appendChild(nameCell);

  for (let i = 0; i < this.hours.length; i++) {
    let dataCell = document.createElement('td');
    dataCell.textContent = this.getSalesDataForHour(this.hours[i]);
    row.appendChild(dataCell);
  }

  let totalCell = document.createElement('td');
  totalCell.textContent = this.calculateTotalCookies();
  row.appendChild(totalCell);
};

Stores.prototype.renderTableFooter = function (table) {
  let footerRow = document.createElement('tr');
  table.appendChild(footerRow);

  let footerCell = document.createElement('td');
  footerCell.textContent = 'Total';
  footerRow.appendChild(footerCell);

  for (let hour of this.hours) {
    let footerCell = document.createElement('td');
    footerCell.textContent = this.calculateHourlyTotal(hour);
    footerRow.appendChild(footerCell);
  }

  let grandTotalCell = document.createElement('td');
  grandTotalCell.textContent = this.calculateGrandTotal();
  footerRow.appendChild(grandTotalCell);
};

Stores.prototype.getSalesDataForHour = function (hour) {
  for (let salesEntry of this.salesData) {
    if (salesEntry.startsWith(hour)) {
      return salesEntry.split(': ')[1].trim();
    }
  }
  return '';
};

Stores.prototype.calculateHourlyTotal = function (hour) {
  let total = 0;
  for (let store of storesArray) {
    total += store.getSalesDataForHour(hour) !== '' ? parseInt(store.getSalesDataForHour(hour)) : 0;
  }
  return total;
};

Stores.prototype.calculateGrandTotal = function () {
  let grandTotal = 0;
  for (let store of storesArray) {
    grandTotal += store.calculateTotalCookies();
  }
  return grandTotal;
};

// **** Executable (executes on page load) Code ****

document.addEventListener('DOMContentLoaded', function () {

  let seattle = new Stores('Seattle', 23, 65, 6.3, [], Hours);
  let tokyo = new Stores('Tokyo', 3, 24, 1.2, [], Hours);
  let dubai = new Stores('Dubai', 11, 38, 3.7, [], Hours);
  let paris = new Stores('Paris', 20, 38, 2.3, [], Hours);
  let lima = new Stores('Lima', 2, 16, 4.6, [], Hours);

  storesArray.push(seattle, tokyo, dubai, paris, lima);

  // seattle.render();
  // tokyo.render();
  // dubai.render();
  // paris.render();
  // lima.render();

  for (let store of storesArray) {
    store.simulateHourlySales();
  }

  let table = document.createElement('table');
  storeSection.appendChild(table);

  // Render header only once
  seattle.renderTableHeader(table);

  for (let store of storesArray) {
    store.renderTableRow(table);
  }

  seattle.renderTableFooter(table);
});
