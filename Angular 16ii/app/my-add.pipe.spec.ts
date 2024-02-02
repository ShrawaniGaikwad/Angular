import { MyAddPipe } from './my-add.pipe';

describe('MyAddPipe', () => {
  it('Adds two numbers', () => {
    const pipe = new MyAddPipe();
    expect(pipe.transform(10,20)).toBe(30);
  });
});
