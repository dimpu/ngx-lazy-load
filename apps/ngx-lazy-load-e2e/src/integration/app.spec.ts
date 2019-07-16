import { getGreeting } from '../support/app.po';

describe('ngx-lazy-load', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to ngx-lazy-load!');
  });
});
