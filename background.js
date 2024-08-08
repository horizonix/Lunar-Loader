chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('Message received in background script:', message);
    if (message.action === "lunar_run_sandstrikeio") {
        chrome.tabs.query({ active: true }, function (tabs) {
            let tab = tabs[0];
            chrome.scripting.executeScript(
                {
                    target: { tabId: tab.id },
                    files: ["scripts/sandstrikeio.js"],
                },
            );
        });
    } else if (message.action === "lunar_run_infcraft") {
        chrome.tabs.query({ active: true }, function (tabs) {
            let tab = tabs[0];
            chrome.scripting.executeScript(
                {
                    target: { tabId: tab.id },
                    files: ["scripts/xmod_infcraft.js"],
                },
            );
        });
    } else if (message.action === "lunar_run_hotpocket") {
        chrome.tabs.query({ active: true }, function (tabs) {
            let tab = tabs[0];
            chrome.scripting.executeScript(
                {
                    target: { tabId: tab.id },
                    files: ["scripts/hotpocket.js"],
                },
            );
        });
    }
});