import S3FileUpload from 'react-s3';
import { aws } from '../Env';

const config = {
    bucketName: aws('bucket_name'),
    dirName: 'mt/phases',
    region: aws('region'),
    accessKeyId: aws('access_key'),
    secretAccessKey: aws('secret_key'),
}

export const S3 = (file) => {
    const d = new Date()
    let split_name = file[0].name.split('.')
    let ext = split_name[split_name.length - 1]
    let blob = file[0].slice(0, file[0].size, file[0].type);
    let newFile = new File([blob], `${d.getTime()}.${ext}`, {
        type: file[0].type
    });

    return new Promise(resolve => {
        S3FileUpload.uploadFile(newFile, config).then(data => {
            return resolve(data)
        }).catch(err => {
            return resolve(err)
        })
    })
}