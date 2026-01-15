#!/bin/bash

# Clear screen
clear

echo "===================================================="
echo "      Colorful Theme Release Deploy                 "
echo "===================================================="

# Interactive inputs
read -p "请输入项目名称 [默认: Colorful Theme]: " INPUT_NAME
APP_NAME=${INPUT_NAME:-"Colorful Theme"}

read -p "请输入运行端口 [默认: 3000]: " INPUT_PORT
APP_PORT=${INPUT_PORT:-3000}

echo "===================================================="
echo "项目名称: $APP_NAME"
echo "运行端口: $APP_PORT"
echo "===================================================="

# Function: Detect and install Node.js
install_node() {
    echo ">>> 检测到 Node.js 缺失。正在准备安装..."
    if [ -f /etc/debian_version ]; then
        echo ">>> 检测到 Debian/Ubuntu 系统..."
        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
        sudo apt-get install -y nodejs
    elif [ -f /etc/redhat-release ]; then
        echo ">>> 检测到 CentOS/RHEL 系统..."
        curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
        sudo yum install -y nodejs
    else
        echo "❌ 不支持的操作系统。请手动安装 Node.js: https://nodejs.org/"
        exit 1
    fi
}

# 0. Check Environment
echo ">>> [0/2] 正在检查运行环境..."
if ! command -v node >/dev/null 2>&1; then
    install_node
else
    echo "✅ Node.js 已安装: $(node -v)"
fi

if ! command -v pm2 >/dev/null 2>&1; then
    echo ">>> PM2 缺失。正在执行全局安装..."
    npm install -g pm2
else
    echo "✅ PM2 已安装: $(pm2 -v)"
fi

# 1. Start with PM2
echo ">>> [1/2] 正在清理旧的 PM2 进程..."
pm2 delete "$APP_NAME" 2>/dev/null || true

echo ">>> [2/2] 正在通过 PM2 启动服务 (端口: $APP_PORT)..."
pm2 serve . "$APP_PORT" --name "$APP_NAME" --spa

# Save PM2 state
pm2 save

echo "===================================================="
echo "✅ 部署成功！"
echo "服务名称: $APP_NAME"
echo "访问地址: http://localhost:$APP_PORT"
echo "===================================================="
echo "配置文件: ./config.json"
echo "主入口:   ./index.html"
echo "资源目录: ./assets/"
echo "===================================================="
echo "查看日志: pm2 logs \"$APP_NAME\""
echo "查看状态: pm2 status"
