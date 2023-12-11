# Simple E-commerce Program Using Javascript OOP

## Cara penggunaan:

Ketik perintah _node Index.js_ pada terminal kesayanganmu

### 1. Membuat instance produk

_const laptop = new Product(_ => deklarasi dan inisialisasi variabel laptop
_201,_ => parameter ID produk
_"RAZER Blade Advance 15",_ => parameter Nama produk
_23000000,_ => parameter harga produk
_"RAZER Blade Advance 15 GeForce RTX™ 4070 - I7 13800H 16GB 1TBSSD - TANPA ANTIGORES, 16GB"_ => parameter deskripsi produk
);

### 2. Instance kategori

_const electronics = new Category(101, "Electronics");_
=> Digunakan untuk membuat objek baru dari kelas Category

### 3. Memberikan kategori untuk produk

_laptop.categories.push(electronics.categoryName);_
=> Digunakan untuk menambahkan nilai ke dalam properti categories dari objek laptop

### 4. Melihat informasi produk

_laptop.displayInfo();_
=> Memanggil metode displayInfo() pada objek laptop.

### 5. Membuat instance keranjang belanja

_const shoppingCart = new Cart(1);_
=> Digunakan untuk menciptakan objek baru dari kelas Cart

### 6. Menambahkan produk ke dalam keranjang

_shoppingCart.addItem(laptop, 1);_
=> Digunakan untuk memanggil metode addItem() pada objek shoppingCart dengan memberikan dua argumen, yaitu laptop dan 1 (menambahkan produk laptop sebanyak 1 buah kedalam keranjang)

### 7. Menambahkan produk ke dalam keranjang

_shoppingCart.removeItem(laptop);_
=> Menghapus produk laptop dari keranjang

### 8. Membuat pesanan

_const order = new Order(1);_
_order.createOrder(shoppingCart);_
=> Membuat pesanan dai produk yang ada didalam keranjang, dengan ID 1

### Hasil Output:

_order.displayOrderDetails();_
=> Method displayOrderDetails() dipanggil untuk menampilkan informasi pesanan yang telah dibuat

### Contoh Output:

ID Produk: 201
Nama: RAZER Blade Advance 15
Harga: Rp 23.000.000,00
Deskripsi: RAZER Blade Advance 15 GeForce RTX™ 4070 - I7 13800H 16GB 1TBSSD - TANPA ANTIGORES, 16GB
Kategori: Electronics, Gadgets

---

ID Produk: 202
Nama: Samsung S23 Ultra 5G
Harga: Rp 17.479.000,00
Deskripsi: Samsung Galaxy S23 Ultra 5G 12/256GB - Black
Kategori: Gadgets, Electronics

---

ID Produk: 203
Nama: Samsung 98' QLED 4K Smart TV
Harga: Rp 75.599.000,00
Deskripsi: Samsung 98' QLED 4K Smart TV Q80C QA98Q80CAKXXD
Kategori: Electronics

---

ID Produk: 204
Nama: Samsung Galaxy Watch6 Classic
Harga: Rp 4.849.000,00
Deskripsi: Samsung Galaxy Watch6 Classic 43mm 47mm Watch 6 Smartwatch - 43mm, Black
Kategori: Gadgets

---

ID Keranjang: 1
Produk didalam keranjang:

- RAZER Blade Advance 15 (Qty: 1)
- Samsung S23 Ultra 5G (Qty: 1)
- Samsung 98' QLED 4K Smart TV (Qty: 1)
- Samsung Galaxy Watch6 Classic (Qty: 1)

---

## Total harga: Rp 120.927.000,00

Samsung 98' QLED 4K Smart TV berhasil dihapus dari keranjang.

---

ID Pesanan: 1
Detail Pesanan:

- RAZER Blade Advance 15 (Qty: 1)
- Samsung S23 Ultra 5G (Qty: 1)
- Samsung Galaxy Watch6 Classic (Qty: 1)

---

## Total Harga: Rp 45.328.000,00
