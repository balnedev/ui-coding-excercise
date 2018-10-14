import mappings from '../mappings';

describe('mappings', () => {
  it('formatLable is defined as a function', () =>  {
      expect(mappings.formatLabel).toBeDefined();
  })

  it('formatLable returns formatted date for date field', () =>  {
    expect(mappings.formatLabel('date','2012-02-02T00:00:00.000Z')).toBe('2012-2-2'); 
  })

  it('formatLable returns same data for other fields', () =>  {
    expect(mappings.formatLabel('amount','1000')).toBe('1000'); 
  })
});