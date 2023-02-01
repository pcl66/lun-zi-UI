rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m 'new version'
git branch -M main
git remote add origin https://github.com/pcl66/light-ui-website.git
git push -f -u origin main
cd -