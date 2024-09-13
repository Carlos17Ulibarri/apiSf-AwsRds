const jsforce = require("jsforce");
//const {promisify} = require("util");
const {userSf,loginUrlSf} = require("../client");

const conn = new jsforce.Connection({loginUrlSf});

const access = async()=>{
    try {
        const userInfo = await conn.login(userSf.username,userSf.password);
        console.log("Successfully logged in Salesforce ORG");
        //console.log(userInfo);
    } catch (error) {
        console.error("Failed to log in to Salesforce: ", error);
    }
};

access();
  


//conn.query = promisify(conn.query);
module.exports = {
    conn
};
