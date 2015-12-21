#slackBot

This bot was originally created for freenode#reddit-naw.

Now it lives on heroku and uses node.js and Slack's API.

## Slack Integration
This bot makes use of Slack's Incoming and Outgoing Webhook integrations.

## Usage
From Slack

```
!live oh hai loganz
// returns xbox live gamertag status

!urban word
// returns a definition from urban dictionary

!img word
// return an image based on your search term

!ping
// return "Pong!"; mainly for testing
```

## Setup
Checkout the `env` file for necessary setup info 

If you're running on a free tier of Heroku, prevent a sleepy dyno with:

```
export KEEP_DYNO_UP=true
```

## Developing

Once cloned, make sure you run `npm install` to nab all the dependencies. 

You'll also need to set up you Environment before testing. 

```sh
cp env .env
```

and then fill in the variables.

#### ECMAScript 2015
The ES2015 code is in `./src`. The `gulp` buildsystem uses `babel` to transpile into ES5 syntax into the `./dist` directory. Once nodejs supports the ES2015 standard `./dist/` will go away and the app will run from `./src/` or some other hierarchy. Until then, run `gulp babel` in a separate terminal window. It will automatically detect file changes and transpile into the `./dist` directory.

## Testing

```sh
source .env && npm test
```
from the app root.
