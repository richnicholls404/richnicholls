# Rich Nicholls Portfolio

## Install

**Install gulp (for building the application)**  
Run in console: `npm install gulp && npm install gulp --global`

**Install http-server (for locally serving the application)**  
Run in console: `npm install http-server --global`

## Local hosting

**Start http-server**  
Run in separate console: `npm run start`

**Access application**  
Open URL: `http://localhost:8080`

## Development
A development build has uncompressed and human-readable JS files

**Build just once**  
Run in console: `gulp`

or...

**Build immediately and every time a change is made**  
Run in separate console: `gulp watch`

## Production
A production build will uglify and compress the JS files

**Build just once**
Run in console: `gulp prod`