1. install SDK v3
    `npm install @aws-sdk/client-SERVICE`
    * For S3 client `npm install @aws-sdk/client-s3`
2. Setup AWS Region 
    * `const s3Client = new S3.S3Client({region: 'us-west-2'})`
3. Set Credentials
    * Its good to create a variable which contains all the region and credentials info
```
const config = {
    region: process.env.REGION,
    credentials : {
        accessKeyId: process.env.AWS_KEY,
        secretAccessKey: process.env.AWS_SEC_KEY
    }
}
```
4. ensure the key name should be same as sdk expects these as input
    * `region`
    * `credentials`
    * `accessKeyId`
    * `secretAccessKey`