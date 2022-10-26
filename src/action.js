const core = require('@actions/core');
const github = require('@actions/github');

async function run() {
    console.log('Hello from my git action one! v3');
}

try {

    console.log("aaaaaaaaaaaaaaaa");
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    console.log("bbbbbbbbbbbbbbbbbb");

    // do then other stuff
    run();


    // Get the JSON webhook payload for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);



}
catch (error)
{
    core.setFailed(error.message);
}
