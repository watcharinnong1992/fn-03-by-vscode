const { app } = require('@azure/functions');
const dayjs = require('dayjs')
app.http('httpTrigger01', {
    methods: ['GET', 'POST'],
    authLevel: 'anonymous',
    handler: async (request, context) => {
        context.log(`Http function processed request for url "${request.url}"`);

        const body = await request.text();
        const bodyJson = JSON.parse(body);
        return { 
          headers:{"Content-Type": "application/json"},
          body: JSON.stringify({name: bodyJson.name, isActive:bodyJson.isActive, dateTime: dayjs().format()})
        };
    }
});
