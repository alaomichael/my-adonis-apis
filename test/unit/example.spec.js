'use strict'

const { test } = use('Test/Suite')('Example1')

test('make sure 2 + 2 is 4', async ({ assert }) => {
  assert.equal(2 + 2, 4)
})

test("make sure 2 + 3 is greater than 4 ", async ({ assert }) => {
  assert.notEqual(2 + 3, 4);
})

