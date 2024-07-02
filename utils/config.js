require("dotenv").config()
const config = {
    region: process.env.REGION,
    credentials : {
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SEC_KEY
    }
}

module.exports = config