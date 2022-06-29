const ValidatePage = () => {
  return (
    <>
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-16 w-auto"
            src="mark-logo-cover.png"
            alt="Redwood"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Check your email!
          </h2>
          <p className="mt-6 text-center">
            We just sent you an email which will have a link to log you into the
            platform.
          </p>
        </div>
      </div>
    </>
  )
}

export default ValidatePage
