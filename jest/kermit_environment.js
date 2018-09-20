const NodeEnvironment = require("jest-environment-node");
const fs = require("fs");
const path = require("path");
const Kermit = require("kermit-pptr");
const os = require("os");

const DIR = path.join(os.tmpdir(), "jest_puppeteer_global_setup");

module.exports = class PuppeteerEnvironment extends NodeEnvironment {
    constructor(config) {
        super(config);
    }

    async setup() {
        await super.setup();
        // get the wsEndpoint
        const wsEndpoint = fs.readFileSync(path.join(DIR, "wsEndpoint"), "utf8");
        if (!wsEndpoint) {
            throw new Error("wsEndpoint not found");
        }
        const { HEADLESS, SLOW } = process.env;
        const kermit = await new Kermit({ 
            headless: HEADLESS,
            slowMo: SLOW ? parseInt(SLOW) : 0
        });

        // connect to kermit
        this.global.__BROWSER__ = await kermit.connect({
            browserWSEndpoint: wsEndpoint,
        });
    }

    async teardown() {
        await super.teardown();
    }

    runScript(script) {
        return super.runScript(script);
    }
}