const simpleGit = require('simple-git');

async function fetch(gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        await git.fetch();
        console.log('Dépôt mis à jour');
    } catch (error) {
        console.error('Erreur lors de la mise à jour:', error);
    }
}

module.exports = {
    fetch
};