#!/bin/bash

ssh -v root@162.243.83.116 << EOF

echo '1. Updating sources'
cd /var/www/betomuniz.com/
git checkout --force master
git pull

echo "2. Install dependencies"
npm install && npm run build

echo "3. Restart Server"
sudo pm2 restart betomuniz

echo 'Done!'

EOF
