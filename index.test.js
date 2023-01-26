const isValid = require('./index')

test("() is valid", () => {
  expect(isValid("()")).toBe(true);
});

test("()[]{} is valid", () => {
  expect(isValid("()[]{}")).toBe(true);
});

test("([{}]) is valid", () => {
  expect(isValid("([{}])")).toBe(true);
});

test("((())) is valid", () => {
  expect(isValid("((()))")).toBe(true);
});


test("([{}])(([])) is valid", () => {
  expect(isValid("([{}])(([]))")).toBe(true);
});

test("([)] is not valid", () => {
  expect(isValid("([)]")).toBe(false);
});

test("(([]) is not valid", () => {
  expect(isValid("(([])")).toBe(false);
});

