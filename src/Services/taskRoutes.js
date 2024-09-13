const express = require("express");
const {getCase} = require ("./Salesforce/Case/getCase");
const router = express.Router();

//Salesforce
const sfRoutes = ()=>{
    router.route('/Case')
        .get(getCase)
        //.post()
    
    return router
};
module.exports = {
    sfRoutes
};