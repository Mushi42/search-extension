function createMenuItem(engines) {
    for (let engine of engines) {
        browser.menus.create({
            id: engine.name,
            title: engine.name,
            contexts: ["selection"]
        });
    }
}

browser.search.get().then(createMenuItem);

browser.menus.onClicked.addListener((info, tab) => {
    browser.search.search({
        query: info.selectionText,
        engine: info.menuItemId
    });
});