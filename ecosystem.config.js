module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    // First application
    {
      name      : "proxy",
      script    : "./main.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {
        NODE_ENV: "production"
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "root",
      host : "wxminapp.com",
      ref  : "origin/master",
      // "ssh_options": "PasswordAuthentication=no",
      "ssh_options": ["StrictHostKeyChecking=no", "PasswordAuthentication=no"],
      repo : "git@github.com:sampsonli/xjporxy.git",
      path : "/root/xjproxy",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.config.js --env proxy"
    }
  }
}
