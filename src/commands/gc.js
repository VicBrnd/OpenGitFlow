const simpleGit = require('simple-git');

async function gc(gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        const gcSummary = await git.gc();
        console.log(gcSummary);
    } catch (error) {
        console.error('Erreur lors du garbage collection:', error);
    }
}

module.exports = {
    gc
};