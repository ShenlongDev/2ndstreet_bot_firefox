document.getElementById('reload').addEventListener('click', () => {
    chrome.windows.getAll({ populate: true }, (windows) => {
        windows.forEach((window) => {
          window.tabs.forEach((tab) => {
            if (tab.url && tab.url.includes('2ndstreet.jp/index.php/api_2_0')) {
              chrome.tabs.reload(tab.id);
            }
          });
        });
      });
});
