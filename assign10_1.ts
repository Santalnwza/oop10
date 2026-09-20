class BonusCalculator {
    calculateBonus(salary: number): number {
        if (salary < 20000) {
            return salary * 0.05;
        } else if (salary <= 39999) {
            return salary * 0.08;
        } else {
            return salary * 0.10;
        }
    }
}

class TaxCalculator {
    calculateTax(income: number): number {
        if (income <= 20000) {
            return 0;
        } else if (income <= 40000) {
            return income * 0.05;
        } else {
            return income * 0.10;
        }
    }
}

class Employee {
    name: string;
    basicSalary: number;
    bonusCalculator: BonusCalculator;
    taxCalculator: TaxCalculator;

    constructor(name: string, basicSalary: number) {
        this.name = name;
        this.basicSalary = basicSalary;
        this.bonusCalculator = new BonusCalculator();
        this.taxCalculator = new TaxCalculator();
    }

    calculateGrossSalary(): number {
        const bonus = this.bonusCalculator.calculateBonus(this.basicSalary);
        return this.basicSalary + bonus;
    }

    calculateNetSalary(): number {
        const bonus = this.bonusCalculator.calculateBonus(this.basicSalary);
        const grossSalary = this.calculateGrossSalary();
        const tax = this.taxCalculator.calculateTax(grossSalary);
        const netSalary = grossSalary - tax;

        console.log(`Basic Salary of ${this.name}: $ ${this.basicSalary}`);
        console.log(`Bonus: $ ${bonus}`);
        console.log(`Gross Salary: $ ${grossSalary}`);
        console.log(`Tax: $ ${tax}`);
        console.log(`Net Salary: $ ${netSalary}`);
        console.log('----------------------------');

        return netSalary;
    }
}

const emp1 = new Employee("Apinya", 30000);
emp1.calculateNetSalary();

const emp2 = new Employee("Somchai", 50000);
emp2.calculateNetSalary();