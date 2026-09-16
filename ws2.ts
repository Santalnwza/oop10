class CPU {
  constructor(public brand: string, public cores: number) {}

  process(): void {
    console.log(`ซีพียู ${this.brand} จำนวน ${this.cores} คอร์ กำลังประมวลผล`);
  }

  showInfo(): void {
    console.log(`ข้อมูลซีพียู: แบรนด์  ${this.brand}, จำนวนคอร์  ${this.cores}`);
  }
}

class RAM {
  constructor(public capacity: number) {}

  load(): void {
    console.log(`แรมขนาด ${this.capacity} GB กำลังโหลดข้อมูล`);
  }

  showInfo(): void {
    console.log(`ข้อมูลแรม: ความจุ  ${this.capacity} GB`);
  }
}

class addStorage {
  constructor(public capacity: number, public type: string) {}

  readData(): void {
    console.log(`หน่วยความจำแบบ ${this.type} ขนาด ${this.capacity} GB กำลังอ่านข้อมูล`);
  }

  showInfo(): void {
    console.log(`ข้อมูลหน่วยความจำ: ประเภท  ${this.type}, ความจุ  ${this.capacity} GB`);
  }
}

class Computer {
  private cpu: CPU;
  private ram: RAM;
  private storage: addStorage;

  constructor(
    cpuBrand: string,
    cpuCores: number,
    ramCapacity: number,
    storageCapacity: number,
    storageType: string
  ) {
    this.cpu = new CPU(cpuBrand, cpuCores);
    this.ram = new RAM(ramCapacity);
    this.storage = new addStorage(storageCapacity, storageType);
  }

  boot(): void {
    this.cpu.process();
    this.ram.load();
    this.storage.readData();
    console.log("คอมพิวเตอร์พร้อมใช้งานแล้ว!");
  }

  showComputerInfo(): void {
    console.log("ข้อมูลคอมพิวเตอร์:");
    this.cpu.showInfo();
    this.ram.showInfo();
    this.storage.showInfo();
  }
}

const computer1 = new Computer("Intel", 8, 16, 512, "SSD");
computer1.boot();
computer1.showComputerInfo();

const computer2 = new Computer("AMD", 16, 32, 1000, "NVMe SSD");
computer2.boot();
computer2.showComputerInfo();