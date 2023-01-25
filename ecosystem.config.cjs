module.exports = {
  apps: [
    {
      name: 'ArtCompass',
      exec_mode: 'cluster',
      instances: 'max',
      script: './build/index.js',
      node_args: '-r dotenv/config',
      env: {
        PUBLIC_POCKETBASE_URL: "http://dashboard.artcompas.com",
      },
      env_production: {
        NODE_ENV: 'production',
        HOST: "127.0.0.1",
        PORT: 4000,
        ORIGIN: "http://artcompas.com",
        PUBLIC_POCKETBASE_URL: "http://dashboard.artcompas.com",
      },
    },
  ],

  deploy: {
    production: {
      user: 'art',
      host: '89.108.78.111',
      key: 'deploy.key',
      ref: 'origin/main',
      repo: 'git@art-front.github.com:gekh/art-front.git',
      path: '/var/vhosts/art-front/',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.cjs --env production',
    }
  }
};