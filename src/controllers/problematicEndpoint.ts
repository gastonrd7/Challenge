import { Request, Response } from 'express';

interface Ierros {
    id: number;
    message: string;
    Date: Date;
}

const errorList: Ierros[] = [];

const errorCount = (): number => {
    return errorList.filter(item => item.Date >= new Date(new Date().getTime() - 60000)).length;
}

const sendEmail =() => {
    const numberOfLastMinuteErrors = errorCount();
    numberOfLastMinuteErrors <= 10 ? console.log(`No email is sent. Number of errors in the last minute: ${numberOfLastMinuteErrors}`) : console.log(`Mail is sent with a number of errors at the last minute: ${numberOfLastMinuteErrors}`)
}

const logError = (error: string) => {
    errorList.push({ id: errorList.length, message: error, Date: new Date()});
}

setInterval(sendEmail, 60000);



export const problematicEndpoint = (_req: Request, res: Response) => {
    logError('Endpoint forced failure');
    const numberOfLastMinuteErrors = errorCount();
    return res.status(200).send({
        success: true, 
        Message: 'You generated a new error.', 
        numberOfErrors: errorList.length});
};



