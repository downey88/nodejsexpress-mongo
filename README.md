### Testing React and NodeJS Sample Application using Ubuntu 22.04 ###

1.  Provision Ubuntu 22.04 Server and Installing Dependencies
        sudo apt install nginx nodejs npm -y
2.  Create 2 Local Folder for Backend (NodeJS) and Frontend (React) 
        Clone nodejsbackend and reactfrontend
3.  Go to Backend Folder and install npm express
        npm init -y && npm install express
4.  Create app.js
5.  Go to Frontend Folder and Install React App sample using npx (sample cloning from https://github.com/downey88/reactfrontend)
        npx create-react-app .
6.  Build React 
        npm run build
7.  Create Github Action and choose NodeJS
8.  Create Runner Settings > Actions > Runners > New self-hosted runner, follow the instruction then install & start 
        sudo bash svc.sh install && sudo bash svc.sh start
9.  Install Production Process Manager on Ubuntu 22.04 Server
        sudo npm install -g pm2
10. Go to backend folder on Ubuntu 22.04 Server and start app.js
        sudo pm2 start app.js --name=backend
11. Configure root folder Nginx to frontend
12. Add restart command to Production Process Manager on Backend Workflows
        sudo pm2 restart <name of Production Process Manager, backend as mention before>
