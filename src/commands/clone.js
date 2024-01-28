const simpleGit = require('simple-git');

async function clone(url, gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        await git.clone(url);
        console.log('Dépôt cloné');
    } catch (error) {
        console.error('Erreur lors du clonage:', error);
    }
}

module.exports = {
    clone
};