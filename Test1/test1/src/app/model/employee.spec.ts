import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee('','')).toBeTruthy();
  });

  it ('new object values must be initialized', ()=>{
    var emp = new Employee('kalyani','');
    expect(emp.firstName).toEqual('kalyani');
    expect(emp.lastName).toEqual('');
  });
});
