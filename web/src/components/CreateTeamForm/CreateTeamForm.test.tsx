import { render } from '@redwoodjs/testing/web'

import CreateTeamForm from './CreateTeamForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CreateTeamForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CreateTeamForm />)
    }).not.toThrow()
  })
})
