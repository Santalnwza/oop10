class Product{
    constructor(public name:string, public price: number, public quantity: number){}
    getSubtotal(): number{
        return this.price*this.quantity;
    }
}

class Order{
    private products: Product[] = [];
    addProduct(product: Product): void{
        this.products.push(product);
        console.log(`${product.name}: ${product.price} x ${product.quantity} ชิ้น = ${product.getSubtotal()} บาท`);
    }
    calculatetotal(): number {
        let total = 0;
        for(const p of this.products){
            total +=p.getSubtotal();
        }
        return total;
    }
    calculateDiscount(percent: number): number{
        return this.calculatetotal() * percent / 100;
    }
    calculateNetTotal(percent :number): number{
        return this.calculatetotal() * (1 - percent / 100);
}
}


const order = new Order();
const prod1 = new Product("Laptop",25000,2);
const prod2 = new Product("Mouse",200,100);
const prod3 = new Product("Scanner",12000,3);
order.addProduct(prod1);
order.addProduct(prod2);
order.addProduct(prod3);
const disc =10;
console.log(`รวมเงินทั้งหมด ${order.calculatetotal()}บาท`)
console.log(`ส่วนลด ${disc} % เป็นเงิน ${order.calculateDiscount(disc)} บาท`);
console.log(`ชำระเงินสุทธิ ${order.calculateNetTotal(disc)} บาท`);