const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
    }
    const {error, value} = Joi.validate(req.body, schema)
    
    if (error) {
      res.status(400).send({
        error: error.details[0].message
      })
    } else {
      next()
    }
  } 
}