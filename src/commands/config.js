const simpleGit = require('simple-git');

async function config(key, value, gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        await git.addConfig(key, value);
        console.log(`Configuration '${key}' ajoutée`);
    } catch (error) {
        console.error('Erreur lors de l\'ajout de la configuration:', error);
    }
}

module.exports = {
    config
};