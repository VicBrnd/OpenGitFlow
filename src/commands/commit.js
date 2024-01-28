const simpleGit = require('simple-git');

async function commit(message, gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        await git.commit(message);
        console.log('Commit créé avec succès');
    } catch (error) {
        console.error('Erreur lors de la création du commit:', error);
    }
}

module.exports = {
    commit
};
