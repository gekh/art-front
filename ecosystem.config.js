module.exports = {
  apps: [
    {
      name: 'ArtCompass',
      exec_mode: 'cluster',
      instances: 'max',
      script: './build/index.js',
      env_production: {
        NODE_ENV: 'production',
        HOST: "127.0.0.1",
        PORT: 4000,
        ORIGIN: "http://artcompas.com",
      },
    },
  ],

  deploy: {
    production: {
      user: 'art',
      host: '89.108.78.111',
      ref: 'origin/main',
      repo: 'git@github.com:gekh/art-front.git',
      path: '/var/vhosts/art-front/',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
    }
  }
};