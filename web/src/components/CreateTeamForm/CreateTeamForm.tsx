import { useAuth } from '@redwoodjs/auth'
import { Form, Label, TextField, Submit } from '@redwoodjs/forms'
import { routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

const CREATE_TEAM = gql`
  mutation CreateTeamMutation($input: CreateTeamInput!, $id: String!) {
    createTeam(id: $id, input: $input) {
      id
    }
  }
`

const CreateTeamForm = () => {
  const [create] = useMutation(CREATE_TEAM)
  const { currentUser } = useAuth()
  const [error, setError] = React.useState(null)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    setError(null)
    try {
      await create({
        variables: {
          input: data,
          id: currentUser.id,
        },
      })
      navigate(routes.home({ id: currentUser.id as string }))
    } catch (e) {
      setError(e.message)
    }
  }
  return (
    <>
      <div>
        <Form onSubmit={onSubmit}>
          {error && <p>{error}</p>}
          <Label name="name" htmlFor="name" className="sr-only">
            Team Name
          </Label>
          <TextField
            name="name"
            id="name"
            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="My Marketing Team"
          />
          <Submit className="min-w-full block mt-4 bg-blue-500 text-white text-xs font-semibold uppercase tracking-wide rounded px-3 py-2 disabled:opacity-50">
            Create Team
          </Submit>
        </Form>
      </div>
    </>
  )
}

export default CreateTeamForm
