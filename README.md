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

!cwfeed on/off
// Posts victories to your channel during a Call of Duty Clan War

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

and then fill in the variables

## Testing

```sh
source .env && npm test
```
from the app root.
