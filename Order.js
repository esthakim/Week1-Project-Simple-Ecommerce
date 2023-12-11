import { formatter } from "./Formatter.js";

// Kelas Order
export class Order {
  constructor(orderId) {
    this.orderId = orderId;
    this.items = [];
    this.totalAmount = 0;
  }
  // Method digunakan untuk membuat pesanan baru
  createOrder(cart) {
    this.items = cart.items.slice();
    this.totalAmount = cart.calculateTotal();
  }
  // Method untuk menampilkan informasi pesanan
  displayOrderDetails() {
    console.log(`ID Pesanan: ${this.orderId}`);
    console.log("Detail Pesanan:");
    this.items.forEach((item) => {
      console.log(`- ${item.product.productName} (Qty: ${item.quantity})`);
    });
    console.log("-------------------------------------------------------");
    console.log(`Total Harga: ${formatter(this.totalAmount)}`);
    console.log("-------------------------------------------------------");
  }
}
