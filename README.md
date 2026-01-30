#Якщо 1 раз працюємо з Git - Щоб знати хто робить коміт
```
git config --global user.email "novakvova@gmail.com"
git config --global user.email
git config --global user.name "novakvova"
git config --global user.name
 
```

# Command Git
```
git init
git status
git add .
git status
git commit -m"Init simple commit"
```

# Тепер заходимо на github
```
1. Створюємо новий пустий репозиторій
2. GitHub зявляться команди, якими можна закинути зміни з 
вашого локального репозиторія. Ці команди маєти написати у консолі
git branch -M main
git remote add origin https://github.com/novakvova/ReactAndAngular_21KN.git
git push -u origin main
```

#Оновлення проекту на github
```
git status
git add .
git status
git commit -m"Текст коміту, що ми зробили"
git push
```

# Створення проекту
```
npm create vite@latest

npm i bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

npm i react-router-dom
```
