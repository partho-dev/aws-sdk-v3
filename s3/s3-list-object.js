const {S3Client, ListObjectsCommand} = require("@aws-sdk/client-s3")
const config = require("../utils/config")


const s3 = new S3Client(config)

const listObject = async (bucketName) =>{
try {
    let objects = {
        Bucket: bucketName
    }
    let data = await s3.send(new ListObjectsCommand(objects))
    console.log(data)
} catch (error) {
    console.log(error)
}
}

listObject("config-bucket-081476396294")