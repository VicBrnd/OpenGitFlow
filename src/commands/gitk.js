const simpleGit = require('simple-git');

async function gitk(gitDirectory) {
    const git = simpleGit(gitDirectory);
    try {
        await git.outputHandler((command, stdout, stderr) => {
            stdout.pipe(process.stdout);
            stderr.pipe(process.stderr);
        }).raw(['k']);
    } catch (error) {
        console.error('Erreur lors du lancement de gitk:', error);
    }
}

module.exports = {
    gitk
};