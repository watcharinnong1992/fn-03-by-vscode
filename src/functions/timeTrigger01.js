const { app } = require('@azure/functions');

app.timer('timeTrigger01', {
    schedule: '*/30 * * * *',
    handler: (myTimer, context) => {
        context.log('Timer function processed request.');
    }
});
