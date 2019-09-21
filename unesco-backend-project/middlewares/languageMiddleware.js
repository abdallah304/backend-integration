// sets langauge

const express = require('express');

//const langTags = ['en', 'en-US','ar', 'ar-EG'];
//const langTagsEn = ['en', 'en-US']
const langTagsAr = ['ar', 'ar-EG']

const router = express.Router();

router.all('**',(req, res, next)=>{
    // get accept-lang header value.
    // setting req.lag attribute value.
    let lang = req.acceptsLanguages(langTagsAr);

    if(langTagsAr.indexOf(lang) >-1)
        req.language = 'arabic';

    else 
        req.language = 'english';

    next();
});

module.exports = router;