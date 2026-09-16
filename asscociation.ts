class Student{
    constructor(private name: string , private major: string){}
    getStudentInfo(): string{
            return `นักศึกษา ชิ้อ ${this.name} สาขา ${this.major}`;
        }
    
}

class Teachaer{
    constructor(private name: string,private faculty: string){}
    teach(student: Student): void{
        console.log(`อาจารย์ ${this.name} คณะ ${this.faculty} สอน ${student.getStudentInfo()}`);
    }
}

const s1 = new Student("prayut",";วิทยาการคอมพิวเตอร์");
const s2 = new Student("dom","วิศวกรมมซอฟแวร์");
const t1 = new Teachaer("dang","วิทยาศาสตร์และเทคโนโลยี");
const t3 = new Teachaer("nong","วิทยาการจัดการ");
t1.teach(s1);
t1.teach(s2);
t3.teach(s1);
t3.teach(s2);
