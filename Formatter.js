// Fungsi ini digunakan untuk mem-format angka menjadi mata uang Rp (rupiah)
export function formatter(amount) {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(amount);
}
