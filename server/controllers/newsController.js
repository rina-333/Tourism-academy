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

  static findOne ( req, res, next ) {
    News.findByPk ( +req.params.id )
      .then ( ( foundNews ) => {
        if ( foundNews ) {
          res.status ( 200 ).json ( { news : foundNews } )
        } else  {
          throw { status: 404, message: "News not Found" }
        }
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
  }

  static update ( req, res, next ) {
    const { title, description, date } = req.body
    News.update ( {
      title,
      image_url: req.image_url,
      description,
      date
    }, {
      where: {
        id: +req.params.id
      },
      returning: true 
    } )
      .then ( ( updatedNews ) => {
        res.status ( 200 ).json ( { message: 'News has been updated', updatedNews } )
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
  }

  static delete ( req, res, next ) {
    News.destroy ( {
    where: {
      id: +req.params.id
    }
  } )
    .then ( ( deletedNews ) => {
      if ( deletedNews ) {
        res.status ( 200 ).json ( { message: 'Selected News has been deleted' } )
      } else {
        throw { status: 400, message: 'Failed to delete selected News' }
      }
    } )
    .catch ( ( err ) => {
      next ( err )
    } )
  }
}

module.exports = newsController