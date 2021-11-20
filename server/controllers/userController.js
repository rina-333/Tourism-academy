const { User } = require ( '../models' )
const { decode } = require ( '../helpers/bcryptjs' )
const { sign } = require ( '../helpers/jwt' )

class userController {
  static register ( req, res, next ) {
    const { username, password } = req.body
    User.create ( {
      username,
      password
    } )
    .then ( ( User ) => {
      res.status ( 201 ).json ( { id: User.id, username: User.username, password: User.password } )
    } )
    .catch ( ( err ) => {
      next ( err ) 
    } )
  }

  static login ( req, res, next ) {
    const { username, password } = req.body
    User.findOne ( {
      where: {
        username
      }
    } )
    .then ( ( foundUser ) => {
      if ( foundUser ) {
        // console.log (foundUser, 'foundusernya')
        const comparePassword = decode ( password, foundUser.password )
        // console.log(password,'password')
        // console.log(foundUser.password,'founduserpassword')
        // console.log('masuk if awal')
        if ( comparePassword ) {
          // console.log('masuk if compare')
          const access_token = sign ( {
            id: foundUser.id,
            username: foundUser.username
          } )
          res.status ( 200 ).json ( { id: foundUser.id, username: foundUser.username, access_token } )
        } else {
          // console.log('masuk else')
          // console.log (foundUser)
          throw { status: 400, message: 'Wrong Password' }
        }
      }
    } )
    .catch ( ( err ) => {
      next ( err )
    } )
  }

  

}

module.exports = userController