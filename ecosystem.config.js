module.exports = {
    apps: [{
      name: "my-app",
      script: "./server.js",
      instances: "max",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "production",
      }
    }]
  }