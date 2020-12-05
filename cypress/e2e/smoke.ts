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

  it('shows projects', () => {
    cy.visit('/');
    cy.get('h3')
      .contains(/nestjs-typegoose/i)
      .should('exist');
    cy.get('h3')
      .contains(/nestjs-typegoose/i)
      .parent()
      .find('a')
      .should('have.attr', 'href')
      .and('equal', 'https://github.com/kpfromer/nestjs-typegoose');
  });

  it('shows blog posts', () => {
    cy.visit('/');
    cy.findByText(/First Blog Post/i).click();
    cy.findByText(
      /This is my first blog post. I am excited to see where this road leads. I will be jotting down my thoughts about tech, hiking, biking, and college./i,
    ).should('exist');
  });
});
