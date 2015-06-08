Prerequisites:

- Have git and node.js installed
- Know how to use a terminal
- Have a text editor setup under `edit` which highlights .jsx files with ES6 support (see ...)

How to get started with react in two minutes:

- git clone -o ... repo
- cd repo
- npm install
- npm install -g gulp jest
- open your editor (edit .)
- update name and author in package.json
- update app title in src/static/index.html
- npm start
- point your browser at localhost:3000

Start editing! Here is where to place files:

- add a route and a corresponding view (e.g. ContactsView)
- add the black triangle component to the view to test that it works
- congratulations, you're up and running!

Don't forget to commit your changes and push to bitbucket or github!

src/
- components - one directory for each component, except Application.jsx (it is special, it should only reference other components, and should not have any style.)
- static
- theme - css variables, mixins and resets to be used by your components (no actual styles!)
- util   - general functions which are not react-related
- vendor - things you've included from elsewhere, for example iscroll.js

- components/Application.jsx - choose what to display based on the current app state
- config.js - any configuration which may change between environments, generally read from environment variables
- main.js - entry point to your application
- routes.js - define your available routes
