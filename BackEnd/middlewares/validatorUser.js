const {check,validationResult}=require("express-validator")

exports.registerCheck=()=>[
    check("email",'this field must be a valid email').isEmail(),
    check("name","name is required").notEmpty(),
    check("password","password should have 6 chars").isLength({min:6})
]

exports.validator=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty())
    {return res.status(400).send({errors:errors.array()})}
    next()
}