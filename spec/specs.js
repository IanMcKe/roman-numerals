describe('romanNumerals', function() {
    it('if 1 is entered it returns I', function() {
        expect(romanNumerals(1)).to.equal("I");
    });

    it('if 1000 is entered M is returned', function() {
        expect(romanNumerals(1000)).to.equal("M");
    });

    it('if 3000 is entered MMM is returned', function() {
        expect(romanNumerals(3000)).to.equal("MMM")
    });

    it('if 999 is entered CMXCIX is returned', function() {
        expect(romanNumerals(999)).to.equal("CMXCIX");
    });
});
