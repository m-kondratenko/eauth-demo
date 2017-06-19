# Auth Demo App

This is a demo app showing oauth authorization using FOSOAuthServerBundle, FOSRestBundle, FOSUserBundle bundles.

On the main page you should insert login-password. If such user is presented in DB, access_token will be given. 
Login form then will be hidden and few buttons with log out button will be shown. 
"Show" buttons generate random text using fzaninotto/faker. "Log out" button clears access_token and shows back login form.

# Installation:

git clone "RepoURL" "ProjectName"

composer install

php bin/console doctrine:database:create

php bin/console doctrine:schema:update --force

# Create An OAuth Client

INSERT INTO `oauth2_clients` VALUES (NULL, '3bcbxd9e24g0gk4swg0kwgcwg4o8k8g4g888kwc44gcc0gwwk4', 'a:0:{}', '4ok2x70rlfokc8g0wws8c8kwcokw80k44sg48goc0ok4w0so0k', 'a:1:{i:0;s:8:"password";}');

# Create A User

$ php app/console fos:user:create

Please choose a username:admin

Please choose an email:admin@example.com

Please choose a password:test

Created user admin

# Requirements

PHP 7+
