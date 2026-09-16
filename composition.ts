class Engine {
  constructor(public type: string) {}

  start(): void {
    console.log(`เครื่องยนต์ ${this.type} สตาร์ทแล้ว`);
  }

  stop(): void {
    console.log(`เครื่องยนต์ ${this.type} ดับเครื่องแล้ว`);
  }
}

class Battery {
  constructor(public capacity: number) {}

  showStatus(): void {
    console.log(`ความจุแบตเตอรี่คือ ${this.capacity} mAh`);
  }

  charge(): void {
    console.log(`กำลังชาร์จแบตเตอรี่ ${this.capacity} mAh`);
    this.capacity = 100;
    console.log(`ชาร์จแบตเตอรี่เต็มแล้ว ${this.capacity} mAh`);
  }
}

class Car {
  private engine: Engine;
  private battery: Battery;

  constructor(engineType: string, batteryCapacity: number) {
    this.engine = new Engine(engineType);
    this.battery = new Battery(batteryCapacity);
  }

  startCar(): void {
    this.engine.start();
  }

  stopCar(): void {
    this.engine.stop();
  }

  showCarInfo(): void {
    console.log(`ข้อมูลรถยนต์: ประเภทเครื่องยนต์:`, this.engine);
    console.log(`สถานะแบตเตอรี่: ความจุคือ ${this.battery.capacity} mAh`);
  }

  chargeBattery(): void {
    this.battery.charge();
  }
}

const car1 = new Car("V6", 20);
car1.startCar();
car1.showCarInfo();
car1.chargeBattery();
car1.stopCar();

