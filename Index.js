// Import kelas-kelas yang diperlukan
import { Product } from "./Product.js";
import { Category } from "./Category.js";
import { Cart } from "./Cart.js";
import { Order } from "./Order.js";

// Membuat instance produk
const laptop = new Product(
  201,
  "RAZER Blade Advance 15",
  23000000,
  "RAZER Blade Advance 15 GeForce RTX™ 4070 - I7 13800H 16GB 1TBSSD - TANPA ANTIGORES, 16GB"
);
const smartphone = new Product(
  202,
  "Samsung S23 Ultra 5G",
  17479000,
  "Samsung Galaxy S23 Ultra 5G 12/256GB - Black"
);
const tv = new Product(
  203,
  "Samsung 98' QLED 4K Smart TV",
  75599000,
  "Samsung 98' QLED 4K Smart TV Q80C QA98Q80CAKXXD"
);
const smartwatch = new Product(
  204,
  "Samsung Galaxy Watch6 Classic",
  4849000,
  "Samsung Galaxy Watch6 Classic 43mm 47mm Watch 6 Smartwatch - 43mm, Black"
);

// Membuat instance kategori
const electronics = new Category(101, "Electronics");
const gadgets = new Category(102, "Gadgets");

// Mengaitkan produk dengan kategori
laptop.categories.push(electronics.categoryName);
laptop.categories.push(gadgets.categoryName);
tv.categories.push(electronics.categoryName);
smartwatch.categories.push(gadgets.categoryName);
smartphone.categories.push(gadgets.categoryName);
smartphone.categories.push(electronics.categoryName);

// Melihat informasi produk
laptop.displayInfo();
smartphone.displayInfo();
tv.displayInfo();
smartwatch.displayInfo();

// Membuat instance keranjang belanja
const shoppingCart = new Cart(1);

// Menambahkan produk ke dalam keranjang
shoppingCart.addItem(laptop, 1);
shoppingCart.addItem(smartphone, 1);
shoppingCart.addItem(tv, 1);
shoppingCart.addItem(smartwatch, 1);

// Menampilkan isi keranjang
shoppingCart.viewCart();

// Menghapus produk dari keranjang
shoppingCart.removeItem(tv);
console.log(`\n${tv.productName} berhasil dihapus dari keranjang.\n`);
console.log("-------------------------------------------------------");

// Membuat pesanan dari keranjang
const order = new Order(1);
order.createOrder(shoppingCart);

// Menampilkan detail pesanan
order.displayOrderDetails();
