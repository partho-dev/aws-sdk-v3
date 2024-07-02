const {S3Client, GetObjectCommand} = require("@aws-sdk/client-s3")
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const config = require("../utils/config")
const s3 = new S3Client(config)

// Get the signed URL for the single object that you have to enter its key manually
// Key is nothing but the name of the object in the bucket

let get_Signed_URL  = async (key) =>{
    try {
        let params = {
            Bucket : "partho-private",
            Key: key
        }
        let command = new GetObjectCommand(params)
        let url = await getSignedUrl(s3, command, {expiresIn:20})
        console.log(`the signed url is ${url}`)
    } catch (error) {
        console.log(error)
    }
}
get_Signed_URL("pod-LB-IP.png")