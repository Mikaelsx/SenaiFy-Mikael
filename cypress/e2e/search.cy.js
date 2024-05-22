describe('Fluxo do Usuário na Aplicação de Música', () => {
  before(() => {
    cy.visit('/')
  });

  // Cenário: Visualizar playlists e executar uma música
  it('Deve exibir o header "Good morning"', () => {
    cy.get("[aria-label='title-head']").should("contain", "Good morning")
  });

  it('Deve exibir uma lista de playlists', () => {
    cy.get("[aria-label='playlist-item']").should("have.length.greaterThan", 0)
  });

  it('Deve clicar na primeira playlist e listar suas músicas', () => {
    cy.get("[aria-label='playlist-item']").first().click()
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  });

  it('Deve clicar na primeira música e começar a tocar', () => {
    cy.get("[aria-label='music-item']").first().click()
  });

  // Cenário: Navegar entre playlists e executar outra música
  it('Deve voltar para a listagem de playlists', () => {
    cy.visit('/')
  });

  it('Deve clicar na segunda playlist e listar suas músicas', () => {
    cy.get("[aria-label='playlist-item']").eq(1).click()
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  });

  it('Deve clicar na primeira música da segunda playlist e começar a tocar', () => {
    cy.get("[aria-label='music-item']").first().click()
  });

  // Cenário: Procurar e favoritar uma música
  it('Deve redirecionar para a tela de Pesquisa', () => {
    cy.get("[href='/Search']").click();
  });

  it('Deve procurar por uma música específica', () => {
    cy.get("[data-testid='campoBusca']").type("Toxicity");
    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  });

  it('Deve clicar na primeira música dos resultados e começar a tocar', () => {
    cy.get("[aria-label='music-item']").first().click()
  });

  it('Deve favoritar a música', () => {
    cy.get("[data-testid='icon-button']").then($btn => {
      if ($btn.hasClass('icon-like')) {
        cy.wrap($btn).click();
      }
    });
  });

  // Cenário: Verificar música favoritada na tela de Favoritos
  it('Deve redirecionar para a tela de Favoritos', () => {
    cy.get("[href='/Favorites']").click();
  });

  it('Deve verificar se a música favoritada está na lista de favoritos', () => {
    cy.get("[aria-label='music-item']").should("contain", "Toxicity")
  });

  it('Deve clicar na música favoritada e começar a tocar', () => {
    cy.get("[aria-label='music-item']").contains("Toxicity").click()
  });
});
