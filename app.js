const express = require('express');
const path = require('path');
const pageRoutes = require('./routes/page.routes');

const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', pageRoutes);

app.use((req, res) => {
  res.status(404).render('pages/notfound', {
    pageTitle: 'Tidak Ditemukan',
    halaman: 'notfound',
    pesan: 'Halaman tidak ditemukan.'
  });
});

app.listen(8000, (err) =>  {
  if (err) throw err;
  console.log('Server MVC Aktif!');
});