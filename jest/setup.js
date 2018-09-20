const Kermit = require("kermit-pptr");
const mkdirp = require("mkdirp");
const path = require("path");
const fs = require("fs");
const os = require("os");

const DIR = path.join(os.tmpdir(), "jest_puppeteer_global_setup");

module.exports = async function() {
    const { HEADLESS, SLOW } = process.env;
    const kermit = await new Kermit({ 
        headless: HEADLESS,
        slowMo: SLOW ? parseInt(SLOW) : 0
    });
    // store the browser instance so we can teardown it later
    // this global is only available in the teardown but not in TestEnvironments
    global.__BROWSER_GLOBAL__ = kermit;

    // use the file system to expose the wsEndpoint for TestEnvironments
    mkdirp.sync(DIR);
    fs.writeFileSync(path.join(DIR, "wsEndpoint"), kermit.wsEndpoint());
};