describe('app', () => {
  it('shows home page', () => {
    cy.visit('/');

    cy.findByText(/^i\'m kyle pfromer$/i).should('exist');
  });
});
