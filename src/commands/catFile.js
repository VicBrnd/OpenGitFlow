const simpleGit = require('simple-git');

async function catFile(hash, gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        const result = await git.catFile(['-p', hash]);
        console.log(result);
    } catch (error) {
        console.error('Erreur lors de la lecture du fichier:', error);
    }
}

module.exports = {
    catFile
};