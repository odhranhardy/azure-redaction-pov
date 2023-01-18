import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const prefix = (req.query.name || (req.body && req.body.name));
    const responseMessage = JSON.stringify([
        {'key': 'doc1'}, 
        {'key': 'doc2'}
    ])

    context.res.json({
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    });

};

export default httpTrigger;