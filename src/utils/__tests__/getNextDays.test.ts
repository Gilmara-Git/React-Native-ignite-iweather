import { getNextDays } from '@utils/getNextDays';

describe('Function: getNextDays:', ()=>{
    it('should return an array with 5 days', ()=>{
        const nextFiveDays = getNextDays();

        expect(nextFiveDays.length).toBe(5)
    })
})