const simpleGit = require('simple-git');

async function branch(name, gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        await git.branch(name);
        console.log('Branche créée avec succès');
    } catch (error) {
        console.error('Erreur lors de la création de la branche:', error);
    }
}

module.exports = {
    branch
};