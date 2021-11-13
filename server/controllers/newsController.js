class newsController {
  static read ( req, res, next ) {
    News.findAll ()
      .then ( data => {
        res.status ( 200 ).json ( { data } )
      } )
      .catcj ( err => {
        next ( err )
      } )
  }

  
}

module.exports = newsController