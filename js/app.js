`use strict`

// **** Global Variables ****

const storesArray = [];
let storeSection = document.getElementById('stores');

console.dir(storeSection);

//Helper Functions

function renderAll(){
  for(let i = 0; i < storesArray.length; i++){
    storesArray[i].render();
  }
};

// **** Constructor Function ****

function Stores(name, minCustomers, maxCustomers, avgCookiesPerCustomer, salesData) {
  this.name = name;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.salesData = salesData;
};

// **** Prototype Methods ****

Stores.prototype.generateRandomCustomers = function(min, max) {
  return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
};

Stores.prototype.simulateHourlySales = 
function () {
  for (let hour = 0; hour < Hours.length; hour++) {
    const customers = this.generateRandomCustomers();
    const cookiesSold = Math.round(customers * this.avgCookiesPerCustomer);
    this.salesData.push(`${hour}am: ${cookiesSold} cookies`);
  }
};

Stores.prototype.render = function(){
  this.simulateHourlySales();

  let articleElement = document.createElement('article');
  
  storeSection.appendChild(articleElement);

  let storeHeading = document.createElement('h2');
  storeHeading.innerText = this.name;
  articleElement.appendChild(storeHeading);

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


// **** Helpful Start For Lab ****

// **** Object Literals ****

let seattle = {
  name: 'Seattle',
  minCustomers: 23,
  maxCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  salesData: [],
  generateRandomCustomers: function(min, max) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },

  simulateHourlySales: function () {
    for (let hour = 0; hour < Hours.length; hour++) {
      const customers = this.generateRandomCustomers();
      const cookiesSold = Math.round(customers * this.avgCookiesPerCustomer);
      this.salesData.push(`${hour}am: ${cookiesSold} cookies`);
    }
  },
  calculateTotalCookies: function () {
    return this.salesData.reduce((acc, sales) => {
      const cookies = parseInt(sales.split(' ')[1]);
      return acc + cookies;
    }, 0);
  },

  render: function(){
    this.simulateHourlySales();

    let articleElement = document.createElement('article');
    

    // *** Add to DOM ***
    storeSection.appendChild(articleElement);

    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    articleElement.appendChild(storeHeading);

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
  },
};

let tokyo = {
  name: 'Tokyo',
  minCustomers: 3,
  maxCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  salesData: [],
  generateRandomCustomers: function(min, max) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },
  simulateHourlySales: function () {
    for (let hour = 0; hour < Hours.length; hour++) {
      const customers = this.generateRandomCustomers();
      const cookiesSold = Math.round(customers * this.avgCookiesPerCustomer);
      this.salesData.push(`${hour}am: ${cookiesSold} cookies`);
    }
  },
  calculateTotalCookies: function () {
    return this.salesData.reduce((acc, sales) => {
      const cookies = parseInt(sales.split(' ')[1]);
      return acc + cookies;
    }, 0);
  },

  render: function () {
    this.simulateHourlySales();

    let articleElement = document.createElement('article');

    storeSection.appendChild(articleElement);

    let storeHeading = document.createElement('h2');
    storeHeading.innerText = this.name;
    articleElement.appendChild(storeHeading);

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
  },
}

let dubai = {
  name: 'Dubai',
  minCustomers: 11,
  maxCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  salesData: [],
  generateRandomCustomers: function(min, max) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },

  simulateHourlySales: function () {
    for (let hour = 0; hour < Hours.length; hour++) {
      const customers = this.generateRandomCustomers();
      const cookiesSold = Math.round(customers * this.avgCookiesPerCustomer);
      this.salesData.push(`${hour}am: ${cookiesSold} cookies`);
    }
  },
  calculateTotalCookies: function () {
    return this.salesData.reduce((acc, sales) => {
      const cookies = parseInt(sales.split(' ')[1]);
      return acc + cookies;
    }, 0);
  }, 

    render: function () {
      this.simulateHourlySales();
  
      let articleElement = document.createElement('article');
  
      storeSection.appendChild(articleElement);
  
      let storeHeading = document.createElement('h2');
      storeHeading.innerText = this.name;
      articleElement.appendChild(storeHeading);
  
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
    },
};

let paris = {
  name: 'Paris',
  minCustomers: 20,
  maxCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  salesData: [],
  generateRandomCustomers: function(min, max) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },

  simulateHourlySales: function () {
    for (let hour = 0; hour < Hours.length; hour++) {
      const customers = this.generateRandomCustomers();
      const cookiesSold = Math.round(customers * this.avgCookiesPerCustomer);
      this.salesData.push(`${hour}am: ${cookiesSold} cookies`);
    }
  },
  calculateTotalCookies: function () {
    return this.salesData.reduce((acc, sales) => {
      const cookies = parseInt(sales.split(' ')[1]);
      return acc + cookies;
    }, 0);
  }, 

    render: function () {
      this.simulateHourlySales();
  
      let articleElement = document.createElement('article');
  
      storeSection.appendChild(articleElement);
  
      let storeHeading = document.createElement('h2');
      storeHeading.innerText = this.name;
      articleElement.appendChild(storeHeading);
  
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
    },
};

let lima = {
  name: 'Lima',
  minCustomers: 2,
  maxCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  salesData: [],
  generateRandomCustomers: function(min, max) {
    return Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) + this.minCustomers);
  },

  simulateHourlySales: function () {
    for (let hour = 0; hour < Hours.length; hour++) {
      const customers = this.generateRandomCustomers();
      const cookiesSold = Math.round(customers * this.avgCookiesPerCustomer);
      this.salesData.push(`${hour}am: ${cookiesSold} cookies`);
    }
  },
  calculateTotalCookies: function () {
    return this.salesData.reduce((acc, sales) => {
      const cookies = parseInt(sales.split(' ')[1]);
      return acc + cookies;
    }, 0);
  }, 

    render: function () {
      this.simulateHourlySales();
  
      let articleElement = document.createElement('article');
  
      storeSection.appendChild(articleElement);
  
      let storeHeading = document.createElement('h2');
      storeHeading.innerText = this.name;
      articleElement.appendChild(storeHeading);
  
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
    },
};

// **** Executable (executes on page load) Code ****

let seattle = new Stores('Seattle', 23, 65, 6.3, []);
console.log(seattle);

let tokyo = new Stores('Tokyo', 3, 24, 1.2, []);

let dubai = new Stores('Dubai', 11, 38, 3.7, []);

let paris = new Stores('Paris', 20, 38, 2.3, []);

let lima = new Stores('Lima', 2, 16, 4.6, []);

storesArray.push(seattle, tokyo, dubai, paris, lima);

renderAll();

//seattle.render();
//console.log(seattle);

//tokyo.render();
//console.log(tokyo);

//dubai.render();
//console.log(dubai);

//paris.render();
//console.log(paris);

//lima.render();
//console.log(lima);