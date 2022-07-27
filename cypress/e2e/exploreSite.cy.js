describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("should calculate regular sallary", () => {
    cy.visit("https://info.espeo.eu/matrix-calculator-list")

    cy.get(
      ".is-current > .matrixcalc-presets__item-inner > .matrixcalc__preset-item-text"
    ).click()
    cy.get(
      ':nth-child(2) > .matrixcalc-summary__salary-amount-text > [js-matrix-result-regular-3="-"]'
    ).should("have.text", "12 960")

    cy.get(
      '[js-matrixcalc-skill-block="tech-1"] > .matrixcalc-skill__body > .matrixcalc-skill__slider > .generic-slider > .generic-slider__drag-area > .generic-slider__steps-indicators > :nth-child(2)'
    ).click()
    cy.get(
      '[js-matrixcalc-skill-block="soft-4"] > .matrixcalc-skill__body > .matrixcalc-skill__slider > .generic-slider > .generic-slider__drag-area > .generic-slider__steps-indicators > :nth-child(3)'
    ).click()
  })

  it("should junior salary calculate", () => {
    cy.visit("https://info.espeo.eu/matrix-calculator-list")

    cy.get('[href="/matrix-calculator/qa"]').click()
    cy.get(
      '[js-matrixcalc-set-preset="junior-1"] > .matrixcalc-presets__item-inner > .matrixcalc__preset-item-text'
    ).click()
    cy.get(
      ':nth-child(2) > .matrixcalc-summary__salary-amount-text > [js-matrix-result-junior-1="-"]'
    ).should("have.text", "4 440")

    cy.get(
      '[js-matrixcalc-skill-block="tech-1"] > .matrixcalc-skill__body > .matrixcalc-skill__slider > .generic-slider > .generic-slider__drag-area > .generic-slider__steps-indicators > :nth-child(2)'
    ).click()
    cy.get(
      '[js-matrixcalc-skill-block="soft-4"] > .matrixcalc-skill__body > .matrixcalc-skill__slider > .generic-slider > .generic-slider__drag-area > .generic-slider__steps-indicators > :nth-child(3)'
    ).click()
  })
  it.only("should contact with espeo", () => {
    cy.visit("https://espeo.eu/contact/")

    cy.get(".optin > .cmplz-buttons > .cmplz-accept").click()
    cy.scrollTo(0, 50)
    //cy.get(".hamburger-box").click()
    //cy.get("#email-2daf1607-fb43-4e11-8731-0419a4fd9855").type("fasdf")
  })
})
