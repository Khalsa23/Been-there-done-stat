# Been There Done Stat

This was a personal project I created using the MERN(MongoDb, Express, React, Node.js) stack to keep track of my personal stats in the weekly sunday league I play in for basketball.

The backend was initially deployed on Heroku, but with their free service ending soon, I migrated it to fly.io using their Turboku service.
The frontend is deployed using netlifly. 

The website can be found https://beentheredonestat.netlify.app

Using basic CRUD ideas, a user can create a new stat, read/retrive all current stats saved in the database, update any stats in the database, and delete any stats no longer needed. Users can see these changes made in real time without having to reload the page.

Next steps for this project are to set up login and authentication so users can only see & update their stats instead of eveything from the DB. 
