import { Request, Response } from 'express';


export const urlParser = (req: Request, res: Response) => {
    const urlFormat = req.body.urlFormat;
    const urlinstanceFull = req.body.urlInstance;
    const urlinstance = urlinstanceFull.split('?');

    const urlFormatParts = urlFormat.split('/');
    const urlInstanceParts = urlinstance[0].split('/');

    if (urlInstanceParts.length !== urlFormatParts.length) {
        res.status(400).send({success: false, message: 'UrlFormat and/or urlinstance are not in an correct format.'});
    }
    const parsedUrl: any = {};
    for (let index = 0; index < urlFormatParts.length; index++) {
        if (urlFormatParts[index].includes(':')){
            const keyAttr = urlFormatParts[index].replace(':', '');
            parsedUrl[keyAttr] = urlInstanceParts[index];
        }
    }

    if (urlinstance.length > 1) {
        const urlInstanceParametersParts = urlinstance[1].split('&');
        for (let index = 0; index < urlInstanceParametersParts.length; index++) {
            parsedUrl[urlInstanceParametersParts[index].split('=')[0]] = urlInstanceParametersParts[index].split('=')[1];
        }
    }

    return res.status(200).send({success: true, message: parsedUrl });
};

