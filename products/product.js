import packs from '../data/packs.js';
import createSamplePack from './create-sample-pack.js';

const list = document.getElementById('sample-packs');

for (let i = 0; i < packs.length; i++) {
    const samplePackage = packs[i];
    const dom = createSamplePack(samplePackage);
    list.appendChild(dom);
}