const simpleGit = require('simple-git');

async function add(files, gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        await git.add(files);
        console.log('Fichiers ajoutés avec succès');
    } catch (error) {
        console.error('Erreur lors de l\'ajout des fichiers:', error);
    }
}

module.exports = {
    add
};
