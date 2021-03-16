function setSearchEngine() {
  const actions = {
    google: 'https://www.google.com/search',
    duckduckgo: 'https://duckduckgo.com/',
    bing: 'https://www.bing.com/search',
    ask: 'https://www.ask.com/web',
  };

  const form = document.getElementById('searchForm');
  const selectedEngine = document.querySelector('input[name=engine]:checked');
  const action = actions[selectedEngine.value];

  form.setAttribute('action', action);
}
window.addEventListener('load', function () {
  let button = document.getElementById('submit');
  button.addEventListener('click', function (event) {
    const search = document.getElementById('q');
    const selectedEngine = document.querySelector('input[name=engine]:checked');
    if (search.value === '' || selectedEngine.value === '') {
      alert('Select an engine and type something in the input search');
      preventDefault();
    } else {
      const form = document.getElementById('searchForm');
      form.addEventListener('submit', setSearchEngine);
    }
  });
});
