// Kelas kategori
export class Category {
  constructor(categoryId, categoryName) {
    this.categoryId = categoryId;
    this.categoryName = categoryName;
  }
  // Method untuk menampilkan informasi kategori
  displayInfo() {
    console.log(`ID Kategori: ${this.categoryId}`);
    console.log(`Nama: ${this.categoryName}`);
  }
  // Method untuk memperbarui informasi kategori
  updateCategory(newCategoryName) {
    this.categoryName = newCategoryName;
  }

  // Method untuk menampilkan produk di kategori
  products(products) {
    console.log(`Produk dalam kategori "${this.categoryName}":`);
    products.forEach((product) => {
      if (product.categories.includes(this.categoryName)) {
        console.log(`- ${product.productName}`);
      }
    });
  }
}
