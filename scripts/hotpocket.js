console.log('Injected by Lunar!');
console.log('Hotpocket by Alreadycode!');

// config
var config = {
    arrow_colour: 'white',
    toggle_key_b: 'L',
}
// config b for adj
var config_adj = {
    arrow_colour: '20px solid ' + config.arrow_colour,
    toggle_key_b: config.toggle_key_b,
}

// make arrow
var arrow = document.createElement('div');
arrow.style.position = 'fixed';
arrow.style.top = '50%';
arrow.style.left = '0';
arrow.style.transform = 'translateY(-50%)';
arrow.style.width = '0';
arrow.style.height = '0';
arrow.style.borderTop = '10px solid transparent';
arrow.style.borderBottom = '10px solid transparent';
arrow.style.borderLeft = config_adj.arrow_colour;
arrow.style.cursor = 'pointer';

arrow.addEventListener('click', function() {
    if (bg.style.display === 'none') {
        bg.style.display = 'block';
    } else {
        bg.style.display = 'none';
    }
});

// make background
var bg = document.createElement('div');
bg.style.position = 'fixed';
bg.style.top = '25%';
bg.style.width = '40%';
bg.style.height = '45%';
bg.style.left = '30%';
bg.style.padding = '10px';
bg.style.backgroundColor = 'rgb(31,31,31)';
bg.style.border = '2px solid white';
bg.style.zIndex = '10000';
bg.style.display = 'none';

var header = document.createElement('label');
header.className = 'label';
header.style.position = 'fixed';
header.style.top = '26%';
header.style.left = '30%';
header.style.width = '41%';
header.style.zIndex = '10000';
header.textContent = 'Lunar Hotpocket';

bg.innerHTML = `
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.1/css/bulma.min.css">
`

// append elements
document.body.appendChild(bg);
document.body.appendChild(arrow);

// bg appends
bg.appendChild(header);