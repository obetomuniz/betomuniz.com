#!/bin/bash

ssh -v root@162.243.83.116 << EOF

echo '1. Updating sources'
cd /var/www/betomuniz.com/
git checkout --force master
git pull origin master

echo "3. Install dependencies, build and run the server"
npm install && npm rebuild && npm run build

echo 'Done!'

EOF
