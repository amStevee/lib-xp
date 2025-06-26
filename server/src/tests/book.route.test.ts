describe('String comparison', () => {
    it('should compare two equal strings', () => {
        const str1 = 'hello';
        const str2 = 'hello';
        expect(str1).toBe(str2);
    });

    it('should compare two different strings', () => {
        const str1 = 'hello';
        const str2 = 'world';
        expect(str1).not.toBe(str2);
    });
});