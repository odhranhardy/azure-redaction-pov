import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

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
