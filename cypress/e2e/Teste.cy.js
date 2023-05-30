describe('template spec', () => {
    it('login erroneo', () => {
    cy.visit('https://agenda-manicure.netlify.app/')
    cy.get('[type="text"]').click().type("teste0@gmail.com")
    cy.get('[type="password"]').click().type("123456")
    cy.get('#btn-acessar').click()
    cy.on('window:alert', (t)=>{
      expect(t).to.contains('ERRO AO FAZER O LOGIN')
    })
    
  })  

   it('registro de conta errado', () => {
      cy.visit('https://agenda-manicure.netlify.app/')
      cy.get('#register-link').click()
      cy.get('#email-input').click().type('aa1')
      cy.get('#senha-input').click().type('1')
      cy.get('#btn-cadastrar').click()
      cy.url().should('be.equal', 'https://agenda-manicure.netlify.app/register')
    })  

  /*   it('registro de conta', () => {
      cy.visit('https://agenda-manicure.netlify.app/')
      cy.get('#register-link').click()
      cy.get('#email-input').click().type('testedesafiointegrador@teste.com')
      cy.get('#senha-input').click().type('123456')
      cy.get('#btn-cadastrar').click()
      cy.url().should('be.equal', 'https://agenda-manicure.netlify.app/admin')
    })*/

   it('login correto', () => {
     cy.visit('https://agenda-manicure.netlify.app/')
     cy.get('[type="text"]').click().type("teste1@gmail.com")
     cy.get('[type="password"]').click().type("123456")
     cy.get('#btn-acessar').click()
     cy.url().should('be.equal', 'https://agenda-manicure.netlify.app/admin')
   })  
 

  it('CRUD serviços', () => {
    cy.visit('https://agenda-manicure.netlify.app/')
    cy.get('[type="text"]').click().type("teste1@gmail.com")
    cy.get('[type="password"]').click().type("123456")
    cy.get('#btn-acessar').click()
    cy.wait(2000)

    cy.get('#basic-addon3').click()

    cy.get(':nth-child(1) > .m-1 > #btn-excluir').click()
    cy.get('#funcao-input').click().type('Teste Automatizado 1')
    cy.get('#btn-registrar').click()
    cy.wait(2000)
    cy.get(':nth-child(1) > .m-1 > #btn-editar').click()
    cy.get('#funcao-input').click().clear().type('Teste Automatizado')
    cy.get('#btn-atualizar').click()

    cy.get('#home-link').click()
  })

   it('CRUD TAREFAS', () => {
      cy.visit('https://agenda-manicure.netlify.app/')
      cy.get('[type="text"]').click().type("teste1@gmail.com")
      cy.get('[type="password"]').click().type("123456")
      cy.get('#btn-acessar').click()
  
      cy.get('#cliente-input').click().type('Usuário Teste')
      cy.get('#preco-input').click().type('10')
      cy.get('#servico-select').select([1])
      cy.get('#horario-select').select([4])
      cy.get('#btn-registrar').click()
      cy.wait(3000)
  
      cy.get(':nth-child(1) > #btn-block > #btn-editar').click()
      cy.get('#cliente-input').click().type(' 1')
      cy.get('#preco-input').click().type('50')
      cy.get('#servico-select').select([1])
      cy.get('#horario-select').select([2])
      cy.get('#btn-atualizar').click()
      cy.wait(2000)
      cy.get('#btn-concluir').click()
  
  
      cy.get('#btn-logout').click()
    }) 
 

})