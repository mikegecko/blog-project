const {Storage} = require('@google-cloud/storage');

const storage = new Storage();
const bucketName = 'blog_image_bucket';
const projectId = 'blog-project-389914';

async function uploadFromMemory(content, destFileName) {
    try{
        await storage.bucket(bucketName).file(destFileName).save(content);
        console.log(`${destFileName} with contents ${content} uploaded to ${bucketName}.`);
    }
    catch(error){
        console.error(error);
    }
}

async function generateSignedUrl(fileName){
    try{
// These options will allow temporary read access to the file
const options = {
    version: 'v2', // defaults to 'v2' if missing.
    action: 'read',
    expires: Date.now() + 1000 * 60 * 60, // one hour
  };

  // Get a v2 signed URL for the file
  const [url] = await storage
    .bucket(bucketName)
    .file(fileName)
    .getSignedUrl(options);

  console.log(`The signed url for ${fileName} is ${url}.`);
  return url;
    }catch(error){
        console.error(error);
    }
}

module.exports = { uploadFromMemory, generateSignedUrl }