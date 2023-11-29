const core = require('@actions/core');
const github = require('@actions/github');
document.write(5+6);
(
    async () => {
        try {
         core.notice("calling action");
        } catch (error) {
            core.setFailed(error.message);
        }
    }
)();
