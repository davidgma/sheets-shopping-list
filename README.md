# Sheets Shopping List

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


# Steps taken. 
I've kept a record of what I did for my own benefit, but if it is useful to anyone else, so much the better.

1. In GitHub, I created a new repository sheets-shopping-list.
1. In a local folder, I created a new Angular project with the same name.
1. Used git commands to overwrite the Github repository with the new Angular project per [these instructions](https://docs.github.com/en/migrations/importing-source-code/using-the-command-line-to-import-source-code/adding-locally-hosted-code-to-github#adding-a-local-repository-to-github-using-git).
```
git branch -m master main
git remote add origin https://github.com/davidgma/sheets-shopping-list.git
git remote -v
git push -f origin main
```
1. Created a script file for making further updates. (And I use git pull when first starting with a different version of the code as I have different computers that I work on).
```bash
1-update-git
#!/bin/bash

if [ $# -gt 0 ]; then
	message=$*
else
	message="Some files updated."
fi


#ng build
git add *
git commit -m "${message}"
git push origin main

```
1. Used to remove a file from git and the local directory:
```
git rm zz_vite.confiig.js
```
1. Checked that it built okay
```
ng build
```
1. Updated Github and then opened the code in StackBlitz.
1. Amended the tsconfig.json file to stop StackBlitz giving an error about helpers and tslib:
```json
"compilerOptions": {
	...
"importHelpers": false,
}
```
1. Created a file to connect to the vm. 2-ssh-vm-david:
```bash
#!/bin/bash
ssh -X david@vm.freshfood.rocks 
```
1. Set up sshfs
```bash
sudo apt install sshfs
sudo vim /etc/fuse.conf
mkdir ~/local/vm
```
Then removed the # before the user_allow_other.
1. Created a file to set up an sshfs directory. 3-sshfs-vm:
```bash
#!/bin/bash
sshfs -o allow_other,idmap=user david@vm.freshfood.rocks:/home/david ~/local/vm 

```
1. Started making changes to the code using StackBlitz.
1. Set up a file for use in the vm to serve the Angular project to port 4200 while allowing this to be accessed from an external web address.
2-serve:
```bash
#!/bin/bash
ng serve --host 0.0.0.0 --port 4200 --allowed-hosts "sheets-shopping-list"
```
1. Followed Brad Traversy's video: https://youtu.be/oykl1Ih9pMg
1. 