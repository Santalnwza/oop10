class Patient {
    constructor(public id: number, public name: string, public age: number) {}
    showInfo(): void {
        console.log(`ID: ${this.id}, Name: ${this.name}, Age: ${this.age}`);
    }
}

class Doctor {
    constructor(public doctorId: number, public name: string, public specialty: string) {}
    
    showInfo(): void {
        console.log(`หมอ: ${this.name} ความเชี่ยวชาญ: ${this.specialty}`);
    }

    examine(patient: Patient): void {
        console.log(`หมอ: ${this.name} ตรวจผู้ป่วย: ${this.specialty}`);
        console.log(` ID: ${patient.id}, Name: ${patient.name}, Age: ${patient.age}`);
    }

    diagnose(pt: Patient, dis: string): void {
        console.log(`หมอ: ${this.name} วินิจฉัยผู้ป่วย ID: ${pt.id}, Name: ${pt.name}, Age: ${pt.age} เป็นโรค ${dis}`);
    }

    prescribeMedicine(pt: Patient, med: string): void {
        console.log(`หมอ: ${this.name} จ่ายยา ${med} ให้ผู้ป่วย ID: ${pt.id}, Name: ${pt.name}, Age: ${pt.age}`);
    }

    calculateTreatmentCost(pt: Patient, fee: number, medFee: number): void {
        const totalCost = fee + medFee;
        console.log(`หมอ: ${this.name} คำนวณค่ารักษาผู้ป่วย ID: ${pt.id}, Name: ${pt.name}, Age: ${pt.age}`);
        console.log(`ราคารวม: ${totalCost} บาท`);
    }
}

const pat1 = new Patient(101, "Sam", 30);
const pat2 = new Patient(102, "Dom", 25);
const doc1 = new Doctor(1, "John", "โรคหัวใจ");
const doc2 = new Doctor(2, "Smith", "ระบบประสาท");
doc1.examine(pat1);
doc1.examine(pat2);
doc2.examine(pat1);
doc1.diagnose(pat1, "หัวใจ");
doc2.diagnose(pat2, "ซึมเศร้า");
doc1.prescribeMedicine(pat1, "ยาลดความดัน");
doc2.prescribeMedicine(pat2, "ยาคลายเครียด");
doc1.calculateTreatmentCost(pat1, 500, 200);
doc2.calculateTreatmentCost(pat2, 300, 150);