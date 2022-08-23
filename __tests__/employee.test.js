//create test scripts
const Employee = require('../index.js');


describe('Employee', () => {
    it('should be a function', () => {
        expect(typeof Employee).toBe('function');
    }),
    it('should be an instance of Employee', () => {
        const employee = new Employee();
        expect(employee instanceof Employee).toBe(true);
    }),
    it('should have a manager property', () => {
        const employee = new Employee();
        expect(employee.manager).toBeDefined();
    }),
    it('should have a engineer property', () => {
        const employee = new Employee();
        expect(employee.engineer).toBeDefined();
    }),
    it('should have a intern property', () => {
        const employee = new Employee();
        expect(employee.intern).toBeDefined();
    }),
    it('should have a start function', () => {
        const employee = new Employee();
        expect(typeof employee.start).toBe('function');
    }),
    it('should have a enter function', () => {
        const employee = new Employee();
        expect(typeof employee.enter).toBe('function');
    }),
    it('should have a quit function', () => {
        const employee = new Employee();
        expect(typeof employee.quit).toBe('function');
    })
})

// create test scripts

