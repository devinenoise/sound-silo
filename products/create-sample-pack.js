import packs from '../data/packs.js';
import { findById } from '../common/utils.js';

function createSamplePack(samplePackage) {
    // creates the list element    
    const li = document.createElement('li');
    li.className = samplePackage.category;
    //li.title = samplePackage.description;

    // creates the header using samplepack name
    const h3 = document.createElement('h3');
    h3.textContent = samplePackage.name;
    li.appendChild(h3);

    // fills the container with the sample image
    const img = document.createElement('img');
    img.src = '../assets/' + samplePackage.image;
    img.alt = samplePackage.name + ' image';
    li.appendChild(img);

    // creates the price
    const p = document.createElement('p');
    p.className = 'price';
    li.appendChild(p);

    // moves decimal place two spaces
    const usd = '$' + samplePackage.price.toFixed(2);
    p.textContent = usd;

     // create the description
    const desc = document.createElement('div');
    desc.textContent = samplePackage.description;
    li.className = 'description';
    li.appendChild(desc);

    // creates the add button event listner
    const button = document.createElement('button');
    button.textContent = 'Add';
    //button.value = packs.id;
    
    p.appendChild(button);

    return li;
}

export default createSamplePack;