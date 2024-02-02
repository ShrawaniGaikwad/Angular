import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('Multiplies two numbers', () => {
    const pipe = new MyMultPipe();
    expect(pipe.transform(11,10)).toBe(110);
  });
});
