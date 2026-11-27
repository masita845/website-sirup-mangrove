(function () {
  'use strict';
  var CONFIG = { WA: '6281234567890', STORE: 'mangrove_cart_v1', QRIS_PAYLOAD: '' };

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
      next: 'Lanjut ke Pembayaran', back: 'Kembali', send_paid: 'Saya Sudah Bayar, Kirim via WhatsApp', send_cod: 'Konfirmasi Pesanan via WhatsApp',
      step_pay_title: 'Pembayaran', scan_qr: 'Scan QR dengan m-banking atau e-wallet. Nominal sudah terisi otomatis.',
      nav_pay: 'Pembayaran', pay_title: 'Metode Pembayaran', pay_sub: 'Pilih metode yang paling nyaman saat membuka keranjang.', pay_pick: 'Metode pembayaran',
      copy: 'Salin', copied: 'Berhasil disalin', copy_fail: 'Gagal menyalin, salin manual.', e_pay: 'Pilih metode pembayaran.', qr_missing: 'Gambar QRIS belum diunggah. Minta QR ke admin via WhatsApp.',
      o_pay: 'Pembayaran', o_code: 'Kode pesanan', o_proof: 'Bukti pembayaran akan saya kirim di chat ini.',
      f_bank: 'Bank', f_acc: 'No. Rekening', f_name: 'Atas nama', f_wallet: 'E-wallet', f_num: 'Nomor',
      pay_bank: 'Transfer Bank', pay_bank_d: 'Transfer manual ke rekening toko, kirim bukti via WhatsApp.', pay_qris: 'QRIS', pay_qris_d: 'Scan satu QR dari m-banking atau e-wallet apa pun.',
      pay_ew: 'E-Wallet', pay_ew_d: 'Kirim ke DANA, GoPay, atau OVO.', pay_cod: 'Bayar di Tempat (COD)', pay_cod_d: 'Bayar tunai saat pesanan tiba (area tertentu).',
      n_bank: 'Pesanan diproses setelah bukti transfer diterima.', n_qris: 'Pastikan nominal sesuai total pesanan.', n_ew: 'Cantumkan kode pesanan di catatan transfer.', n_cod: 'Ketersediaan COD dikonfirmasi admin.',
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
      next: 'Continue to Payment', back: 'Back', send_paid: 'I Have Paid, Send via WhatsApp', send_cod: 'Confirm Order via WhatsApp',
      step_pay_title: 'Payment', scan_qr: 'Scan with mobile banking or an e-wallet. The amount is pre-filled.',
      nav_pay: 'Payment', pay_title: 'Payment Methods', pay_sub: 'Choose the method you prefer when opening the cart.', pay_pick: 'Payment method',
      copy: 'Copy', copied: 'Copied', copy_fail: 'Copy failed, please copy manually.', e_pay: 'Please choose a payment method.', qr_missing: 'QRIS image not uploaded yet. Ask admin for the QR via WhatsApp.',
      o_pay: 'Payment', o_code: 'Order code', o_proof: 'I will send the payment proof in this chat.',
      f_bank: 'Bank', f_acc: 'Account No.', f_name: 'Account name', f_wallet: 'E-wallet', f_num: 'Number',
      pay_bank: 'Bank Transfer', pay_bank_d: 'Manual transfer to the shop account, send proof on WhatsApp.', pay_qris: 'QRIS', pay_qris_d: 'Scan one QR from any mobile banking or e-wallet app.',
      pay_ew: 'E-Wallet', pay_ew_d: 'Send to DANA, GoPay, or OVO.', pay_cod: 'Cash on Delivery', pay_cod_d: 'Pay cash when the order arrives (selected areas).',
      n_bank: 'Orders are processed once proof of transfer is received.', n_qris: 'Make sure the amount matches your order total.', n_ew: 'Include the order code in the transfer note.', n_cod: 'COD availability is confirmed by admin.',
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

  var SLUG = { p1: 'sirup-pedada-original', p2: 'sirup-pedada-jahe', p3: 'sirup-pedada-madu', p4: 'sirup-pedada-lemon', p5: 'sirup-pedada-besar', p6: 'paket-hampers' };
  var PAY = [
    { id: 'bank', icon: '🏦', key: 'pay_bank', note: 'n_bank', fields: [{ l: 'f_bank', v: 'BCA' }, { l: 'f_acc', v: '1234567890', copy: true }, { l: 'f_name', v: 'Sirup Mangrove Pesisir' }] },
    { id: 'qris', icon: '📱', key: 'pay_qris', note: 'n_qris', qr: 'images/qris.png', fields: [] },
    { id: 'ewallet', icon: '👛', key: 'pay_ew', note: 'n_ew', fields: [{ l: 'f_wallet', v: 'DANA / GoPay / OVO' }, { l: 'f_num', v: '081234567890', copy: true }, { l: 'f_name', v: 'Sirup Mangrove Pesisir' }] },
    { id: 'cod', icon: '🤝', key: 'pay_cod', note: 'n_cod', fields: [] }
  ];
  var payment = null, step = 'cart', orderCode = '';
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
      var pi = el('div', 'pimg');
      pi.appendChild(el('span', '', p.icon));
      var im = el('img');
      im.alt = p.name[lang]; im.loading = 'lazy'; var ip = 'images/' + SLUG[p.id] + '.jpg'; im.src = (window.IMG && window.IMG[ip]) || ip;
      im.addEventListener('load', function () { pi.classList.add('has'); });
      pi.appendChild(im);
      c.appendChild(pi);
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
    if (!keys.length && step === 'pay') setStep('cart');
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (n) { n.textContent = t(n.getAttribute('data-i18n')); });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (n) { n.placeholder = t(n.getAttribute('data-i18n-ph')); });
    $('langBtn').textContent = lang === 'id' ? 'EN' : 'ID';
    renderProducts(); renderCart(); renderPay(); setLinks(); save();
  }

  function copyText(v) {
    try { navigator.clipboard.writeText(v).then(function () { toast(t('copied')); }, function () { toast(t('copy_fail')); }); }
    catch (e) { toast(t('copy_fail')); }
  }
  function payFind(id) { return PAY.filter(function (m) { return m.id === id; })[0]; }
  function crc16(s) {
    var c = 0xFFFF;
    for (var i = 0; i < s.length; i++) {
      c ^= s.charCodeAt(i) << 8;
      for (var k = 0; k < 8; k++) c = (c & 0x8000) ? ((c << 1) ^ 0x1021) : (c << 1);
      c &= 0xFFFF;
    }
    return ('0000' + c.toString(16).toUpperCase()).slice(-4);
  }
  function qrisPayload() {
    var p = (CONFIG.QRIS_PAYLOAD || '').trim();
    if (p.indexOf('000201') !== 0 || p.length < 40) return '';
    var tags = [], i = 0;
    while (i + 4 <= p.length) {
      var ln = parseInt(p.substr(i + 2, 2), 10);
      if (isNaN(ln)) return '';
      tags.push([p.substr(i, 2), p.substr(i + 4, ln)]);
      i += 4 + ln;
    }
    var out = [], ins = false;
    tags.forEach(function (x) {
      if (x[0] === '63' || x[0] === '54') return;
      if (!ins && x[0] >= '55') { out.push(['54', String(total())]); ins = true; }
      out.push(x[0] === '01' ? ['01', '12'] : x);
    });
    var s = out.map(function (x) { return x[0] + ('0' + x[1].length).slice(-2) + x[1]; }).join('') + '6304';
    return s + crc16(s);
  }
  function qrisBlock() {
    var wrap = el('div', 'qrbox'), done = false, pl = qrisPayload();
    if (pl && window.qrcode) {
      try {
        var q = window.qrcode(0, 'M'); q.addData(pl); q.make();
        var im = el('img', 'qr'); im.alt = 'QRIS'; im.src = q.createDataURL(6, 4);
        wrap.appendChild(el('p', 'note', t('scan_qr'))); wrap.appendChild(im); done = true;
      } catch (e) { done = false; }
    }
    if (!done) {
      var f = el('img', 'qr'); f.alt = 'QRIS'; f.src = 'images/qris.png';
      var miss = el('p', 'note', t('qr_missing')); miss.hidden = true;
      f.addEventListener('error', function () { f.hidden = true; miss.hidden = false; });
      wrap.appendChild(f); wrap.appendChild(miss);
    }
    return wrap;
  }
  function renderPayInfo() {
    var box = $('payDetail');
    box.replaceChildren();
    var m = payFind(payment);
    if (!m) return;
    function row(l, v, cp) {
      var r = el('div', 'pf');
      r.appendChild(el('span', 'pl', l));
      r.appendChild(el('b', 'pv', v));
      if (cp) {
        var b = el('button', 'copy', t('copy')); b.type = 'button';
        b.addEventListener('click', function () { copyText(cp); });
        r.appendChild(b);
      }
      box.appendChild(r);
    }
    row(t('o_code'), orderCode);
    row(t('o_pay'), t(m.key));
    row(t('total'), rp(total()), m.id === 'cod' ? '' : String(total()));
    m.fields.forEach(function (f) { row(t(f.l), f.v, f.copy ? f.v : ''); });
    if (m.id === 'qris') box.appendChild(qrisBlock());
    box.appendChild(el('p', 'note', t(m.note)));
  }
  function renderPay() {
    var g = $('payGrid'); g.replaceChildren();
    var o = $('payOpts'); o.replaceChildren();
    PAY.forEach(function (m) {
      var c = el('article', 'card');
      c.appendChild(el('div', 'ico', m.icon));
      c.appendChild(el('h3', '', t(m.key)));
      c.appendChild(el('p', '', t(m.key + '_d')));
      g.appendChild(c);
      var lb = el('label', 'popt');
      var inp = el('input'); inp.type = 'radio'; inp.name = 'pay'; inp.value = m.id; inp.checked = payment === m.id;
      inp.addEventListener('change', function () { payment = m.id; $('formErr').textContent = ''; });
      lb.appendChild(inp); lb.appendChild(el('span', '', m.icon + ' ' + t(m.key)));
      o.appendChild(lb);
    });
    if (step === 'pay') setStep('pay');
  }
  function waUrl(text) { return 'https://wa.me/' + CONFIG.WA + '?text=' + encodeURIComponent(text); }
  function setLinks() {
    $('waFloat').href = waUrl(t('wa_hello'));
    $('footWa').href = waUrl(t('wa_hello'));
  }

  function openCart(open) {
    if (!open) setStep('cart');
    $('drawer').classList.toggle('open', open);
    $('drawer').setAttribute('aria-hidden', String(!open));
    $('overlay').hidden = !open;
    if (open) $('closeCart').focus(); else $('cartBtn').focus();
  }

  function clean(s, max) {
    return String(s).replace(/[\u0000-\u001F\u007F]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max);
  }

  function validate() {
    var err = $('formErr');
    err.textContent = '';
    if (!count()) { err.textContent = t('e_empty'); return null; }
    var name = clean($('custName').value, 60);
    var addr = clean($('custAddr').value, 200);
    if (!/^[\p{L}\p{N} .,'\-]{2,60}$/u.test(name)) { err.textContent = t('e_name'); $('custName').focus(); return null; }
    if (addr.length < 5) { err.textContent = t('e_addr'); $('custAddr').focus(); return null; }
    var pm = payFind(payment);
    if (!pm) { err.textContent = t('e_pay'); return null; }
    return { name: name, addr: addr, pm: pm };
  }
  function setStep(s) {
    step = s;
    var pay = s === 'pay';
    $('stepCart').hidden = pay; $('stepPay').hidden = !pay;
    $('nextBtn').hidden = pay; $('sendWa').hidden = !pay; $('backBtn').hidden = !pay;
    $('drawerTitle').textContent = t(pay ? 'step_pay_title' : 'cart_title');
    if (pay) { $('sendWa').textContent = t(payment === 'cod' ? 'send_cod' : 'send_paid'); renderPayInfo(); }
    $('drawerBody').scrollTop = 0;
  }
  function goNext() {
    if (!validate()) return;
    orderCode = 'MGV-' + Date.now().toString(36).toUpperCase();
    setStep('pay');
  }
  function sendOrder() {
    var v = validate();
    if (!v) { setStep('cart'); return; }
    var lines = [t('o_hello'), t('o_code') + ': ' + orderCode];
    Object.keys(cart).forEach(function (k, i) {
      var p = find(k);
      lines.push((i + 1) + '. ' + p.name[lang] + ' (' + p.size + ') x' + cart[k] + ' = ' + rp(p.price * cart[k]));
    });
    lines.push(t('o_total') + ': ' + rp(total()));
    lines.push(t('o_pay') + ': ' + t(v.pm.key));
    if (v.pm.id !== 'cod') lines.push(t('o_proof'));
    lines.push(t('o_name') + ': ' + v.name);
    lines.push(t('o_addr') + ': ' + v.addr);
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
    $('nextBtn').addEventListener('click', goNext);
    $('sendWa').addEventListener('click', sendOrder);
    $('backBtn').addEventListener('click', function () { setStep('cart'); });
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
    var hi = $('heroImg');
    if (window.IMG && window.IMG['images/hero.jpg']) hi.src = window.IMG['images/hero.jpg'];
    hi.addEventListener('load', function () { $('heroArt').classList.add('has'); });
    if (hi.complete && hi.naturalWidth) $('heroArt').classList.add('has');
    applyLang();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
