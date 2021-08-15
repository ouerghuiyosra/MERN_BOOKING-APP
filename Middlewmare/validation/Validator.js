const { validationResult, check } = require("express-validator");

exports.registerValidate = () => [
  check("email", "Invalid email").isEmail(),
  check("password", "password is required").notEmpty(),
  check("password", "The password must contain min 6  characters, at least one Upper case, at least one lower case, and at least one special character")
  .isLength({ min: 6 })
  .matches(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,),
    check("firstName", "firstName is required").notEmpty(),
    check("lastName", "lastName is required").notEmpty(),
    check("role", "role is required").notEmpty(),

  check("role").custom((value,{req}) => {
    if (value === 'host') {
      if (req.body.adresse === '') {
        throw new Error('addresse is required');
      } else {
        return true;
      }
    } else {
      return true;
    }
  })//customer used to verifier a function
];
exports.loginValidate = () => [
  check("email", "Invalid email").isEmail(),
  check("password", "invalid password").exists(),

];
//addinfo validation
exports.addInformation = () => [
  check('street', 'Street is required').not().isEmpty(),
  check('zipcode', 'Zipcode is required').not().isEmpty(),
  check('city', 'City is required').not().isEmpty(),

];
//addPost
exports.AddPosts =() =>[
  check("type", "type is required").notEmpty(),
  check("persons", "persons is required").notEmpty(),
  check("price", "price is required").notEmpty(),
  check("location", "location is required").notEmpty(),
  check("description", "description is required").notEmpty(),

]
//create booking 
exports.createbooking =() =>[
  check("endDate", "endDate is required").notEmpty(),
  check("startDate", "startDate is required").notEmpty(),
  check("persons", "persons is required").notEmpty(),
]

exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({errors: errors.array()
  })
  }
  next();
};