if (window.location.pathname.endsWith('.html')) {
    // Uzantıyı kaldır ve yeni URL'ye yönlendir
    let newUrl = window.location.pathname.replace('.html', '');
    window.history.replaceState(null, null, newUrl); // Sayfa yenilenmeden URL'yi güncelle
  }