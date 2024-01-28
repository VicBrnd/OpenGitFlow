const simpleGit = require('simple-git');

async function fsck(gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        const fsckSummary = await git.fsck();
        console.log(fsckSummary);
    } catch (error) {
        console.error('Erreur lors de la vérification:', error);
    }
}

module.exports = {
    fsck
};