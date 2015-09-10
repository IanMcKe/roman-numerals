describe('romanConvert', function() {
    it('if 1 is entered it returns I', function() {
        expect(romanConvert(1)).to.equal("I");
    });

    it('if 1000 is entered M is returned', function() {
        expect(romanConvert(1000)).to.equal("M");
    });

    it('if 3000 is entered MMM is returned', function() {
        expect(romanConvert(3000)).to.equal("MMM")
    });

    it('if 999 is entered CMXCIX is returned', function() {
        expect(romanConvert(999)).to.equal("CMXCIX");
    });

    it('if 0 is entered show error message', function() {
        expect(romanConvert(0)).to.equal("The Romans don't believe in your number!");
    })
});
