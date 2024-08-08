console.log('Injected by Lunar!');
console.log('successfully injected xmod!');

const key = 'infinite-craft-data';

const information = document.createElement('h2');
information.id = 'info';
information.innerHTML = 'DEL to Toggle';

information.style.position = 'fixed';
information.style.top = '40px';
information.style.zIndex = '1000';
information.style.padding = '10px';
information.style.color = '#000000';
document.body.appendChild(information)

const fdgsfg = document.createElement('h2');
fdgsfg.id = 'sdfioshfdig';
fdgsfg.innerHTML = "Tampermonkey works better with XMOD than Lunar!";

fdgsfg.style.position = 'fixed';
fdgsfg.style.top = '70px';
fdgsfg.style.zIndex = '1000';
fdgsfg.style.padding = '10px';
fdgsfg.style.color = '#000000';
document.body.appendChild(fdgsfg)

const dfgsfgsdgrfh = document.createElement('h2');
dfgsfgsdgrfh.id = 'fsgsrhsrhsaegsrfh';
dfgsfgsdgrfh.innerHTML = "It's suggested to use Tampermonkey instead!";

dfgsfgsdgrfh.style.position = 'fixed';
dfgsfgsdgrfh.style.top = '100px';
dfgsfgsdgrfh.style.zIndex = '1000';
dfgsfgsdgrfh.style.padding = '10px';
dfgsfgsdgrfh.style.color = '#000000';
document.body.appendChild(dfgsfgsdgrfh)

function getData() {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : { elements: [], darkMode: false };
}

function saveData(data) {
    localStorage.setItem(key, JSON.stringify(data));
}

function addElement(text, emoji) {
    const data = getData();
    data.elements.push({ text, emoji, discovered: false });
    saveData(data);
}

function removeElement(text) {
    const data = getData();
    data.elements = data.elements.filter(element => element.text !== text);
    saveData(data);
}

function removeAllSidebarInputs() {
    const elements = document.querySelectorAll('.sidebar-input');
    elements.forEach(element => element.remove());
}

const container = document.createElement('div');
container.style.position = 'fixed';
container.style.bottom = '300px';
container.style.left = '10px';
container.style.padding = '10px';
container.style.backgroundColor = 'white';
container.style.border = '1px solid black';
container.style.zIndex = '10000';
container.style.display = 'none';

const container2 = document.createElement('div');
container2.style.position = 'fixed';
container2.style.bottom = '220px';
container2.style.left = '10px';
container2.style.padding = '10px';
container2.style.backgroundColor = 'white';
container2.style.border = '1px solid black';
container2.style.zIndex = '10000';
container2.style.display = 'none';

const heading = document.createElement('h2');
heading.textContent = 'XMOD - neal.fun   -   V1 - Alreadycode';
container.appendChild(heading);

const heading2 = document.createElement('h2');
heading2.textContent = 'Useful & Fun Mods';
container2.appendChild(heading2);

const exportButton = document.createElement('button');
exportButton.style.backgroundColor = 'gray';
exportButton.style.color = 'white';
exportButton.textContent = 'Export JSON';
container2.appendChild(exportButton);
exportButton.onclick = () => {
    const jsonData = localStorage.getItem(key);
    const jsonString = JSON.stringify(jsonData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'infinite_craft_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
var elem = document.documentElement;
const fullscreenButton = document.createElement('button');
fullscreenButton.style.backgroundColor = 'gray';
fullscreenButton.style.color = 'white';
fullscreenButton.textContent = 'Fullscreen';
container2.appendChild(fullscreenButton);
fullscreenButton.onclick = () => {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
}
const exitFullscreenButton = document.createElement('button');
exitFullscreenButton.style.backgroundColor = 'gray';
exitFullscreenButton.style.color = 'white';
exitFullscreenButton.textContent = 'Exit Fullscreen';
container2.appendChild(exitFullscreenButton);
exitFullscreenButton.onclick = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

const clearButton = document.createElement('button');
clearButton.style.backgroundColor = 'gray';
clearButton.style.color = 'white';
clearButton.textContent = 'Clear';
container.appendChild(clearButton);

const nameInput = document.createElement('input');
nameInput.style.backgroundColor = 'white';
nameInput.style.color = 'gray';
nameInput.placeholder = 'Element Name';
nameInput.onclick = () => {
    removeAllSidebarInputs();
}
container.appendChild(nameInput);

const emojiInput = document.createElement('input');
emojiInput.id = 'xmodInput';
emojiInput.style.backgroundColor = 'white';
emojiInput.style.color = 'gray';
emojiInput.placeholder = 'Element Emoji (win+colon)';
emojiInput.onclick = () => {
    removeAllSidebarInputs();
}
container.appendChild(emojiInput);

const addButton = document.createElement('button');
addButton.style.backgroundColor = 'gray';
addButton.style.color = 'white';
addButton.textContent = 'Add Element';
addButton.onclick = () => {
    const name = nameInput.value.trim();
    const emoji = emojiInput.value.trim();
    if (name && emoji) {
        addElement(name, emoji);
        nameInput.value = '';
        emojiInput.value = '';
    } else {
        alert('Please enter both name and emoji.');
    }
};
container.appendChild(addButton);

const removeButton = document.createElement('button');
removeButton.style.backgroundColor = 'gray';
removeButton.style.color = 'white';
removeButton.textContent = 'Remove Element';
removeButton.onclick = () => {
    const name = nameInput.value.trim();
    if (name) {
        removeElement(name);
        nameInput.value = '';
    } else {
        alert('Please enter the name of the element to remove.');
    }
};
container.appendChild(removeButton);

const applyButton = document.createElement('button');
applyButton.style.backgroundColor = 'gray';
applyButton.style.color = 'white';
applyButton.textContent = 'Apply Changes';
applyButton.onclick = () => {
    location.reload();
};
container.appendChild(applyButton);


document.body.appendChild(container);
document.body.appendChild(container2);

function toggleMenu() {
    if (container.style.display === 'none') {
        container.style.display = 'block';
        container2.style.display = 'block';
        localStorage.setItem('XMODToggled', 'true');
    } else {
        container.style.display = 'none';
        container2.style.display = 'none';
        localStorage.setItem('XMODToggled', 'false');
    }
}
clearButton.onclick = () => {
    nameInput.value = '';
    emojiInput.value = '';
};

document.addEventListener('keydown', (event) => {
    if (event.key === 'Delete') {
        event.preventDefault();
        toggleMenu();
    }
});
async function sleep(seconds) {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
}
if (localStorage.getItem('XMODToggled') == 'true') {
    container.style.display = 'block';
    container2.style.display = 'block';
}