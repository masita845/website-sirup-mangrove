(function () {
  'use strict';
  var CONFIG = { WA: '6281234567890', STORE: 'mangrove_cart_v1' };

  var PRODUCTS = [
    { id: 'p1', icon: '🍹', price: 35000, size: '250 ml',
      name: { id: 'Sirup Pedada Original', en: 'Original Pedada Syrup' },
      desc: { id: 'Asam-manis alami khas buah pedada, cocok untuk es dan minuman hangat.', en: 'Natural sweet-tart pedada fruit flavor, great iced or warm.' } },
    { id: 'p2', icon: '🫚', price: 38000, size: '250 ml',
      name: { id: 'Sirup Pedada Jahe', en: 'Pedada Ginger Syrup' },
      desc: { id: 'Perpaduan pedada dan jahe merah yang menghangatkan.', en: 'Pedada blended with warming red ginger.' } },
    { id: 'p3', icon: '🍯', price: 40000, size: '250 ml',
      name: { id: 'Sirup Pedada Madu', en: 'Pedada Honey Syrup' },
      desc: { id: 'Dimaniskan madu, rasa lembut dan harum.', en: 'Sweetened with honey for a soft, fragrant taste.' } },
    { id: 'p4', icon: '🍋', price: 38000, size: '250 ml',
      name: { id: 'Sirup Pedada Lemon', en: 'Pedada Lemon Syrup' },
      desc: { id: 'Segar dengan sentuhan lemon, nikmat saat cuaca panas.', en: 'Fresh lemon twist, perfect for hot days.' } },
    { id: 'p5', icon: '🧴', price: 62000, size: '500 ml',
      name: { id: 'Sirup Pedada Botol Besar', en: 'Pedada Family Bottle' },
      desc: { id: 'Ukuran hemat untuk keluarga atau usaha minuman.', en: 'Value size for families or drink shops.' } },
    { id: 'p6', icon: '🎁', price: 135000, size: '3 x 250 ml',
      name: { id: 'Paket Hampers Pesisir', en: 'Coastal Gift Hamper' },
      desc: { id: 'Tiga varian pilihan dalam kemasan hadiah.', en: 'Three variants in a gift box.' } }
  ];

  var I18N = {
    id: {
      nav_home: 'Beranda', nav_products: 'Produk', nav_about: 'Tentang Kami', nav_benefit: 'Manfaat', nav_order: 'Cara Pesan',
      hero_tag: 'Khas Pesisir Nusantara', hero_title: 'Sirup Buah Mangrove, Segarnya Pesisir dalam Setiap Tegukan',
      hero_text: 'Dibuat dari buah pedada pilihan hasil petik warga pesisir. Rasa asam-manis alami, tanpa pewarna buatan.',
      hero_cta1: 'Lihat Produk', hero_cta2: 'Cara Pesan',
      prod_title: 'Katalog Produk', prod_sub: 'Pilih varian favoritmu, tambahkan ke keranjang, lalu pesan via WhatsApp.',
      disclaimer: 'Produk pangan olahan, bukan obat. Harga dapat berubah sewaktu-waktu.', add: 'Tambah ke Keranjang',
      about_title: 'Tentang Kami', about_p1: 'Kami adalah kelompok usaha pesisir yang mengolah buah mangrove menjadi produk pangan bernilai tambah.',
      about_p2: 'Setiap botol turut mendukung penghasilan warga dan upaya menjaga hutan mangrove tetap lestari.',
      stat1: 'Petik lokal', stat2: 'Pewarna buatan', stat3: 'Peduli pesisir',
      ben_title: 'Manfaat & Edukasi Mangrove', ben_sub: 'Kenali lebih dekat pohon penjaga pantai yang buahnya kita olah.',
      b1t: 'Penahan Abrasi', b1d: 'Akar mangrove meredam ombak dan menjaga garis pantai dari pengikisan.',
      b2t: 'Rumah Biota Laut', b2d: 'Ekosistemnya menjadi tempat berkembang biak ikan, udang, dan kepiting.',
      b3t: 'Pangan Alternatif', b3d: 'Buah pedada dapat diolah menjadi sirup dan sajian lain tanpa menebang pohon.',
      b4t: 'Serap Karbon', b4d: 'Hutan mangrove menyimpan karbon dan membantu menekan dampak perubahan iklim.',
      how_title: 'Cara Pesan via WhatsApp',
      s1t: 'Pilih Produk', s1d: 'Telusuri katalog dan tekan tombol tambah.',
      s2t: 'Buka Keranjang', s2d: 'Atur jumlah dan isi nama serta alamat.',
      s3t: 'Kirim ke WhatsApp', s3d: 'Pesanan tersusun otomatis, tinggal kirim.',
      s4t: 'Konfirmasi & Bayar', s4d: 'Admin mengonfirmasi stok, ongkir, dan pembayaran.',
      open_cart: 'Buka Keranjang', footer: 'Dari pesisir untuk Anda. Pesan lewat WhatsApp.', chat_us: 'Chat Kami',
      cart_title: 'Keranjang', cart_empty: 'Keranjang masih kosong.', total: 'Total',
      name_label: 'Nama', name_ph: 'Nama lengkap', addr_label: 'Alamat pengiriman', addr_ph: 'Alamat lengkap',
      send_wa: 'Pesan via WhatsApp', clear: 'Kosongkan',
      m_title: 'Kosongkan keranjang?', m_text: 'Semua produk di keranjang akan dihapus.', m_yes: 'Ya, kosongkan', m_no: 'Batal',
      t_added: 'Ditambahkan ke keranjang', t_cleared: 'Keranjang dikosongkan', t_sent: 'Membuka WhatsApp...',
      e_empty: 'Keranjang masih kosong.', e_name: 'Nama 2-60 karakter (huruf, angka, spasi, . , \' -).', e_addr: 'Alamat 5-200 karakter.',
      wa_hello: 'Halo, saya ingin bertanya tentang Sirup Mangrove.',
      o_hello: 'Halo, saya ingin memesan:', o_name: 'Nama', o_addr: 'Alamat', o_total: 'Total', o_thanks: 'Terima kasih!'
    },
    en: {
      nav_home: 'Home', nav_products: 'Products', nav_about: 'About Us', nav_benefit: 'Benefits', nav_order: 'How to Order',
      hero_tag: 'Coastal Archipelago Specialty', hero_title: 'Mangrove Fruit Syrup, the Coast\'s Freshness in Every Sip',
      hero_text: 'Made from selected pedada fruit picked by coastal communities. Natural sweet-tart taste, no artificial colors.',
      hero_cta1: 'View Products', hero_cta2: 'How to Order',
      prod_title: 'Product Catalog', prod_sub: 'Pick your favorite, add it to the cart, then order via WhatsApp.',
      disclaimer: 'A processed food product, not a medicine. Prices may change.', add: 'Add to Cart',
      about_title: 'About Us', about_p1: 'We are a coastal enterprise turning mangrove fruit into value-added food products.',
      about_p2: 'Every bottle supports local income and the effort to keep mangrove forests alive.',
      stat1: 'Locally picked', stat2: 'Artificial colors', stat3: 'Coast-friendly',
      ben_title: 'Mangrove Benefits & Education', ben_sub: 'Get to know the shoreline guardian whose fruit we process.',
      b1t: 'Erosion Barrier', b1d: 'Mangrove roots break waves and protect the shoreline from erosion.',
      b2t: 'Marine Nursery', b2d: 'The ecosystem shelters fish, shrimp, and crab to breed.',
      b3t: 'Alternative Food', b3d: 'Pedada fruit becomes syrup and other treats without cutting the tree.',
      b4t: 'Carbon Storage', b4d: 'Mangrove forests store carbon and help reduce climate impact.',
      how_title: 'How to Order via WhatsApp',
      s1t: 'Choose Products', s1d: 'Browse the catalog and tap add.',
      s2t: 'Open Cart', s2d: 'Set quantities and fill in name and address.',
      s3t: 'Send on WhatsApp', s3d: 'Your order is composed automatically, just send.',
      s4t: 'Confirm & Pay', s4d: 'Admin confirms stock, shipping, and payment.',
      open_cart: 'Open Cart', footer: 'From the coast to you. Order via WhatsApp.', chat_us: 'Chat With Us',
      cart_title: 'Cart', cart_empty: 'Your cart is empty.', total: 'Total',
      name_label: 'Name', name_ph: 'Full name', addr_label: 'Delivery address', addr_ph: 'Full address',
      send_wa: 'Order via WhatsApp', clear: 'Clear',
      m_title: 'Clear the cart?', m_text: 'All items in the cart will be removed.', m_yes: 'Yes, clear', m_no: 'Cancel',
      t_added: 'Added to cart', t_cleared: 'Cart cleared', t_sent: 'Opening WhatsApp...',
      e_empty: 'Your cart is empty.', e_name: 'Name 2-60 chars (letters, digits, spaces, . , \' -).', e_addr: 'Address 5-200 chars.',
      wa_hello: 'Hello, I would like to ask about Mangrove Syrup.',
      o_hello: 'Hello, I would like to order:', o_name: 'Name', o_addr: 'Address', o_total: 'Total', o_thanks: 'Thank you!'
    }
  };

  var lang = 'id';
  var cart = {};
  var $ = function (id) { return document.getElementById(id); };
  var t = function (k) { return I18N[lang][k] || k; };
  var rp = function (n) { return 'Rp' + new Intl.NumberFormat('id-ID').format(n); };

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text !== undefined) e.textContent = text;
    return e;
  }
  function find(id) { return PRODUCTS.filter(function (p) { return p.id === id; })[0]; }

  function load() {
    try {
      var l = localStorage.getItem('mangrove_lang');
      if (l === 'id' || l === 'en') lang = l;
      var raw = JSON.parse(localStorage.getItem(CONFIG.STORE) || '{}');
      Object.keys(raw).forEach(function (k) {
        var q = parseInt(raw[k], 10);
        if (find(k) && q > 0 && q <= 99) cart[k] = q;
      });
    } catch (e) { cart = {}; }
  }
  function save() {
    try { localStorage.setItem(CONFIG.STORE, JSON.stringify(cart)); localStorage.setItem('mangrove_lang', lang); } catch (e) {}
  }

  var toastTimer;
  function toast(msg) {
    var n = $('toast');
    n.textContent = msg;
    n.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { n.classList.remove('show'); }, 2200);
  }

  function renderProducts() {
    var g = $('grid');
    g.replaceChildren();
    PRODUCTS.forEach(function (p) {
      var c = el('article', 'pcard');
      c.appendChild(el('div', 'pimg', p.icon));
      c.appendChild(el('h3', '', p.name[lang]));
      c.appendChild(el('p', 'pmeta', p.desc[lang]));
      c.appendChild(el('p', 'pmeta', p.size));
      c.appendChild(el('p', 'pprice', rp(p.price)));
      var b = el('button', 'btn btn-main', t('add'));
      b.type = 'button';
      b.addEventListener('click', function () { addItem(p.id, 1); toast(t('t_added')); });
      c.appendChild(b);
      g.appendChild(c);
    });
  }

  function count() { return Object.keys(cart).reduce(function (a, k) { return a + cart[k]; }, 0); }
  function total() { return Object.keys(cart).reduce(function (a, k) { return a + cart[k] * find(k).price; }, 0); }

  function addItem(id, d) {
    var q = (cart[id] || 0) + d;
    if (q <= 0) delete cart[id]; else cart[id] = Math.min(q, 99);
    save(); renderCart();
  }

  function renderCart() {
    var list = $('cartList');
    list.replaceChildren();
    var keys = Object.keys(cart);
    if (!keys.length) list.appendChild(el('p', 'empty', t('cart_empty')));
    keys.forEach(function (k) {
      var p = find(k);
      var row = el('div', 'row');
      var nm = el('span', 'nm', p.name[lang]);
      nm.appendChild(el('span', 'pr', rp(p.price)));
      row.appendChild(nm);
      var q = el('div', 'qty');
      var m = el('button', 'qb', '−'); m.type = 'button'; m.setAttribute('aria-label', '-');
      m.addEventListener('click', function () { addItem(k, -1); });
      var pl = el('button', 'qb', '+'); pl.type = 'button'; pl.setAttribute('aria-label', '+');
      pl.addEventListener('click', function () { addItem(k, 1); });
      q.appendChild(m); q.appendChild(el('b', '', String(cart[k]))); q.appendChild(pl);
      row.appendChild(q);
      list.appendChild(row);
    });
    $('totalVal').textContent = rp(total());
    $('cartCount').textContent = String(count());
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (n) { n.placeholder = t(n.getAttribute('data-i18n-ph')); });
    $('langBtn').textContent = lang === 'id' ? 'EN' : 'ID';
    renderProducts(); renderCart(); setLinks(); save();
  }

  function waUrl(text) { return 'https://wa.me/' + CONFIG.WA + '?text=' + encodeURIComponent(text); }
  function setLinks() {
    $('waFloat').href = waUrl(t('wa_hello'));
    $('footWa').href = waUrl(t('wa_hello'));
  }

  function openCart(open) {
    $('drawer').classList.toggle('open', open);
    $('drawer').setAttribute('aria-hidden', String(!open));
    $('overlay').hidden = !open;
    if (open) $('closeCart').focus(); else $('cartBtn').focus();
  }

  function clean(s, max) {
    return String(s).replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
  }

  function checkout() {
    var err = $('formErr');
    err.textContent = '';
    if (!count()) { err.textContent = t('e_empty'); return; }
    var name = clean($('custName').value, 60);
    var addr = clean($('custAddr').value, 200);
    if (!/^[\p{L}\p{N} .,'\-]{2,60}$/u.test(name)) { err.textContent = t('e_name'); $('custName').focus(); return; }
    if (addr.length < 5) { err.textContent = t('e_addr'); $('custAddr').focus(); return; }
    var lines = [t('o_hello')];
    Object.keys(cart).forEach(function (k, i) {
      var p = find(k);
      lines.push((i + 1) + '. ' + p.name[lang] + ' (' + p.size + ') x' + cart[k] + ' = ' + rp(p.price * cart[k]));
    });
    lines.push(t('o_total') + ': ' + rp(total()));
    lines.push(t('o_name') + ': ' + name);
    lines.push(t('o_addr') + ': ' + addr);
    lines.push(t('o_thanks'));
    toast(t('t_sent'));
    window.open(waUrl(lines.join('\n')), '_blank', 'noopener,noreferrer');
  }

  function modal(show) { $('modal').hidden = !show; if (show) $('mNo').focus(); }

  function init() {
    load();
    $('langBtn').addEventListener('click', function () { lang = lang === 'id' ? 'en' : 'id'; applyLang(); });
    $('cartBtn').addEventListener('click', function () { openCart(true); });
    $('ctaCart').addEventListener('click', function () { openCart(true); });
    $('closeCart').addEventListener('click', function () { openCart(false); });
    $('overlay').addEventListener('click', function () { openCart(false); });
    $('sendWa').addEventListener('click', checkout);
    $('clearBtn').addEventListener('click', function () { if (count()) modal(true); });
    $('mNo').addEventListener('click', function () { modal(false); });
    $('mYes').addEventListener('click', function () { cart = {}; save(); renderCart(); modal(false); toast(t('t_cleared')); });
    var burger = $('burger'), menu = $('menu');
    burger.addEventListener('click', function () {
      var o = menu.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(o));
    });
    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key !== 'Escape') return;
      if (!$('modal').hidden) modal(false); else if ($('drawer').classList.contains('open')) openCart(false);
    });
    applyLang();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
