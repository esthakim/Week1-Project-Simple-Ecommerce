import { formatter } from "./Formatter.js";

// Kelas produk
export class Product {
  constructor(productId, productName, price, description) {
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.description = description;
    this.categories = []; // tipe data array untuk menyimpan kategori
  }
  // Method untuk menampilkan informasi produk
  displayInfo() {
    console.log(`ID Produk: ${this.productId}`);
    console.log(`Nama: ${this.productName}`);
    console.log(`Harga: ${formatter(this.price)}`);
    console.log(`Deskripsi: ${this.description}`);
    console.log(`Kategori: ${this.categories.join(", ")}`);
    console.log("-------------------------------------------------------");
  }
  // Method untuk memperbarui informasi produk
  updateProduct(newProductName, newPrice, newDescription) {
    this.productName = newProductName;
    this.price = newPrice;
    this.description = newDescription;
  }
}
