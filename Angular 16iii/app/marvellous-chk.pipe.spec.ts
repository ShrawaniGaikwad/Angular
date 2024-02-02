import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('should Check Prime or Even or Odd or Perfect number', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe.transform(20,"Even")).toBe(true);
    expect(pipe.transform(11,"Odd")).toBe(true);
    expect(pipe.transform(6,"Perfect")).toBe(true);
    expect(pipe.transform(7,"Prime")).toBe(true);

    expect(pipe.transform(21,"Even")).toBe(false);
    expect(pipe.transform(12,"Odd")).toBe(false);
    expect(pipe.transform(7,"Perfect")).toBe(false);
    expect(pipe.transform(22,"Prime")).toBe(false);
  });
});
