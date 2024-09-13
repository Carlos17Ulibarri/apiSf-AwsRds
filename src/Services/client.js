require ('dotenv').config();

const {
    SERVER_PORT,
    RDS_HOSTNAME,RDS_PORT,RDS_USERNAME,RDS_DB_NAME,
    SF_PROTOCOL,SF_LOGIN_DOMAIN,SF_USERNAME,SF_PASSWORD,SF_SECURITY_TOKEN
} = process.env;


//Server
const server = {
    port:SERVER_PORT
};

//PostgreSQL RDS
const pgRds = {
        host:RDS_HOSTNAME,
        port:RDS_PORT,
        user:RDS_USERNAME,
        database:RDS_DB_NAME
};

//Salesforce
const loginUrlSf = SF_PROTOCOL + SF_LOGIN_DOMAIN;
const userSf = {
    username:SF_USERNAME,
    password:SF_PASSWORD + SF_SECURITY_TOKEN,
};

module.exports = {
    pgRds,userSf,loginUrlSf,server
};