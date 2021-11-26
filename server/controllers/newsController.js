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
        next ( err )
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

  static modifyTitle ( req, res, next ) {
    const { title } = req.body
    News.update ( {
      title
    }, {
      where: {
        id: +req.params.id
      },
      returning: true
    } )
      .then ( ( modifiedTitleNews ) => {
        res.status ( 200 ).json ( { message: `Title News has been modified`, news: modifiedTitleNews[1][0] } )
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
  }

  static modifyImage ( req, res, next ) {
    News.update ( {
      image_url: req.image_url
    }, {
      where: {
        id: +req.params.id
      },
      returning: true
    } )
      .then ( ( modifiedImageNews ) => {
        res.status ( 200 ).json ( { message: `Image News has been modified`, news: modifiedImageNews[1][0] } )
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
  }

  static modifyDescription ( req, res, next ) {
    const { description } = req.body
    News.update ( {
      description
    }, {
      where: {
        id: +req.params.id
      },
      returning: true
    } )
      .then ( ( modifiedDescNews ) => {
        res.status ( 200 ).json ( { message: `Description News has been modified`, news: modifiedDescNews[1][0] } )
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
  }

  static modifyDate ( req, res, next ) {
    const { date } = req.body
    News.update ( {
      date
    }, {
      where: {
        id: +req.params.id
      },
      returning: true
    } )
      .then ( ( modifiedDateNews ) => {
        res.status ( 200 ).json ( { message: `Date News has been modified`, news: modifiedDateNews[1][0] } )
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