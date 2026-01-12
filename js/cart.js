// ambil data cart
function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

// simpan cart
function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

// tambah produk
function addToCart(product) {
  const cart = getCart();
  const index = cart.findIndex(item => item.id === product.id);

  if (index !== -1) {
    cart[index].qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }

  saveCart(cart);
  alert("Produk masuk ke keranjang");
}

// hapus produk
function removeFromCart(id) {
  const cart = getCart().filter(item => item.id !== id);
  saveCart(cart);
  renderCart();
}

// update qty
function updateQty(id, qty) {
  const cart = getCart();

  const item = cart.find(i => i.id === id);
  if (!item) return;

  if (qty <= 0) {
    removeFromCart(id);
    return;
  }

  item.qty = qty;
  saveCart(cart);
  renderCart();
}

// hitung total
function getTotal() {
  return getCart().reduce((total, item) => {
    return total + item.price * item.qty;
  }, 0);
}
