const version = 1.3;

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('validateButton').addEventListener('click', validateKey);
});

function httpGet(url) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    var parser = new DOMParser();
    var doc = parser.parseFromString(xmlHttp.response, "text/html");
    return doc.body.innerHTML;
}

function run_main_func() {
    console.log('fn main')
    localStorage.setItem('hasRegistered_LUNARLOADER', true);

    console.log(localStorage.getItem('hasRegistered_LUNARLOADER'));
    document.getElementById('statusOutput').textContent = 'Success! Loading..';

    setTimeout(() => {
        fetch(chrome.runtime.getURL('popup/popup.html'))
            .then(response => response.text())
            .then(html => {
                document.getElementById('content').innerHTML = html;
                document.body.removeChild(document.getElementById('not_skibididiv1'));
                document.body.removeChild(document.getElementById('not_skibididiv2'));
                document.body.removeChild(document.getElementById('not_skibididiv3'));

                let curv = httpGet('https://alreadycode.pevcot.net/api/lunarloaderversion');
                
                if (Number(curv) == version) {
                    document.getElementById('content').removeChild(document.getElementById('update_client'));
                } else {
                    document.getElementById('updateButton').addEventListener('click', function() {
                        chrome.tabs.create({
                            url: 'https://github.com/horizonix/Lunar-Loader/releases/latest/download/extract_me.zip',
                          });
                    });
                }

                const scriptSelectionElement = document.getElementById('scriptSelection');
                const injectButton = document.getElementById('injectButton');
                const logoutButton = document.getElementById('logoutButton');

                function injectScript() {
                    if (scriptSelectionElement) {
                        const selectedScript = scriptSelectionElement.value;
                        chrome.runtime.sendMessage({ action: selectedScript });
                    }
                }
                
                if (injectButton) {
                    injectButton.addEventListener('click', function() {
                        injectScript();
                    });
                }
                if (logoutButton) {
                    logoutButton.addEventListener('click', function() {
                        localStorage.removeItem('hasRegistered_LUNARLOADER');
                    });
                }
            })
    }, 1100);
}

console.log('aoidjgikfdghnki')
if (localStorage.getItem('hasRegistered_LUNARLOADER')) {
    console.log('was found')
    run_main_func();
}

async function validateKey() {
    const keyBase64 = document.getElementById('keyInput').value.trim();

    if (keyBase64 === '') {
        document.getElementById('statusOutput').value = 'Please enter an AES key.';
        return;
    }

    try {
        const key = base64ToArrayBuffer(keyBase64);

        if (key.byteLength === 33) {
            run_main_func();
        } else {
            document.getElementById('statusOutput').textContent = 'Invalid key!';
        }
    } catch (error) {
        document.getElementById('statusOutput').textContent = 'An error occurred! ' + error;
    }
}

function base64ToArrayBuffer(base64) {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}
