// IMPORT MODULES under test here:
import packs from '../data/packs.js';
import cart from '../data/cart.js';
import { findById, calcLineItem, calcOrderTotal } from '../common/utils.js';

const test = QUnit.test;
QUnit.module('Utils');

test('find product id', assert => {
    //Arrange
    // Set up your parameters and expectations
    const id = '808Gold';
    const expected = '808Gold'; 
    //Act 
    const result = findById(packs, id);
    // Call the function you're testing and set the result to a const
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result.id, expected);
});

test('return null if product id not found', assert => {
    //Arrange
    // Set up your parameters and expectations
    const id = 'not found';
    const expected = null; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = findById(packs, id);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('calculate line total', assert => {
    //Arrange
    // Set up your parameters and expectations
    const quantity = 3;
    const price = 2;
    const expected = 6; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = calcLineItem(quantity, price);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});

test('calculate order total', assert => {
    //Arrange
    // Set up your parameters and expectations
    const expected = 139.93; 
    //Act 
    // Call the function you're testing and set the result to a const
    const result = calcOrderTotal(cart, packs);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(result, expected);
});