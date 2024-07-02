// require("dotenv").config()
const {S3Client, ListBucketsCommand} = require("@aws-sdk/client-s3")
const config = require("../utils/config")
// const config = {
//     region: process.env.REGION,
//     credentials : {
//         accessKeyId: process.env.AWS_KEY,
//         secretAccessKey: process.env.AWS_SEC_KEY
//     }
// }
const s3Client = new S3Client(config)
const listBucket = async () =>{
    try {
       const data =  await s3Client.send(new ListBucketsCommand({}))
       console.log(data.Buckets)
    } catch (error) {
        console.log(error)
    }
}

listBucket()

console.log(process.env.AWS_SEC_KEY)