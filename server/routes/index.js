const router = require ( 'express' ).Router()
const axios = require ( 'axios' )
const toImageKit = require ( '../middlewares/imageKit' )
const multer = require ( 'multer' )
const upload = multer()

const userController = require ( '../controllers/userController' )
const newsController = require ( '../controllers/newsController' )
const authentication = require ( '../middlewares/authentication' )


// router.get ( '/register', userController.register )
router.post ( '/login', userController.login )
router.get ( '/news', newsController.read )
// router.get ( '/events', eventController.getAll )
router.get ( '/news/:id', newsController.findOne )
// router.get ( '/events/:id', eventsController.findOne )

router.use ( authentication )
router.post ( '/news', upload.single('galeri'), toImageKit, newsController.create )
// router.post ( '/events', eventController.create )
router.put ( '/news/:id', upload.single('galeri'), toImageKit, newsController.update )
// router.put ( '/event/:id', upload.single('galeri'), toImageKit, newsController.update )
router.delete ( '/news/:id', newsController.delete )
// router.delete ( '/events/:id', eventController.delete )

module.exports = router