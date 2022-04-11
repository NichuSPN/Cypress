describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
      cy.visit('https://demo.swym.it/collections/bags')
      cy.get('#CollectionSection > div.grid-uniform.grid-link__container > div:nth-child(2) > div > a').click()
      cy.get('#product_form_6575318008006 > div.swym-button-bar.swym-wishlist-button-bar.swym-inject > div > button').click()
      cy.get('#swym-component-container > div.swym-wishlist-modal-container.swym-ui-component.swym-is-safari > div > div > div.swym-modal-content > div > div.swym-action-btns > button.swym-add-to-list-btn.swym-button.swym-button-1.swym-bg-2.swym-color-4').click()
      cy.get('#notepad-anchor-title').click()
      cy.get('#swym-component-container > div.swym-wishlist-modal-container.swym-ui-component.swym-is-safari > div > div > div.swym-modal-content > div.swym-wishlist-container-content > div > div > button').click()
      cy.get('#swym-component-container > div.swym-wishlist-modal-container.swym-ui-component.swym-is-safari > div > div > div.swym-modal-content > div.swym-wishlist-container-content > div > div.swym-wishlist-detail-content > div.swym-wishlist-grid > a').contains('Square Logo Bag')
  })
})