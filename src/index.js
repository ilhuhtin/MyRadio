'use strict';

const Alexa = require('alexa-sdk');
const APP_ID = 'my.ask.skill.id'; // Custom skill ID
const handlers = {

// Functions
    'LaunchMyRadio' : function() {
        const speechOutput = 'Playing My Radio';
        const behavior = 'REPLACE_ALL';
        const url = 'http://myradio/stream'; // My Stream
        const token = 'myRadio';
        const expectedPreviousToken = 'expectedPreviousStream';
        const offsetInMilliseconds = 10000;
        this.response.speak(speechOutput)
                    .audioPlayerPlay(behavior, url, token, expectedPreviousToken, offsetInMilliseconds);
        // this.response.audioPlayerPlay(behavior, url, token, expectedPreviousToken, offsetInMilliseconds);
        this.emit(':responseReady');
    }
};

// Export
exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
