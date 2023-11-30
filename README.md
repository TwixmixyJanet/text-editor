# (づ ◕‿◕ )づ JANET'S AWESOME TEXT EDITOR ٩(◕‿◕)۶
_AKA, JATE_

### [View Live Project Here](https://boiling-peak-88999-0c04f9202acc.herokuapp.com/ "JANET'S AWESOME TEXT EDITOR")<br />
![image of JANET'S AWESOME TEXT EDITOR](/public/img/projectimage.png "image of JANET'S AWESOME TEXT EDITOR")
| Technology Used    | Resource URL |
| --------  | ------- |
| NodeJS | https://nodejs.org/en |
| ExpressJS | https://expressjs.com/ |
| path | https://www.npmjs.com/package/path |
| concurrently | https://www.npmjs.com/package/concurrently |
| IndexedDB | https://www.npmjs.com/package/idb |
| Nodemon  | https://www.npmjs.com/package/nodemon |
| Webpack | https://www.npmjs.com/package/webpack |
| @babel | https://www.npmjs.com/package/@babel/core |
| JavaScript | https://developer.mozilla.org/en-US/docs/Web/JavaScript |
| Git       | https://git-scm.com/ |
| GitHub     | https://github.com/ |
| VSCode    | https://code.visualstudio.com/ |

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [About](#about)

## Description:
This project is a on and off-line text editor application. Using Progressive Web Applications to build a text editor that runs in the browser.<br />
<br />

### How to use this app:

* Be sure to have the technologies above
* Download this repository to your local device
* Run `npm i && npm run build`
* Run `npm start`
* Visit localhost:3000 or the Heroku deployment above
* Type into the editor and see updates save to your localstorage

  ## User Story

```md
AS A developer
I WANT to create notes or code snippets with or without an internet connection
SO THAT I can reliably retrieve them for later use
```

## Acceptance Criteria

```md
GIVEN a text editor web application
WHEN I open my application in my editor
THEN I should see a client server folder structure
WHEN I run `npm run start` from the root directory
THEN I find that my application should start up the backend and serve the client
WHEN I run the text editor application from my terminal
THEN I find that my JavaScript files have been bundled using webpack
WHEN I run my webpack plugins
THEN I find that I have a generated HTML file, service worker, and a manifest file
WHEN I use next-gen JavaScript in my application
THEN I find that the text editor still functions in the browser without errors
WHEN I open the text editor
THEN I find that IndexedDB has immediately created a database storage
WHEN I enter content and subsequently click off of the DOM window
THEN I find that the content in the text editor has been saved with IndexedDB
WHEN I reopen the text editor after closing it
THEN I find that the content in the text editor has been retrieved from our IndexedDB
WHEN I click on the Install button
THEN I download my web application as an icon on my desktop
WHEN I load my web application
THEN I should have a registered service worker using workbox
WHEN I register a service worker
THEN I should have my static assets pre cached upon loading along with subsequent pages and static assets
WHEN I deploy to Render
THEN I should have proper build scripts for a webpack application
```

### Lessons Learned 

#### 1. concurrently scripts
In this challenge we were tasks to have multiple scripts run from our package.json. To accomplish this we used the concurrently NPM.
<br />
![lesson 1](public/img/lesson1.png)

#### 2. Webpack
The webpack is the backbone of the PWA. It is a module bundler that plays a crucial role in streamlining the development and deployment of the web applications. It's a versatile toll that helps manage and optimize the various components of a PWA, including JavaScript modules, CSS files, and images.
<br />
![lesson 2](public/img/lesson2.png)
![lesson 2](public/img/lesson2b.png)

#### 3. Service Workers
SWs are scripts that run in the background, separate from the main web page. They act as an intermediary between the web app and the network, providing several benefits for PWAs.
<br />
![lesson 3](public/img/lesson3.png)

#### 4. Local Install
Local installation of PWAs allows users to add these web apps to their devices just like native apps. This provides benefits like easy access to the application, offline accessibility, and push notifications.
<br />
![lesson 4](public/img/lesson4.png)

#### Synopsis
For me, this was one of the most frustrating projects so far. I learned a lot and if I need to create PWAs going forward I have a solid foundation of knowledge now to do so.

## Installation

1. Create a new repository on GitHub, to store this project.
2. Clone the repository to your computer.
3. Copy files to your own repository.
4. Follow the steps for "How to" above
5. Make changes to the code.
6. Commit the changes to the local repo.
7. Push the changes to the remote repo.

## Usage

This is a on and off-line text editor application. If you would like to update and use app follow the installation steps and curate it to your needs. If you would like to use this app, follow the steps under the description 'How to' above and click the link at the top of this page.

## License

MIT License
Copyright (c) 2023 Twixmixy / Janet Webster

<hr />

## About
### Janet Webster
Full Stack MERN Software Engineer in training.

- [GitHub](https://github.com/TwixmixyJanet/)
- [LinkedIn](https://www.linkedin.com/in/twixmixy/)
- [Twitter](https://twitter.com/Twixmixy)
- [WakaTime](https://wakatime.com/@Twixmixy)

![Janet with her dog Winona on the beach](https://avatars.githubusercontent.com/u/117195025?v=4)

<br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

Did you really read down this far? Gold star for you! ⭐
```
You have received 5+ points in being EXTRA
```