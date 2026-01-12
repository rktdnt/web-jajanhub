function getCart() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveCart(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(product) {
  const cart = getCart();
  const index = cart.findIndex(i => i.id === product.id);

  if (index !== -1) {
    cart[index].qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart(cart);
  alert("Ditambahkan ke keranjang");
}

function removeFromCart(id) {
  const cart = getCart().filter(i => i.id !== id);
  saveCart(cart);
  location.reload();
}

function getTotal() {
  return getCart().reduce((sum, i) => sum + i.price * i.qty, 0);
}
