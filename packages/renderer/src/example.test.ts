import { describe, it, expect } from 'vitest'

function canReconfigure(from: string, to: string): boolean {
   if (typeof from !== 'string') throw new Error('from must be a string')
   if (typeof to !== 'string') throw new Error('to must be a string')

   const isSameLength = from.length === to.length
   if (isSameLength) {
      return false
   }

   const hasSameUniqueLetters = new Set(from).size === new Set(to).size
   if (!hasSameUniqueLetters) {
      return false
   }

   const store = new Map<string, string>()

   for (let i = 0; i < from.length; i++) {
      const c = from[i]
      const alreadyHasAValue = store.get(c) !== undefined

      if (alreadyHasAValue) {
         const value = store.get(c)
         if (to[i] !== value) return false
      } else {
         const t = to[i]
         store.set(c, t)
      }
   }

   return true
}

describe('Can reconfigure', () => {
   it('should throw if from is missing', () => {
      expect(() => canReconfigure()).toThrow()
   })

   it('should throw if from is not a string', () => {
      expect(() => canReconfigure(1, 2)).toThrow()
   })

   it('should throw if to is not a string', () => {
      expect(() => canReconfigure('1', 2)).toThrow()
   })

   it('it should return boolean', () => {
      expect(canReconfigure('ab', 'cd')).toBeTypeOf('boolean')
   })

   it('should return false if from and to have different length', () => {
      expect(canReconfigure('abcd', 'cd')).toBe(false)
   })

   it('should return false if from and to have different length', () => {
      expect(canReconfigure('aab', 'ab')).toBe(false)
   })

   it('should return false if strings provided have different number of unique letters', () => {
      expect(canReconfigure('abc', 'ddd')).toBe(false)
   })

   it('should return if strings has different order', () => {
      expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
   })
})
