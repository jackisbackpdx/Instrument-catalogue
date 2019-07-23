import renderInstrument from '../src/generateInstrument.js';
const test = QUnit.test;

test('Renders an Instrument!', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const drums = {
        name: 'Drum Set',
        code: 'Real Drums',
        image: '../assets/images/drumkit.jpeg/',
        description: 'Get loud and throw down with this drum set, so dope!',
        category: 'drums',
        price: 200.00,
        cost: 125.00
    };

    const expected = '<li class="drums" title="Get loud and throw down with this drum set, so dope!"><h3>Drum Set</h3><img src="../assets/images/drumkit.jpeg"><p class="price">$200.00<button>Buy</button></p></li>';

    
    
    //Act 
    // Call the function you're testing and set the result to a const

    const dom = renderInstrument(drums);
    const html = dom.outerHTML;

    //Assert
    // What should the result be?

    assert.equal(expected, html);
});