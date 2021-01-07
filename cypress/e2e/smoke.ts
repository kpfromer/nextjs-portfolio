describe('app', () => {
  it('shows home page', () => {
    cy.visit('/');

    cy.findByText(/home/i).should('exist');
  });
});
