/**
 * @purpose Visitor Design Pattern
 * @author {Rahul Ranjan}
 * @param {Name of employee} name 
 * @param {salary of employee} salary 
 * @param {vacation of employee} vacation 
 * @Date 11-oct-2019
 */

var Employee = (name, salary, vacation) =>{
    console.log(name, salary, vacation);
    
    var self = this;
    this.accept = (visitor)=> {
        visitor.visit(self);
    };
    this.getName = ()=> {
        return name;
    };
    this.getSalary = ()=> {
        return salary;
    };
    this.setSalary =  (sal)=> {
        salary = sal;
    }
    this.getVacation = () => {
        return vacation;
    };
    this.setVacation = (vac) => {
        vacation = vac;
    };
};
var extrasalary = () => {
    this.visit =  (emp) =>{
        emp.setSalary(emp.getSalary() * 1.1);
    };
};
var extravacation = () => {
    this.visit = (emp)=> {
        emp.setVacation(emp.getVacation() + 2);
    };
};
var log = (() => {
    var log = " ";
    return {
        add: (msg) => { log += msg + "\n"; },
        show: () => { console.log(log); log = " "; }
    }
})();
 var run=()=> {
    var Employees = new Employee("Rahul", 10000, 10);
    var visitorSalary = new extrasalary();
    var visitorVacation = new extravacation();
    var len = Employees.length;
    for (let i = 0; i < len; i++) {
        var emp = Employees[i];
        emp.accept(visitorSalary);
        emp.accept(visitorVacation);
        log.add(emp.getName() + " :$ " + emp.getSalary() + " add " + emp.getVacation() + " vacation Day ");
    }
    log.show();
}
run();

/**
 * Note :  it offers the ability to add and remove methods at runtime
 */
