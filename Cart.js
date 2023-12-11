import { formatter } from "./Formatter.js";

// Kelas Cart
export class Cart {
  constructor(cartId) {
    this.cartId = cartId;
    this.items = [];
  }
  // Method untuk menambahkan produk kedalam keranjang
  addItem(product, quantity) {
    this.items.push({ product, quantity });
  }
  // Method untuk menghapus produk dari keranjang
  removeItem(product) {
    this.items = this.items.filter((item) => item.product !== product);
  }
  // Method untuk menampilkan isi keranjang
  viewCart() {
    console.log(`ID Keranjang: ${this.cartId}`);
    console.log("Produk didalam keranjang:");
    this.items.forEach((item) => {
      console.log(`- ${item.product.productName} (Qty: ${item.quantity})`);
    });

    const totalAmount = this.calculateTotal();
    console.log("-------------------------------------------------------");
    console.log(`Total harga: ${formatter(totalAmount)}`);
    console.log("-------------------------------------------------------");
  }

  // Method untuk menghitung jumlah harga dalam keranjang (cart)
  calculateTotal() {
    return this.items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  }
}
