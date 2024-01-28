const simpleGit = require('simple-git');

async function checkout(branch, gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        await git.checkout(branch);
        console.log(`Switched to branch '${branch}'`);
    } catch (error) {
        console.error('Erreur lors du changement de branche:', error);
    }
}

module.exports = {
    checkout
};

