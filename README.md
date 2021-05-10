# Todos

Website that use simple db with 2 entities (1 to many) and works like todo list.

## Installation

Download Node.js.
Create account on mongodb -> +New Project -> Name it -> Create -> Create a New Cluster -> Create Cluster

## Usage

In the Terminal write: npm install.

In mongodb cloud go to Connect in ur cluster -> Connect your application -> copy connection string.

Create file : `.env`

In this file add ur copy connection string, like this: `DB_CONNECTION = mongodb+srv://<User>:<UrPassword>@cluster0.3klgy.mongodb.net/<UrDatabaseName>`

In Terminal: `npm run start`.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
