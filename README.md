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
The strategy is to have the choice between:
1.1 Using StackBlitz. This serves the Angular code to a StackBlitz website.
1.1 Using a local version of VS Code pointed at the vm code via sshfs and using a terminal in the vm to serve, build, run npm commands, run git commands. This serves the code to the external web address vm.freshfood.rocks. It may be a bit insecure, I'm not sure. The ng serve commands gives out warnings that it isn't.
This strategy failed because sshfs is so slow that the VS Code running locally but using remote files just takes forever to load the typescript and Angular checkers. So I had to abandon that strategy.
1. Instead, I tried an alternate strategy - to run everything locally (Code, npm, ng etc) but forward the port through to the remote server so that it can be accessed with the external web address. The reason I'm worrying about this in the first place, by the way, is because I'm going to be using a Google API key and client ID and I want to be able to restrict them to certain web addresses that I own. But to use the localhost directly you have to add localhost to the allowed requesting URLs in the Google Console configuration, and localhost belong to everyone so it seemed insecure.
1. To arrange this alternate approach:
1.1 I updated the ssh script to allow for port forwarding from the local machine to the vm.
```bash
#!/bin/bash
ssh -X -R vm.freshfood.rocks:5200:localhost:5200 david@vm.freshfood.rocks 
```
Information about this came from [here](https://www.ssh.com/academy/ssh/tunneling-example#local-forwarding)
1.1 I had to change the GatewayPorts setting to yes in the /etc/ssh/sshd_config file.
```bash
sudo vim /etc/ssh/sshd_config
```
then in the file /etc/ssh/sshd_config:
```bash
GatewayPorts yes
```
Then restart the ssh server on the vm.
```bash
sudo systemctl restart ssh
```
1.1. I had to create a hole in the Google vm firewall to allow port 5200 to be open. In the Google Cloud Console, VPC Network, Firewall, Create Firewall policy.
1.1. The ng serve command had to be updated to all for the port forwarding and reading from outside of localhost:
```bash
ng serve --host 0.0.0.0 --port 5200 --allowed-hosts "sheets-shopping-list"
```
1. Set git to store login credentials in memory for a time.
```bash
git config --global credential.helper 'cache --timeout=36000'
```
1. Followed Brad Traversy's video: https://youtu.be/oykl1Ih9pMg
1. 

