# actionBlack
To automate task of the Action Black web page

## Table of content


## Steps to create a Playwright project:

### Create Playwright project

```
npm init playwright@latest
```

### Options to make this project works with GitHub

```
√ Do you want to use TypeScript or JavaScript? · TypeScript
√ Where to put your end-to-end tests? · tests
√ Add a GitHub Actions workflow? (y/N) · true
√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true
```

### Upload first code to GitHub

```
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/juan23davila/actionBlack.git
git push -u origin main
```