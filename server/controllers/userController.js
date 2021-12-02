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
        const comparePassword = decode ( password, foundUser.password )
        if ( comparePassword ) {
          const access_token = sign ( {
            id: foundUser.id,
            username: foundUser.username
          } )
          res.status ( 200 ).json ( { id: foundUser.id, username: foundUser.username, access_token } )
        } else {
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