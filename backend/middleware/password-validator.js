const passwordValidator = require('password-validator');

const passwordSchema = new passwordValidator();

passwordSchema
.is().min(8)
.is().max(100)
.has().uppercase()
.has().lowercase()
.has().digits()
.has().symbols();

const passwordValidation = passwordSchema.validate('', {details:true});