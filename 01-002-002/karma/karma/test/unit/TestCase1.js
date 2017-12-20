describe("A suite", function() {
    it("contains spec with an expectation", function() {
        console.log("This is msg from log...");
        expect(true).toBe(true);
    });
});

describe("A suite of basic functions", function() {
    it("reverse word", function() {
        expect("DCBA").toEqual(reverse("ABCD"));
        expect("damo").toEqual(reverse("omad1"));
    });
});