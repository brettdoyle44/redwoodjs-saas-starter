import { useAuth } from '@redwoodjs/auth'
import { Redirect, routes } from '@redwoodjs/router'

const HomePageRoutePage = () => {
  const { currentUser } = useAuth()

  if (currentUser) {
    if (currentUser.memberships) {
      return <Redirect to={routes.home({ id: currentUser.id as string })} />
    }
    return <Redirect to={routes.newUser()} />
  }
  return <Redirect to={routes.signin()} />
}

export default HomePageRoutePage
