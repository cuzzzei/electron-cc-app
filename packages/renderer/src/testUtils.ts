import { screen } from '@testing-library/react'
import { UserEvent } from '@testing-library/user-event/dist/types/setup/setup'

export async function fillInput(label: string, value: string, user: UserEvent) {
   const input = screen.getByLabelText(label)
   await user.type(input, value)
   return input
}
