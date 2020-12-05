describe('home', () => {
  it('shows landing', () => {
    cy.visit('/');
    cy.findAllByText(/kyle pfromer/i).should('exist');
  });

  it('shows experience items', () => {
    cy.visit('/');
    cy.findAllByText(/Google/i).should('exist');
    cy.findByText(
      /Worked on integrating Google Cloud AI's Platform Optimizer Product with JupyterLab/i,
    ).should('exist');
  });

  it('shows resume button', () => {
    cy.visit('/');
    cy.findByText(/download resume/i)
      .should('have.attr', 'href')
      .and(
        'equal',
        'https://drive.google.com/file/d/1KUxBSQwj87LBoHmsuRAyPgfN6F6oo5kR/view?usp=sharing',
      );
  });

  it('shows projects and links to github');
  it('shows blog posts');
});
