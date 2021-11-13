const FormData = require (  'form-data' )
const axios = require ( 'axios' )

function toImageKit ( req, res, next ) {
  let api_key = Buffer.from ( process.env.PRIVATE_KEY, "utf-8" ).toString ( "base64" )
  console.log ( api_key, ' >> api_key' )
  console.log (  process.env.PRIVATE_KEY, ' >>> private Key' )
  console.log ( req.file, " >>>> req.file" )

  const data = new FormData()
  data.append ( 'file', req.file.buffer.toString( "base64" ) )
  data.append ( 'fileName', req.file.originalname )

  axios ( {
    url: 'https://upload.imagekit.io/api/v1/files/upload',
    method: 'post',
    headers: {
      Authorization: `Basic ${api_key}`,
      ...data.getHeaders()
    },
    data: data
  } )
    .then ( ( { data } ) => {
      console.log ( data, '>> data imageKit')
      req.image_url = data.url
      next()
    } )
    .catch ( err => {
      console.log ( err.response, '>> ni error image kit' )
      next(err)
    } )
}

module.exports = toImageKit