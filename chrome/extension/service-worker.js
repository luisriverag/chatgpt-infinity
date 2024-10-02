// Launch ChatGPT on install
chrome.runtime.onInstalled.addListener(details => {
    if (details.reason == 'install')
        chrome.tabs.create({ url: 'https://chatgpt.com/' })
})

// Sync settings to activated tabs
chrome.tabs.onActivated.addListener(activeInfo =>
    chrome.tabs.sendMessage(activeInfo.tabId, {
        action: 'sync.storageToUI',
        sender: 'service-worker.js' // for content.js to reset config.infinityMode
}))
