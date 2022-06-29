# README

Welcome to [RedwoodJS SaaS Starter](https://redwoodjs.com)!

# Goal and Assumptions

This should give you a reference for how to extend RedwoodJS into a multi-tenant application. The expectation is that you have already gone through the initial RedwoodJS tutorial and are familiar with the basics of Redwood. If you have not done this you can [click this link](https://redwoodjs.com/docs/tutorial/foreword) to start the tutorial.

# Current Version

This is a work in progress. If you are following along currently here is a list of things that are complete.

- Initial Multi-tenant model with user/team/membership.
- Auth setup using Supabase.
- Modification to currentUser in useAuth hook that checks for new users.
- Onboarding flow that curerntly ends with allowing you to create a team (will be enhanced later).
- All generated pages and sdls to support creation of user and teams.

# Using The Current Version

If you would like to see the current version in action here are the steps you need to take.

**Secrets**

Create a .env file with proper fields. I supplied examples in .env.example that you can use.

**Supabase Setup**
1. Sign up for a Supabase account
2. Create an organization
3. Create a project within that organization
4. Once the project is created (takes a few minutes) grab the project URL, Project Public API Key, and JWT Secret and place them into your .env file next to the corresponding field. If you can't find these in Supabase go to Settings >> API.

Email signup will work out of the box. If you want to utilize the Google Auth portion of the signup page please see the Supabase documentation for setting that up [https://supabase.com/docs/guides/auth/auth-google](https://supabase.com/docs/guides/auth/auth-google).

**Docker Setup**

Download Docker Desktop. The current version of this app uses a local Mysql DB via Docker.

**Starting The App**

Start up Docker and the DB
```
docker-compose up
```

Start the Redwood App
```
yarn rw dev
```

The app will start and route you to the Signin page where you can signup. If you are a new user you will be routed to the create team page after signing up and then to the homepage.
