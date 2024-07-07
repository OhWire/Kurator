module.exports = {
  apps: [
    {
      name: 'vite-app',
      script: 'serve',
      args: '-s dist -l 5173',
      env: {
        NODE_ENV: 'production',
      },
      cwd: '/home/PatDoc/KuratorFinal', // Setzen Sie das Arbeitsverzeichnis
    },
    {
      name: 'RegConLog-Server',
      script: './src/server.js',
      interpreter: 'node',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
      },
      cwd: '/home/PatDoc/KuratorFinal', // Setzen Sie das Arbeitsverzeichnis
    },
  ],
};
