import { FaGoogle } from 'react-icons/fa'

import { useAuth } from '@redwoodjs/auth'
import { Form, TextField, Submit } from '@redwoodjs/forms'
import { Redirect, routes, navigate } from '@redwoodjs/router'

const SigninPage = () => {
  const { client, currentUser } = useAuth()

  async function signInWithGoogle() {
    try {
      await client.auth.signIn(
        {
          provider: 'google',
        },
        {
          redirectTo: 'http://localhost:8910/',
        }
      )
    } catch (error) {
      console.log('error:  ', error)
    }
  }
  async function onSubmit(data) {
    try {
      await client.auth.signIn(
        {
          email: data.email,
        },
        {
          redirectTo: 'http://localhost:8910/',
        }
      )
      navigate(routes.validate())
    } catch (error) {
      console.log('error:  ', error)
    }
  }

  if (currentUser)
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
          <h2 className="mt-4 text-center text-3xl font-extrabold text-gray-900">
            Sign up for your account
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <Form className="space-y-6" onSubmit={onSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-1">
                  <TextField
                    id="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <Submit className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  Sign in
                </Submit>
              </div>
            </Form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">
                    {' '}
                    Or continue with{' '}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <div>
                  <button
                    onClick={signInWithGoogle}
                    className="w-full inline-flex items-center justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    <FaGoogle className="mr-2" /> Sign up with Google
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SigninPage
