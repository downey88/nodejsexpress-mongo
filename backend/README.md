# nodejs
This is NodeJS Sample Application Using Ubuntu 22.04 (Jammy Jellyfish)

STEP:
1. Installing Web Server and Dependencies on server
    sudo apt install nginx nodejs npm -y
2. Installing first project on local repo folder
    npm init -y && npm install express
3. Installing Product Manager on server
    sudo npm install -g pm2
4. Create self-hosted runner on Settings > Actions > Runner
5. Install svc.sh
    sudo ./svc.sh install
6. Start svc.sh
    sudo ./svc.sh start