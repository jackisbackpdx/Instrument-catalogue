function renderInstrument(instrument) {
    const li = document.createElement('li');
    li.className = instrument.category;
    li.title = instrument.description;

    const h3 = document.createElement('h3');
    h3.textContent = instrument.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = instrument.image;
    img.alt = instrument.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = instrument.price.toLocaleString('en-US', { style: 'currency', curreency: 'USD'});
    const priceTextNode = document.createTextNode(usd);
    p.appendChild(priceTextNode);

    const button = document.createElement('button');
    button.textContent = 'Buy';
    p.appendChild('button');

    li.appendChild(p);

    return li
};

export default renderFruit;