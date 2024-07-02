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
4. Alternatively, if the aws creds are already configured on local laptop using `aws configure`
    * the SDK automaticallly checks the `.aws` and at `.env` file can read the `default` profile 
    * But, if there are some other profile, the SDK reads that using the key `AWS_PROFILE = cust-1`
    * Other profile can be created using this command `aws configure --profile cust-1`

5. ensure the key name should be same as sdk expects these as input
    * `region`
    * `credentials`
    * `accessKeyId`
    * `secretAccessKey`

6. To make an object publicly available inside a private bucket, we would need to install a package `s3-request-presigner`
    * Get more info from this doc `https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-s3-request-presigner/`
    It needs:
    * 1. install the package `npm install @aws-sdk/s3-request-presigner`
    * 2. `const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");`
    
