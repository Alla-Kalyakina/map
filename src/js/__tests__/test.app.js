import ErrorRepository from '../app';

test('testTranslate()', () => {
  const error = new ErrorRepository();
  const result = error.translate(1);
  expect(result).toBe('NameError');
});
test('testTranslate()', () => {
  const error = new ErrorRepository();
  const result = error.translate(2);
  expect(result).toBe('Unknown error');
});
