describe("Contact form", () => {
    it("should fill out the form and submit successfully", () => {
      cy.visit("/contact");
      cy.get('input[name="name"]').type("Alvaro Rodriguez-Salas")
      cy.get('input[name="email"]').type("alvaro@gmail.com");
      cy.get('input[name="phone"]').type("123-456-7890");
      cy.get('textarea[name="message"]').type("Hello, this is a test message.");
      cy.get('button[type="submit"]').click();
      cy.url().should("include", "/contact");
      cy.contains("Contact Here");
    });
  
    it("should display an error message if the email format is incorrect", () => {
      cy.visit("/contact");
      cy.get('input[name="email"]').type("invalidemail");
      cy.get('button[type="submit"]').click();
      cy.contains("Please enter a valid email address.");
    });
  
    it("should display an error message if the phone number format is incorrect", () => {
      cy.visit("/contact");
      cy.get('input[name="phone"]').type("123");
      cy.get('button[type="submit"]').click();
      cy.contains("Please enter a valid phone number.");
    });
  
    it("should display an error message if the message field is empty", () => {
      cy.visit("/contact");
      cy.get('button[type="submit"]').click();
      cy.contains("Please enter a message.");
    });
  });
  