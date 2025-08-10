# actionBlack
To automate task of the Action Black web page

## Table of content
- [Steps to create a Playwright project](#steps-to-create-a-playwright-project)
- [Playwright test cases execution](#playwirght-tests-execution)


## Steps to create a Playwright project:

### Create repository in GitHub

1. Visit github.com.
2. create new repository.
    2.2 Ensure you don't have selected the "Add a README file"

### Create local folder

Navigate using Git Batch and create folder
```
mkdir folderName
```
or
```
git clone https://github.com/gitUser/newRepo.git
```


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

### Instal plugin

```
In VS Code -> Extensions

Playwright Test for VSCode
```


## Playwirght tests execution
Into terminal run the following command:
```
npx playwright test
```

To check the test results run the following command:
```
npx playwright show-report
```
