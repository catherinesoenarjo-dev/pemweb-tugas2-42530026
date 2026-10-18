const daftarMenu = require('../data/menu');
const kategoriList = ['matcha', 'tea', 'foods', 'sweets'];


exports.getDaftar = (req, res) => {
  const kategori = req.query.kategori ? String(req.query.kategori).toLowerCase() : '';

  let hasil = daftarMenu;
  if (kategori) {
    hasil = daftarMenu.filter((m) => m.kategori === kategori);
  }

  res.render('pages/main', {
    pageTitle: 'Menu',
    halaman: 'home',
    menu: hasil,
    kategoriList: kategoriList,
    kategoriAktif: kategori
  });
};


exports.getDetail = (req, res) => {
  const id = Number(req.params.id);
  const menu = daftarMenu.find((m) => m.id === id);

  if (!menu) {
    return res.status(404).render('pages/notfound', {
      pageTitle: 'Tidak Ditemukan',
      halaman: 'notfound',
      pesan: 'Menu tidak ditemukan.'
    });
  }

  res.render('pages/detail', {
    pageTitle: menu.nama,
    halaman: 'detail',
    menu: menu
  });
};
