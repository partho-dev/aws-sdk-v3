const { S3Client, CreateBucketCommand } = require ("@aws-sdk/client-s3")
const config = require("../utils/config")
const s3 = new S3Client(config)

const createBucket = async (bucketName)=>{
    try {
        const params = {
            Bucket: bucketName,
            CreateBucketConfiguration:{
                LocationConstraint: process.env.REGION
            }
        }

        const data = await s3.send(new CreateBucketCommand(params))
        console.log(data.Bucket)
    } catch (error) {
        console.log(error)
    }
}
let date = new Date()
// console.log(date.getDate())
createBucket(`partho-${date.getDate()}`)