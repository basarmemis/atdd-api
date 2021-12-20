const { Verifier } = require('@pact-foundation/pact');
const bodyparser = require('body-parser');
const path = require('path');
const cors = require('cors');

// Setup provider server to verify
const app = require('express')();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cors());
app.use(require('./todo.routes'));
const server = app.listen("8080");

describe("Pact Verification", () => {
    it("validates the expectations of atdd-api", () => {
        const opts = {
            logLevel: "INFO",
            providerBaseUrl: "http://localhost:8080",
            provider: "atdd-api",
            providerVersion: "1.0.0",
            pactUrls: [
                path.resolve(__dirname, '../pacts/atdd-ui-atdd-api.json')
            ]
        };

        return new Verifier(opts).verifyProvider().then(output => {
            console.log(output);
        }).finally(() => {
            server.close();
        });
    })
});