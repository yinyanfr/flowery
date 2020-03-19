# flowery
### Get Started / Setup guide

### Pre-quis

- JavaScript Runtime : Node.js version 12+

- JavaScript package manager : npm or yarn

- Gradle
- Android or ios development environment

### Server

```bash
cd server
```

Modifier (or create) `.env` pour le serial port d'Arduino

```env
ARDUINO_PORT=YOUR_PORT
```

```bash
npm i
npm start
```

### App

```bash
cd app
yarn // or npm i
yarn run android|ios // or npm run android|ios
```

### Arduino

5V external power supply

Stepper motor left : 8, 9, 10, 11

Stepper motor right : 4, 5, 6, 7

Joystick SW : 3, X : An0, Y : An1

Pump : 2



`simple_plotter` is the naïve version,

`plotter` is a better structured version, where the control of joystick and motors are in separate files

