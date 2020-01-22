function createSamplePack(samplePackage) {
    const li = document.createElement('li');
    li.className = samplePackage.category;
    li.title = samplePackage.description;


    const h3 = document.createElement('h3');
    h3.textContent = samplePackage.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + samplePackage.image;
    img.alt = samplePackage.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + samplePackage.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = samplePackage.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default createSamplePack;