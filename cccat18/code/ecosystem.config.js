module.exports = {
    apps: [
        {
            name: 'ride',
            script: 'npx ts-node backend/ride/src/main.ts'
        },
        {
            name: 'account',
            script: 'npx ts-node backend/account/src/main.ts'
        },
        {
            name: 'payment',
            script: 'npx ts-node backend/payment/src/main.ts'
        },
        {
            name: 'invoice',
            script: 'npx ts-node backend/invoice/src/main.ts'
        },
        {
            name: 'query',
            script: 'npx ts-node backend/query/src/main.ts'
        },
    ]
}


// module.exports = {
//   apps : [{
//     script: 'index.js',
//     watch: '.'
//   }, {
//     script: './service-worker/',
//     watch: ['./service-worker']
//   }],
//
//   deploy : {
//     production : {
//       user : 'SSH_USERNAME',
//       host : 'SSH_HOSTMACHINE',
//       ref  : 'origin/master',
//       repo : 'GIT_REPOSITORY',
//       path : 'DESTINATION_PATH',
//       'pre-deploy-local': '',
//       'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
//       'pre-setup': ''
//     }
//   }
// };
