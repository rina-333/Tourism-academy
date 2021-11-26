const { Event } = require ( '../models' )
const { modifyTitle } = require('./newsController')

class eventController {
  static read ( req, res, next ) {
    Event.findAll ()
      .then ( data => {
        res.status ( 200 ).json ( { data } )
      } )
      .catch ( err => {
        next ( err )
      } )
  }

  static create ( req, res, next ) {
    const { title, description, date } = req.body
    Event.create ( {
      title,
      image_url: req.image_url,
      description,
      date
    } )
      .then ( ( createEvent ) => {
        res.status ( 201 ).json ( { message: 'Event created', event: createEvent } )
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
  }

  static findOne ( req, res, next ) {
    Event.findByPk ( +req.params.id )
      .then ( ( foundEvent ) => {
        if ( foundEvent ) {
          res.status ( 200 ).json ( { event : foundEvent } )
        } else  {
          throw { status: 404, message: "Event not Found" }
        }
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
  }

  static update ( req, res, next ) {
    const { title, description, date } = req.body
    Event.update ( {
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
      .then ( ( updatedEvent ) => {
        res.status ( 200 ).json ( { message: 'Event has been updated', updatedEvent } )
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
    }
    
    static modifyTitle ( req, res, next ) {
      const { title } = req.body
      Event.update ( {
        title
      }, {
        where: {
          id: +req.params.id
        },
        returning: true
      } )
        .then ( ( modifiedTitleEvent ) => {
          console.log (title,'ini title')
          console.log (req.body, 'ininnii>>>>')
          console.log (+req.params.id, '>>id')
          console.log(modifiedTitleEvent[1][0])
          res.status ( 200 ).json ( { message: `Title Event has been modified`, event: modifiedTitleEvent[1][0] } )
        } )
        .catch ( ( err ) => {
          // console.log('masuk error')
          console.log(err)
          next ( err )
        } )
      // Event.findByPk ( +req.params.id )
      //   .then ( ( findEvent ) => {
      //     console.log (title,'ini title')
      //     console.log (req.body, 'ininnii>>>>')
      //     console.log (+req.params.id, '>>id')
      //     if ( findEvent ) {
      //       findEvent.update ( {
      //         title
      //       } )
      //         .then ( ( modifiedTitleEvent ) => {
      //           console.log(modifiedTitleEvent)
      //           res.status ( 200 ).json ( { message: `Title Event has been modified`, event: modifiedTitleEvent[1] } )
      //         } )
      //         .catch ( ( err ) => {
      //           next ( err )
      //         } )
      //       } else  {
      //         throw { status: 404, message: "Event not Found" }
      //       }
      //     } )
      //     .catch ( ( err ) => {
      //       next ( err )
      //     } )

    // const { id } = +req.params
    // Event.findByPk ( {
    //   where: {
    //     id: id
    //   }
    // } )
    //   .then ( ( modifiedTitleEvent ) => {
    //     modifiedTitleEvent.update ( {
    //       title: title
    //     } )
    //       .then ( () => {
    //         console.log(modifiedTitleEvent)
    //         res.status ( 200 ).json ( { message: `Title Event has been modified`, event: modifiedTitleEvent } )
    //       } )
    //       .catch ( ( err ) => {
    //         console.log ( err )
    //       } )
    //   } )
    //   .catch ( ( err ) => {
    //     next ( err )
    //   } )
  }

  static modifyImage ( req, res, next ) {
    Event.update ( {
      image_url: req.image_url
    }, {
      where: {
        id: +req.params.id
      },
      returning: true
    } )
      .then ( ( modifiedImageEvent ) => {
        res.status ( 200 ).json ( { message: `Image Event has been modified`, event: modifiedImageEvent[1][0] } )
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
  }

  static modifyDescription ( req, res, next ) {
    const { description } = req.body
    Event.update ( {
      description
    }, {
      where: {
        id: +req.params.id
      },
      returning: true
    } )
      .then ( ( modifiedDescEvent ) => {
        res.status ( 200 ).json ( { message: `Description Event has been modified`, event: modifiedDescEvent[1][0] } )
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
  }

  static modifyDate ( req, res, next ) {
    const { date } = req.body
    Event.update ( {
      date
    }, {
      where: {
        id: +req.params.id
      },
      returning: true
    } )
      .then ( ( modifiedDateEvent ) => {
        res.status ( 200 ).json ( { message: `Date Event has been modified`, event: modifiedDateEvent[1][0] } )
      } )
      .catch ( ( err ) => {
        next ( err )
      } )
  }

  static delete ( req, res, next ) {
    Event.destroy ( {
    where: {
      id: +req.params.id
    }
  } )
    .then ( ( deletedEvent ) => {
      if ( deletedEvent ) {
        res.status ( 200 ).json ( { message: 'Selected Event has been deleted' } )
      } else {
        throw { status: 400, message: 'Failed to delete selected Event' }
      }
    } )
    .catch ( ( err ) => {
      next ( err )
    } )
  }
}

module.exports = eventController