const { Suggest } = require ( '../models' )

class suggestController {
  static create ( req, res, next ) {
    const { name_suggest, desc_suggest, email_suggest } = req.body
    const nowDate = new Date ()
    Suggest.create ( {
      name_suggest,
      desc_suggest,
      email_suggest,
      date_suggest: nowDate
    } )
      .then ( ( createSuggest ) => {
        res.status ( 201 ).json ( { message: 'Suggest created', suggest: createSuggest } )
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
  }

  static read ( req, res, next ) {
    Suggest.findAll ()
      .then ( data => {
        res.status ( 200 ).json ( { data } )
      } )
      .catch ( err => {
        next ( err )
      } )
  }
}

module.exports = suggestController