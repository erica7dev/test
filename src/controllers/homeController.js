module.exports = class HomeController {
  static index(req, res, next) {
    res.status(200).send({
      message: 'Welcome to the home page!',
      doc: '/api-docs'
    })
  }
} 