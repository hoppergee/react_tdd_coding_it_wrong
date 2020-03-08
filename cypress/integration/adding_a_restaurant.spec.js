describe('add a restaurant', () => {
  it('displays the restaurant in the list', () => {
    const initialRestaurantName = 'Spaghetti Place';
    const restaurantName = "Sushi Place";

    setupInitialRestaurant(initialRestaurantName);

    cy.visit('http://localhost:1234');

    restaurantsFromServerDisplayAtStart(initialRestaurantName);
    modalNotShownAtTheStart();
    modalCanBeCancelled();
    modalDisplaysValidationErrors();
    modalClearsOutValidationErrorsWhenClosed();
    modalAllowsAddingRestaurant(restaurantName);
  });

  function setupInitialRestaurant(restaurantName) {
    cy.server();
    cy.route({
      method: 'GET',
      url: '/restaurants',
      response: {
        data: [
          {
            type: 'restaurants',
            id: '1',
            attributes: {
              name: restaurantName
            },
          },
        ],
      },
    });
  }

  function restaurantsFromServerDisplayAtStart(restaurantName) {
    cy.contains(restaurantName)
  }

  function modalNotShownAtTheStart() {
    cy.get('[data-testid="newRestaurantName"]').should('not.be.visible');
  }

  function modalCanBeCancelled() {
    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').should('not.be.visible');
  }

  function modalDisplaysValidationErrors() {
    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should("be.visible");

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();
  }

  function modalClearsOutValidationErrorsWhenClosed() {
    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();

    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('label[for="restaurantName"][data-error="Cannot be blank"]')
      .should("not.be.visible");

    cy.get('[data-testid="cancelAddRestaurantButton"]').click();
  }

  function modalAllowsAddingRestaurant(restaurantName) {
    cy.get('[data-test="addRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').type(restaurantName);

    cy.get('[data-testid="saveNewRestaurantButton"]').click();

    cy.get('[data-testid="newRestaurantName"]').should('not.be.visible');

    cy.contains(restaurantName);
  }
});
