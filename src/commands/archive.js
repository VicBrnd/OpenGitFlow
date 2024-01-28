const simpleGit = require('simple-git');

async function archive(gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        await git.archive();
        console.log('Archive créée avec succès');
    } catch (error) {
        console.error('Erreur lors de la création de l\'archive:', error);
    }
}

module.exports = {
    archive
};