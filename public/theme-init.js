(function () {
  try {
    var d = document.documentElement;
    var t = localStorage.getItem('theme');
    if (t === 'light') {
      d.classList.remove('dark');
    } else if (t === 'dark') {
      d.classList.add('dark');
    } else if (t === 'system') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        d.classList.add('dark');
      } else {
        d.classList.remove('dark');
      }
    } else {
      d.classList.add('dark');
    }
  } catch (e) {
    document.documentElement.classList.add('dark');
  }
})();
