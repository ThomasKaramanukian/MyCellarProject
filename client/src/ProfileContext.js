// useEffect -> use auth0 hook to get the email,
// then use the email to see if user exists in
// mongoDb -> you will get a response either that they
// exist or don't exists, if they dont exist, you will
// do another fetch -> post to create a new user. (async await)
