class Course {
  code: string;
  name: string;
  credit: number;

  constructor(code: string, name: string, credit: number) {
    this.code = code;
    this.name = name;
    this.credit = credit;
  }
}

class Student {
  studentId: string;
  name: string;

  constructor(studentId: string, name: string) {
    this.studentId = studentId;
    this.name = name;
  }
}

class Teacher {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  calculateGrade(score: number): string {
    if (score >= 80) return "A";
    if (score >= 70) return "B";
    if (score >= 60) return "C";
    if (score >= 50) return "D";
    return "F";
  }

  evaluate(student: Student, course: Course, score: number): void {
    const grade = this.calculateGrade(score);
    console.log(`Teacher: ${this.name}`);
    console.log(`Student: ${student.studentId} ${student.name}`);
    console.log(`Course: ${course.code} - ${course.name}`);
    console.log(`Score: ${score}`);
    console.log(`Grade: ${grade}`);
  }
}

const course1 = new Course("CS101", "Intro to Programming", 3);
const student1 = new Student("651001", "Anan");
const teacher1 = new Teacher("Dr. Smith");

teacher1.evaluate(student1, course1, 85);