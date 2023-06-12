describe('abrir navegador', () => {
    beforeEach(() => {
        cy.visit('https://www.mercadolivre.com.br/');
        cy.wait(2000);
    });

    it('qualquer coisa', () => {

    });

    it.only('outra coisa', () => {
        cy.get('body').type('vestido');
        cy.get('.nav-icon-search').click();
    });
});



///beforeeach é para executar primeiro a informação da pagina 
////como o site é pesado ou em promoçao colocar o wait ou em cada bloco it ou no before each 