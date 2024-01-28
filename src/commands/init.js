const simpleGit = require('simple-git');

async function init(gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        await git.init();
        console.log('Dépôt Git initialisé');
    } catch (error) {
        console.error('Erreur lors de l\'initialisation:', error);
    }
}

module.exports = {
    init
};
