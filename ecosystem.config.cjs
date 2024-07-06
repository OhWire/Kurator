module.exports = {
  apps: [
    {
      name: "login",
      script: "./api/login.js",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "register",
      script: "./api/register.js",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "confirm",
      script: "./api/confirm.js",
      watch: true,
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "react-app",
      script: "npm",
      args: "start",
      cwd: "./client",
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
