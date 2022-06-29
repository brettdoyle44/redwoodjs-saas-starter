import { render } from '@redwoodjs/testing/web'

import HomePageRoutePage from './HomePageRoutePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('HomePageRoutePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePageRoutePage />)
    }).not.toThrow()
  })
})
