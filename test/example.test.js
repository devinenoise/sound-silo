// IMPORT MODULES under test here:
import { findById } from '../common/utils.js';
import packs from '../data/packs.js';

const test = QUnit.test;
QUnit.module('testing findById')

test('does it find an id?', assert => {
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

test('return null if not found', assert => {
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
