import { describe, expect, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Modal } from '/@/components/Modal/Modal'
import { useState } from 'react'

function ControlledModal() {
   const [isOpen, setIsOpen] = useState(false)

   return (
      <Modal
         isOpen={isOpen}
         onClose={() => setIsOpen(false)}
         title='Modal Title'
         triggerButton={<button onClick={() => setIsOpen(true)}>Open</button>}
         confirmButton={
            <button onClick={() => setIsOpen(false)}>Confirm</button>
         }
      >
         <h1>Modal content</h1>
      </Modal>
   )
}

describe('Modal Tests', () => {
   render(<ControlledModal />)

   test('Should show trigger button', () => {
      expect(screen.getByText('Open')).toBeDefined()
   })

   test('Should open modal', () => {
      const triggerButton = screen.getByText('Open')
      fireEvent.click(triggerButton)

      expect(screen.getByText('Modal Title')).toBeDefined()
   })

   test('Should close modal', () => {
      const confirmButton = screen.getByText('Confirm')
      fireEvent.click(confirmButton)
      expect(screen.queryByText('Modal Title')).toBeNull()
   })
})
