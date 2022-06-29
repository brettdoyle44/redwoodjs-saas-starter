import { render } from '@redwoodjs/testing/web'

import SigninPage from './SigninPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SigninPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SigninPage />)
    }).not.toThrow()
  })
})
