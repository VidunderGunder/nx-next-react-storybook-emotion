describe('phormix: Phormix component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=phormix--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to phormix!');
    });
});
