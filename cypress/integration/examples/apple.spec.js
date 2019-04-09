context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://www.apple.com/in/')
  })

it('Navigate through Apple Mac', () => {
  cy.get('nav').contains('Macbook').click()
})

it('Navigate through Apple iPad', () => {
  cy.get('nav').contains('iPad').click()
})

it('Navigate through Apple iPhone', () => {
  cy.get('nav').contains('iPhone').click()
})

it('Navigate through Apple Watch', () => {
  cy.get('nav').contains('Watch').click()
})

it('Navigate through Apple TV', () => {
  cy.get('nav').contains('TV').click()
})

it('Navigate through Apple Music', () => {
  cy.get('nav').contains('Music').click()
})

it('Navigate through Apple Support', () => {
  cy.get('nav').contains('Support').click()
  cy.get('#as-search-input').type('reset password').type('{downarrow}{downarrow}{downarrow}{enter}')
  cy.get('#filter-view-button').click().get('#searchFilter-products').contains('iPhone').click()
  cy.get('#searchFilter-products').contains('iTunes').click().get('h2.SearchResult-heading').contains('Change your Apple ID password').click()
})

it('Change the viewport', () => {
  cy.viewport('iphone-6')
  cy.get('#ac-gn-firstfocus-small').click()
})
})
