//SNIP6. Refactor this code.
// With all the scenarios in mind simplify
// what all possible scenarios or input can you think of
function adminUser(user) {
    if (user) {
        if (user.role == 'admin') {
            if (user.manager == 'manager') {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}
describe('adminUser', () => {
    it('should return true if user is admin and manager',  () => {
        const user = { role: 'admin', manager: 'manager'}
        expect(adminUser(user)).toEqual(true);
    });
    
    it('should return false if user is present but not admin', () => {
        expect(adminUser(null)).toEqual(false);
    })
});





















// describe('adminUser', () => {
//     it('should return false if not adminUse',  () => {
//     });
// });
