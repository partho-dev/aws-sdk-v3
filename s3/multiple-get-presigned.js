const {S3Client, ListObjectsCommand, GetObjectCommand} = require("@aws-sdk/client-s3")
const {getSignedUrl} = require("@aws-sdk/s3-request-presigner")
const config = require("../utils/config")

let s3 = new S3Client(config)

const get_multi_signed_url = async (bucket) =>{
try {
    // List objects from bucket
        let liestObjects = new ListObjectsCommand({
            Bucket:bucket
        })
        // let keys = await s3.send(command)
        // console.log(keys)
        let {Contents = []} = await s3.send(liestObjects)
        let keys = Contents.map((object)=>object.Key)
        // console.log(Contents)
        console.log("bucketObjects:", keys)

    //Generate signed URL for all the listed keys from the bucket
    const signed_url = await Promise.all(keys.map((key)=>{
        let command = new GetObjectCommand({Bucket:bucket, Key:key})
        return getSignedUrl(s3, command, {expiresIn:20})
    }))
    console.log(`Total objects on the Private bucket is: ${signed_url.length}`)
   console.log(signed_url)

} catch (error) {
    console.log(error)
}
}

get_multi_signed_url("partho-private")