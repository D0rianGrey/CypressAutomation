describe('DB', () => {
    it('Database Interaction', () => {
        cy.task("queryDb", "select * from Persons").then(function (result) {
            console.log(result);
        });
    });
});
