`use strict`

// **** Global Variables ****
// *** STEP 1: Grab the window into the DOM ***
let storeSection = document.getElementById('store-profiles');

console.dir(storeSection);

// **** Helper Functions or Utilities ****

// **** HELPFUL START FOR LAB ****
// !!! HELPFUL FOR LAB

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
    for (let hour = 6; hour <= 19; hour++) {
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
    seattleSection.appendChild(articleElement);

    let seattleHeading = document.createElement('h2');
    seattleHeading.innerText = this.name;
    articleElement.appendChild(seattleHeading);

    let seattleUL = document.createElement('ul');
    articleElement.appendChild(seattleUL);

    this.salesData.forEach((sales) => {
      let salesLI = document.createElement('li');
      salesLI.innerText = sales;
      salesList.appendChild(salesLI);
    });
    
    let totalCookies = document.createElement('p');
    totalCookies.innerText = `Total: ${this.calculateTotalCookies()} cookies`;
    locationArticle.appendChild(totalCookies);
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
    for (let hour = 6; hour <= 19; hour++) {
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

    salesDataElement.appendChild(articleElement);

    let locationHeading = document.createElement('h2');
    locationHeading.innerText = this.name;
    articleElement.appendChild(locationHeading);

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
    for (let hour = 6; hour <= 19; hour++) {
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
  
      salesDataElement.appendChild(articleElement);
  
      let locationHeading = document.createElement('h2');
      locationHeading.innerText = this.name;
      articleElement.appendChild(locationHeading);
  
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
    for (let hour = 6; hour <= 19; hour++) {
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
  
      salesDataElement.appendChild(articleElement);
  
      let locationHeading = document.createElement('h2');
      locationHeading.innerText = this.name;
      articleElement.appendChild(locationHeading);
  
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
    for (let hour = 6; hour <= 19; hour++) {
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
  
      salesDataElement.appendChild(articleElement);
  
      let locationHeading = document.createElement('h2');
      locationHeading.innerText = this.name;
      articleElement.appendChild(locationHeading);
  
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

seattle.render();
console.log(seattle);

tokyo.render();
console.log(tokyo);

dubai.render();
console.log(dubai);

paris.render();
console.log(paris);

lima.render();
console.log(lima);