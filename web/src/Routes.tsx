// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/signin" page={SigninPage} name="signin" />
      <Route path="/validate" page={ValidatePage} name="validate" />
      <Private unauthenticated="signin">
        <Route path="/" page={HomePageRoutePage} name="homePageRoute" />
        <Route path="/new-user" page={NewUserPage} name="newUser" />
        <Route path="/home/{id}" page={HomePage} name="home" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
