(function() {
    var btn = document.getElementById('button');
    btn.addEventListener('click', function(e) {
        chrome.tabs.getSelected(function(tab) {
            this.current_tab_id = tab.id;
            chrome.tabs.executeScript(tab.id, { file: 'js/getData.js' });
            chrome.tabs.executeScript(tab.id, { file: 'js/jq.js' });
        });
    });

})()