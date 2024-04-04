import { getNextDays } from "./getNextDays"

describe("Testing getNextDays group:", () => {

    it(' Function should return an array of next 5 days', ()=>{
        const nextFiveDays = getNextDays();
        expect(nextFiveDays.length).toBe(5)
    
    })
})
