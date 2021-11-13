const { News } = require ( '../models' )

class newsController {
  static read ( req, res, next ) {
    News.findAll ()
      .then ( data => {
        res.status ( 200 ).json ( { data } )
      } )
      .catch ( err => {
        next ( err )
      } )
  }

  static create ( req, res, next ) {
    const { title, description, date } = req.body
    News.create ( {
      title,
      image_url: req.image_url,
      description,
      date
    } )
      .then ( ( createNews ) => {
        res.status ( 201 ).json ( { message: 'News created', news: createNews } )
      } )
      .catch ( ( err ) => {
        next ( {
          status: 500,
          msg: 'Internal Server Error'
        } )
      } )
  }
}

module.exports = newsController