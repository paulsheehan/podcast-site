const LOCAL = 'http://localhost:3000';

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('access localhost', () => {
  it('passes', () => {
    cy.visit(LOCAL);
  })
})