/**
 * @jest-environment jsdom
 */

 import { pushToHistory } from '../scripts/router.js';
 /*  test('adds 1 + 2 to equal 3', () => {
      expect(1 + 2).toBe(3);
   }); */
  
  describe('history', () =>{
  test('adding setting history', () =>{
     let before = history.length;
     pushToHistory('settings');
     let after = history.length;
     expect(after-before).toBe(1);
     expect(history.state).toStrictEqual({ page: 'settings' });
  });
 
  test('adding entry history', () =>{
     let before = history.length;
     pushToHistory('entry', 4);
     let after = history.length;
     expect(after-before).toBe(1);
     expect(history.state).toStrictEqual({ page: "entry4"});
  });
  test('adding default history', () =>{
     let before = history.length;
     pushToHistory('');
     let after = history.length;
     expect(after-before).toBe(1);
     expect(history.state).toStrictEqual({});
  });
 
 
  })