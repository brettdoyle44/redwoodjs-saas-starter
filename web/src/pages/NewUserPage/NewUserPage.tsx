import { useAuth } from '@redwoodjs/auth'
import { Redirect, routes } from '@redwoodjs/router'

import CreateTeamForm from 'src/components/CreateTeamForm/CreateTeamForm'

const NewUserPage = () => {
  const { currentUser } = useAuth()

  if (currentUser.memberships)
    return <Redirect to={routes.home({ id: currentUser.id as string })} />

  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-20 w-auto"
            src="mark-logo-cover.png"
            alt="Redwood"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new team
          </h2>
          <p className="mt-6 text-center">
            This is where you and your team will work together to create amazing
            campaigns. Most people use their organization name, but feel free to
            name it after your team!
          </p>
        </div>

        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="px-4 sm:rounded-lg sm:px-10">
            <CreateTeamForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default NewUserPage
