const { Event } = require ( '../models' )

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
        next ( {
          status: 500,
          msg: 'Internal Server Error'
        } )
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