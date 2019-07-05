---
avatar: /imgs/Components-with-magic-wands.png
tags: php,ubuntu
description: 一台全新的Ubuntu服务器,Php环境初始化设定
---
## 安装zsh

```
sudo apt-get install zsh
```

1. 把默认Shell改成zsh

```
chsh -s /bin/zsh
```

2. 安装oh-my-zsh

```
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

3. 安装zsh-syntax-highlighting语法高亮插件

```
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git

echo "source ${(q-)PWD}/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh" >> ${ZDOTDIR:-$HOME}/.zshrc
```

4. 安装zsh-autosuggestions语法历史记录插件

```
git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

# 编辑 ~/.zshrc
# plugins 添加 zsh-autosuggestions
plugins=(git zsh-autosuggestions)

```

5. 重载配置

```
source ~/.zshrc
```

## 安装php
1. 添加 PPA
```
sudo apt-get install python-software-properties software-properties-common

sudo add-apt-repository ppa:ondrej/php

sudo apt-get update
```

2. 安装 `PHP7` 以及所需的一些扩展
```
sudo apt-get install php7.3-fpm php7.3-cli php7.3-mysql php7.3-gd php7.3-imagick php7.3-recode php7.3-tidy php7.3-xmlrpc php7.3-common php7.3-curl php7.3-mbstring php7.3-xml php7.3-bcmath php7.3-bz2 php7.3-intl php7.3-json php7.3-readline php7.3-zip php7.3-opcache
```

## 安装docker

## 从docker安装mysql
```
$ docker run --name mysql8 \
      --restart always \
      -p 3306:3306 \
      -v ~/docker/mysql/data:/var/lib/mysql:rw \
      -v ~/docker/mysql/log:/var/log/mysql:rw \
      -v /etc/localtime:/etc/localtime:ro \
      -e MYSQL_ROOT_PASSWORD=12345678 \
      -d mysql \
      --default-authentication-plugin=mysql_native_password
      
      
# -v ~/docker/mysql/config/my.cnf:/etc/mysql/my.cnf:rw \

```

## 从docker安装redis
```
$ docker run --name redis-server \
      --restart always \
      -p 6379:6379 \
      -v ~/docker/redis/data:/data \
      -d redis \
      --appendonly yes
```


> 预备参考 https://www.cloudbooklet.com/how-to-install-nginx-php-7-3-lemp-stack-on-ubuntu-18-04-google-cloud/