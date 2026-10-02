const SUPABASE_URL = "https://uazjumzhibhdxzitusdj.supabase.co";

const SUPABASE_KEY =
  "sb_publishable_92tyummDQdVlAmakGz7Fqg_reYKMDyC";

let products = [];

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);


/* =========================
   ÇOK KULLANILANLAR
========================= */

let usage = JSON.parse(
  localStorage.getItem("kantinUsage") || "{}"
);

function saveUsage() {
  localStorage.setItem(
    "kantinUsage",
    JSON.stringify(usage)
  );
}

function addUsage(product) {
  usage[product.id] =
    (usage[product.id] || 0) + 1;

  saveUsage();
}


function renderFavorites() {

  const box = document.getElementById("favorites");

  if (!box) return;

  box.innerHTML = "";

  const favorites = [...products]
    .filter(p => usage[p.id])
    .sort(
      (a, b) =>
        (usage[b.id] || 0) -
        (usage[a.id] || 0)
    )
    .slice(0, 6);

  favorites.forEach(p => {

    const div = document.createElement("div");

    div.className = "product";

    div.innerHTML = `
      <b>${p.name}</b>
      <div class="price">
        ${money(p.price)}
      </div>
      <button>+</button>
    `;

    div.onclick = () => add(p, div);

    box.appendChild(div);
  });
}


/* =========================
   SUPABASE ÜRÜNLERİ
========================= */

async function loadProductsFromSupabase() {

  const { data, error } =
    await supabaseClient
      .from("products")
      .select("id, name, price")
      .order("name");

  if (error) {

    console.error(
      "Supabase ürün hatası:",
      error
    );

    return;
  }

  products.length = 0;

  products.push(...data);

  render();

  renderFavorites();
}


/* =========================
   SEPET
========================= */

let cart = {};

const $ = id =>
  document.getElementById(id);


/* =========================
   PARA
========================= */

function money(v) {
  return v.toFixed(2) + " ₺";
}


/* =========================
   ÜRÜNLERİ GÖSTER
========================= */

function render(list = products) {

  const box = $("products");

  box.innerHTML = "";

  list.forEach(p => {

    let div =
      document.createElement("div");

    div.className = "product";

    div.innerHTML = `
      <b>${p.name}</b>
      <div class="price">
        ${money(p.price)}
      </div>
      <button>+</button>
    `;

    div.onclick = () =>
      add(p, div);

    box.appendChild(div);

  });
}


/* =========================
   ÜRÜN EKLE
========================= */

function add(p, card) {

  if (!cart[p.id]) {

    cart[p.id] = {
      ...p,
      qty: 0
    };

  }

  cart[p.id].qty++;

  /* Çok kullanılanlara ekle */
  addUsage(p);

  /* Animasyon */
  card.classList.remove("flash");

  void card.offsetWidth;

  card.classList.add("flash");

  showPlus(card);
setTimeout(() => {
  renderFavorites();
}, 700);
  toast(
    `✔️ ${p.name} eklendi`
  );

  if (navigator.vibrate) {
    navigator.vibrate(15);
  }

  renderCart();
}


/* =========================
   +1 ANİMASYONU
========================= */

function showPlus(card) {

  const el =
    document.createElement("span");

  el.className = "float-plus";

  el.textContent = "+1";

  card.appendChild(el);

  setTimeout(
    () => el.remove(),
    700
  );
}


/* =========================
   BİLDİRİM
========================= */

function toast(text) {

  const old =
    document.querySelector(".toast");

  if (old) {
    old.remove();
  }

  const el =
    document.createElement("div");

  el.className = "toast";

  el.textContent = text;

  document.body.appendChild(el);

  setTimeout(
    () => el.remove(),
    1800
  );
}


/* =========================
   SEPET ADET
========================= */

function change(id, v) {

  cart[id].qty += v;

  if (cart[id].qty <= 0) {
    delete cart[id];
  }

  renderCart();
}


/* =========================
   SEPETİ GÖSTER
========================= */

function renderCart() {

  let c = $("cart");

  let total = 0;

  let count = 0;

  c.innerHTML = "";

  Object.values(cart).forEach(p => {

    total +=
      p.price * p.qty;

    count += p.qty;

    c.innerHTML += `
      <div class="cart-item">

        <span>
          ${p.name}<br>
          ${p.qty} adet
        </span>

        <div class="controls">

          <button
            onclick="change(${p.id},-1)"
          >
            -
          </button>

          <button
            onclick="change(${p.id},1)"
          >
            +
          </button>

        </div>

      </div>
    `;

  });

  const totalEl = $("total");

  const changed =
    totalEl.textContent !==
    money(total);

  totalEl.textContent =
    money(total);

  if (changed) {

    totalEl.classList.remove(
      "bump"
    );

    void totalEl.offsetWidth;

    totalEl.classList.add(
      "bump"
    );

  }

  $("count").textContent =
    count + " ürün";
}


/* =========================
   ARAMA
========================= */

$("search").oninput = e => {

  let q =
    e.target.value
      .toLocaleLowerCase("tr");

  const favoritesBox =
    document.getElementById("favorites");

  const favoritesTitle =
    favoritesBox?.previousElementSibling;

  if (q.trim() !== "") {
    if (favoritesBox) {
      favoritesBox.style.display = "none";
    }

    if (
      favoritesTitle &&
      favoritesTitle.tagName === "H2"
    ) {
      favoritesTitle.style.display = "none";
    }

  } else {
    if (favoritesBox) {
      favoritesBox.style.display = "";
    }

    if (
      favoritesTitle &&
      favoritesTitle.tagName === "H2"
    ) {
      favoritesTitle.style.display = "";
    }
  }

  render(
    products.filter(p =>
      p.name
        .toLocaleLowerCase("tr")
        .includes(q)
    )
  );
};


/* =========================
   BORCU SIFIRLA
========================= */

$("clear").onclick = () => {

  if (
    confirm(
      "Borç sıfırlansın mı?"
    )
  ) {

    cart = {};

    renderCart();

  }

};


/* =========================
   BAŞLANGIÇ
========================= */

render();

renderFavorites();

loadProductsFromSupabase();