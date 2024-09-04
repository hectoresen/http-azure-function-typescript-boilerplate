import { HttpRequest, HttpResponseInit, InvocationContext } from "@azure/functions";

export class AppHandler {
    constructor() {}

    async httpExample(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
        return {
            headers: {
                'Content-Type': 'application/json'
            },
            body: 'Hello world'
        };
    }
}
