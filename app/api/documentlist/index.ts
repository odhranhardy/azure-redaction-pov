import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    context.log('HTTP trigger function processed a request.');
    const prefix = (req.query.name || (req.body && req.body.name));
    const responseMessage = JSON.stringify([
        {'key': 'doc1'}, 
        {'key': 'doc2'}
    ])

    //remove done fn from context obj so koa can not call it
    // see https://stackoverflow.com/questions/54627141/how-to-fix-choose-either-to-return-a-promise-or-call-done-in-azure-functions
    try {
        context.done = () => {}
    } catch (err) {
        console.log(err);
    }

    context.res.json({
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    });

};

export default httpTrigger;