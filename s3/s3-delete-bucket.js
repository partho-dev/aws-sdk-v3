const {S3Client, DeleteBucketCommand} = require("@aws-sdk/client-s3")
const config = require("../utils/config")

const s3 = new S3Client(config)

const deleteBucket = async (bucketName) =>{
    try {
        let params = {
            Bucket: bucketName
        }
        let data = await s3.send(new DeleteBucketCommand(params))
        console.log(`The bucket ${params.Bucket} is deleted`)
    } catch (error) {
        console.log(error)
    }
}

deleteBucket("partho-2")