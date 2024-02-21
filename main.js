const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
require('./database/db');


//////////////////////////////////   EXPRESS - API-REST  //////////////////////////////////
const restApi = express();

const api = require('./api');
const { notFound, errorHandler } = require('./middlewares/errors.middleware');

restApi.use(express.urlencoded({ extended: true }));
restApi.use(express.json());
restApi.use(cors());

restApi.use("/main", express.static('interface', { 'Content-Type': 'application/javascript' }));
restApi.use("/assets", express.static('interface/assets', { 'Content-Type': 'application/javascript' }));

restApi.use('/', api);
restApi.use(notFound);
restApi.use(errorHandler);
restApi.listen(57806, () => {
  console.log(`Server is up at port http://localhost:57806`);
});

module.exports = restApi;

//////////////////////////////////   EXPRESS - API-REST  //////////////////////////////////



//////////////////////////////////   ELECTRON CONFIG  //////////////////////////////////
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'App',
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    },
    autoHideMenuBar: true,
    maximizable: true
  })

  win.maximize();
  
  // DEV TOOLS
  if (process.env.CONSOLE === "TRUE") { win.webContents.openDevTools(); }
  if (process.env.DEBUG === "TRUE") {
    win.loadURL('http://localhost:57805');
  }else {
    win.loadURL('http://localhost:57806/main/');
  }
}

app.whenReady().then(() => {
  createWindow()
})
//////////////////////////////////   ELECTRON CONFIG  //////////////////////////////////