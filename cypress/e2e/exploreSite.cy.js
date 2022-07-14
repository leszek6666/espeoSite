describe("empty spec", () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.visit("/")
  })
  it("passes", () => {
    cy.visit("https://info.espeo.eu/matrix-calculator-list")

    cy.get('[href="/matrix-calculator/qa"]').click()
    cy.get(
      '[js-matrixcalc-set-preset="regular-3"] > .matrixcalc-presets__item-inner > .matrixcalc__preset-item-text'
    ).click()
    cy.get(
      ':nth-child(2) > .matrixcalc-summary__salary-amount-text > [js-matrix-result-regular-3="-"]'
    ).should("have.text", "12 960")

    cy.get(
      '[js-matrixcalc-skill-block="tech-1"] > .matrixcalc-skill__body > .matrixcalc-skill__slider > .generic-slider > .generic-slider__drag-area > .generic-slider__steps-indicators > :nth-child(2)'
    ).click()
  })
})
