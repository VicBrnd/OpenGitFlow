const simpleGit = require('simple-git');

async function diff(gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        const diffSummary = await git.diffSummary();
        console.log(diffSummary);
    } catch (error) {
        console.error('Erreur lors de la récupération du diff:', error);
    }
}

module.exports = {
    diff
};