// Solution : Pass Tests Below

const a = '0';

describe('Tests', () => {
    it('test', () => {
        Test.assertEquals(a == false, true, `a != false`);
        Test.assertEquals(!a == false, true, `!a != false`);
        Test.assertEquals(a == !a, true, `a != !a`);
    });
});
