module.exports = {
  apps: [
    {
      name: 'vite-app',
      script: 'npm',
      args: 'run dev',
      env: {
        NODE_ENV: 'development',
      },
    },
    {
      name: 'express-server',
      script: 'server.js',
      env: {
        NODE_ENV: 'production',
        PORT: 3002,
      },
    },
  ],
};
