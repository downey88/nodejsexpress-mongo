#!/bin/bash

cd /home/ubuntu/backend/_work/nodejsbackend/nodejsbackend
# npm test
sudo pm2 describe backend > /dev/null
RUNNING=$?

if [ "${RUNNING}" -ne 0 ]; then
  sudo pm2 start app.js --name=backend
else
  sudo pm2 restart backend
fi;


