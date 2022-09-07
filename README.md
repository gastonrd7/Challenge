# API-CHALLENGE-TO-ROTUNDA-SOFTWARE

## pre requirements
- Install postman
https://www.postman.com/downloads/

 - npm
 - Node version >= 16


## setup
- `npm install`

## To test the exercises "Url_parser_exercise" and "Error_alarm_exercise"
## start
- `npm run start`

If everything worked you will be able to send http get request to `http://localhost:3001/Api`

-----------------------------------

- `Error Alarm Exercise`
The endpoint to use is a GET `http://localhost:3001/Api/problematicEndpoint`

The answer you will get for each answer will be like this.
{
     "success": true,
     "Message": "You generated a new error.",
     "numberOfErrors": 1 (increments by 1 for each call)
}
Note: please have the console open to see if the mails are sent or not every minute.
Send or not send email will be printed in console.

------------------------------------

- `Url Parser Exercise`
The endpoint to use is a POST `http://localhost:3001/Api/urlParser`
Use a POST to be able to send the urlFormat and urlInstance in the body.
In the body send por example:

{
    "urlFormat": "/:version/api/:collection/:id",
    "urlInstance": "/6/api/listings/12?sort=desc&limit=10"
}

Th respones will be por example:
{
    "success": true,
    "message": {
        "version": "6",
        "collection": "listings",
        "id": "12",
        "sort": "desc",
        "limit": "10"
    }
}

If any of the parameters sent do not match, it will return a 400
{
    "success": false,
    "message": "The urlFormat and urlinstance are not in an correct format."
}

------------------------------------

- `Zoo Exercise`
simply use inheritance.
I could have used dependency injection with interfaces, but for the little complexity I had with inheritance it was enough for me.

## start
Please open another terminal standing in the same directory and type
- `npm run zoo`

In console the expected result will be printed:
I'm roar a roar lion roar
Lions grrr suck grrr






