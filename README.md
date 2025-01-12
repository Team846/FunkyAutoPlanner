This is the FunkyAutoPlanner project.

To begin developing on the project follow these steps:

1. Navigate to the main folder of the repository (this is the root folder) in your command line
2. Run `npm install` to install all the necessary tools
3. If you have a windows laptop (ONLY): go to main/package.json and change line 28 to read `"start": "set BROWSER=none...` and line 32 to read `"start-electron": "set ELECTRON_START=...`
4. To run the app, run `npm start` to begin the development server
5. Then (without cancelling the above process), run `npm run start-electron` to start up the app. It might take a few seconds to load up.
6. All the changes that you make are instantly added onto the running app. No need to restart the app!