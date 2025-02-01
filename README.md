This is the FunkyAutoPlanner project.

To begin developing on the project follow these steps:

1. Navigate to the main folder of the repository (this is the root folder) in your command line
2. Run `npm install` to install all the necessary tools
3. If you have a windows laptop (ONLY): go to main/package.json and change line 28 to read `"start": "set BROWSER=none...` and line 32 to read `"start-electron": "set ELECTRON_START=...`
4. To run the app, run `npm start` to begin the development server
5. Then (without cancelling the above process), run `npm run start-electron` to start up the app. It might take a few seconds to load up.
6. All the changes that you make are instantly added onto the running app. No need to restart the app!

To package the app for non-development use do the following:
1. Navigate to the main folder of the repository (this is the root folder) in your command line
2. Run `npm install` to install all the necessary packages
3. If you have a different architecture than arm64/are using a windows, navigate to lines 65-95 in main/package.json, so that the `arch:` requirements match yours.
4. Then run `npm run build`.
5. Then run `npm run package`, and in the main/dist folder you should see a file that will allow you to download the app!

Contact Team846 about any issues regarding the app!