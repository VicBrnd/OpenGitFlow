const simpleGit = require('simple-git');

async function grep(pattern, gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        const grepSummary = await git.grep(pattern);
        console.log(grepSummary);
    } catch (error) {
        console.error('Erreur lors de la recherche:', error);
    }
}

module.exports = {
    grep
};