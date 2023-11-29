const core = require('@actions/core');
const github = require('@actions/github');
let x=5
let y=6
z=x+y
console.log(z)
(
    async () => {
        try {
         core.notice("calling action");
        } catch (error) {
            core.setFailed(error.message);
        }
    }
)();
