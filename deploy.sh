#!/bin/bash

ssh -v root@162.243.83.116 << EOF

echo '1. Updating sources'
cd /var/www/betomuniz.com/
git checkout --force master
git pull origin master

echo '2. Stop server process'
pm2 stop betomuniz

echo "3. Install dependencies and build"
yarn install && yarn build

echo '4. Restart server process'
pm2 restart betomuniz

echo 'Done!'

EOF
