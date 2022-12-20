
/* Login */

describe('login customer', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:8000/')
    cy.get('#navbarSupportedContent > .btn').click();
    cy.get('#username').type('test');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click();
  })
})

describe('login admin', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:8000/')
    cy.get('#navbarSupportedContent > .btn').click();
    cy.get('#username').type('admin');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click();
  })
})

describe('login launderer', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:8000/')
    cy.get('#navbarSupportedContent > .btn').click();
    cy.get('#username').type('launderertest');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click();
  })
})

describe('login with invalid data', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:8000/')
    cy.get('#navbarSupportedContent > .btn').click();
    cy.get('#username').type('test');
    cy.get('#password').type('1');
    cy.get('form > .btn').click();
  })
})

/* Order */

describe('order add item', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:8000/')
    cy.get('#navbarSupportedContent > .btn').click();
    cy.get('#username').type('test');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click();
    cy.get(':nth-child(3) > .card > .row > .card-body > .btn').click();
    cy.get('.btn-lg').click();
    cy.get('.col-sm-8 > .pt-2 > .h7').click();
    cy.get(':nth-child(4) > .col-sm > .form-control').select("Wash");
    cy.get(':nth-child(5) > :nth-child(1) > .form-control').select("Dress");
    cy.get(':nth-child(2) > .form-control').type("3");
    cy.get(':nth-child(6) > :nth-child(2) > .btn').click();
  })
})

describe('order add item with invalid data', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:8000/')
    cy.get('#navbarSupportedContent > .btn').click();
    cy.get('#username').type('test');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click();
    cy.get(':nth-child(3) > .card > .row > .card-body > .btn').click();
    cy.get('.btn-lg').click();
    cy.get('.col-sm-8 > .pt-2 > .h7').click();
    cy.get(':nth-child(4) > .col-sm > .form-control').select("Wash");
    cy.get(':nth-child(5) > :nth-child(1) > .form-control').select("Dress");
    cy.get(':nth-child(2) > .form-control').type("tiga");
    cy.get(':nth-child(6) > :nth-child(2) > .btn').click();
  })
})

describe('order add devliery address', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:8000/')
    cy.get('#navbarSupportedContent > .btn').click();
    cy.get('#username').type('test');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click();
    cy.get(':nth-child(3) > .card > .row > .card-body > .btn').click();
    cy.get('.btn-lg').click();
    cy.get('.col-sm-4 > .d-sm-flex > .h7').click();
    cy.get(':nth-child(4) > .col-sm > .form-control').type("Jl. Mawar No. 4, Malang");
    cy.get(':nth-child(6) > :nth-child(2) > .btn').click();
  })
})

/* Checkout */

describe('checkout', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:8000/')
    cy.get('#navbarSupportedContent > .btn').click();
    cy.get('#username').type('test');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click();
    cy.get(':nth-child(3) > .card > .row > .card-body > .btn').click();
    cy.get('.btn-lg').click();
    cy.get('.col-sm-8 > .pt-2 > .h7').click();
    cy.get(':nth-child(4) > .col-sm > .form-control').select("Wash");
    cy.get(':nth-child(5) > :nth-child(1) > .form-control').select("Dress");
    cy.get(':nth-child(2) > .form-control').type("3");
    cy.get(':nth-child(6) > :nth-child(2) > .btn').click();
    cy.get('.col-sm-4 > .d-sm-flex > .h7').click();
    cy.get(':nth-child(4) > .col-sm > .form-control').type("Jl. Mawar No. 4, Malang");
    cy.get(':nth-child(6) > :nth-child(2) > .btn').click();
    cy.get('.col-sm-3 > .btn').click();
    cy.get('#flexRadioDefault1').click();
    cy.get('#flexRadioDefault4').click();
    cy.get('.btn-lg').click();
  })
})

describe('admin change payment status', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:8000/')
    cy.get('#navbarSupportedContent > .btn').click();
    cy.get('#username').type('admin');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click();
    cy.get(':nth-child(3) > .fw-bold').click();
    cy.get('[aria-label="Date: activate to sort column ascending"]').click();
    cy.get('.sorting_asc').click();
    cy.get(':nth-child(1) > :nth-child(9) > .btn').click();
    cy.get(':nth-child(9) > .col-sm > .form-control').select("Ongoing");
    cy.get(':nth-child(10) > :nth-child(2) > .btn').click();
  })
})

describe('launderer update service status', () => {
  it('passes', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:8000/')
    cy.get('#navbarSupportedContent > .btn').click();
    cy.get('#username').type('launderertest');
    cy.get('#password').type('matahariku');
    cy.get('form > .btn').click();
    cy.get(':nth-child(1) > :nth-child(6) > .btn').click();
    cy.get('[aria-label="Servie Status: activate to sort column ascending"]').click();
    cy.get('.sorting_asc').click();
    cy.get(':nth-child(1) > :nth-child(9) > .btn').click();
    cy.get(':nth-child(8) > :nth-child(2) > .form-control').select('Ironing');
    cy.get(':nth-child(9) > :nth-child(2) > .btn').click();
  })
})

