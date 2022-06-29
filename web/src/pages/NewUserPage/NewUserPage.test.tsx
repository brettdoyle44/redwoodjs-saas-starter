import { render } from '@redwoodjs/testing/web'

import NewUserPage from './NewUserPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NewUserPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewUserPage />)
    }).not.toThrow()
  })
})
