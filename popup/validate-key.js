document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('validateButton').addEventListener('click', validateKey);
});

async function validateKey() {
    const keyBase64 = document.getElementById('keyInput').value.trim();

    if (keyBase64 === '') {
        document.getElementById('statusOutput').value = 'Please enter an AES key.';
        return;
    }

    try {
        const key = base64ToArrayBuffer(keyBase64);

        if (key.byteLength === 33) {
            document.getElementById('statusOutput').textContent = 'Success! Loading..';

            setTimeout(() => {
                fetch(chrome.runtime.getURL('popup/popup.html'))
                    .then(response => response.text())
                    .then(html => {
                        document.getElementById('content').innerHTML = html;
                        async function sleep(seconds) {
                            return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
                        }
                        sleep(1)
                        document.body.removeChild(document.getElementById('not_skibididiv1'));
                        document.body.removeChild(document.getElementById('not_skibididiv2'));
                        document.body.removeChild(document.getElementById('not_skibididiv3'));

                        const scriptSelectionElement = document.getElementById("scriptSelection");

                        function injectScript() {
                            console.log('Inject function called');
                            if (scriptSelectionElement) {
                                const selectedScript = scriptSelectionElement.value;
                                console.log('Selected script:', selectedScript);
                                chrome.runtime.sendMessage({ action: selectedScript });
                            }
                        }

                        if (injectButton) {
                            console.log('Inject button found');
                            injectButton.addEventListener('click', function() {
                                console.log('Inject button clicked');
                                injectScript();
                            });
                        }
                    })
            }, 1100);

        } else {
            document.getElementById('statusOutput').textContent = 'Invalid key!';
        }
    } catch (error) {
        document.getElementById('statusOutput').textContent = 'An error occurred!';
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
