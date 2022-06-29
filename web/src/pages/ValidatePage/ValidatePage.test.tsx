import { render } from '@redwoodjs/testing/web'

import ValidatePage from './ValidatePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ValidatePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ValidatePage />)
    }).not.toThrow()
  })
})
