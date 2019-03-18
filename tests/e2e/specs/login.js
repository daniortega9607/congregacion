describe('Login to Application', () => {
  it('Visits the login route', () => {
    cy.visit('/login')
  })
  it('Set invalid email', () => {
    const email = cy.get('#email')
    email.type('daniel')
    cy.contains('Debe ingresar un e-mail válido')
  })
  it('Set null email', () => {
    const email = cy.get('#email')
    email.clear('')
    cy.contains('Debe ingresar un e-mail')
  })
  it('Set correct email', () => {
    const email = cy.get('#email')
    email.type('dani.ortega9607@gmail.com')
  })
  it('Set null password', () => {
    const password = cy.get('#password')
    password.type('dsads')
    password.clear('')
    cy.contains('Debe ingresar una contraseña')
  })
  it('Set correct password', () => {
    const password = cy.get('#password')
    password.type('Dani030796?')
  })
  it('Navigates to home', () => {
    cy.contains('Login').click()
    cy.url().should('not.include', '/login')
  })
})
