const {conn} = require("../../Salesforce/connection");

const getCase = async(req,res)=>{

    let data;
    const caseData = ['CaseNumber','Status','Description'];
    const nameSobject = 'Case';

    try {
        data = await conn.sobject(nameSobject)
            //.find(null,caseData)
            .select('*')
            .limit(1);

        res.status(200).json({
            msg:'Data obtained',
            status:true,
            data:data
        });
    } catch (error) {
        res.status(404).json({
            msg:'Data not obtained',
            status:true,
            err:error
        });
    };

};

module.exports = { 
    getCase
};