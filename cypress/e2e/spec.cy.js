describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    // cy.viewport('iphone-xr')
  })

  it('Verificar exibido', () => {
    cy.get("[aria-label='title-head']")
    cy.get("[aria-label='title-head']").should("contain", "Good morning")
  })

  it('Verificar se tem uma lista com playlists exibidas', () => {
    cy.wait(2000)
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  })

  it('Clicar em uma opção de playlist e listar suas musicas', () => {
    cy.get("[aria-label='playlist-item']").first().click()
    cy.wait(1000)
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  })

  it('Clicar em uma opção de playlist e listar suas musicas', () => {
    cy.get("[aria-label='music-item']").first().click()
    cy.scrollTo("top")
  })
})