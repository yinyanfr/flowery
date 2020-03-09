#include <Stepper.h>
#include <Servo.h>

const int stepsPerRevolution = 1024;  // change this to fit the number of steps per revolution
const int rolePerMinute = 17;         // Adjustable range of 28BYJ-48 stepper is 0~17 rpm

int incomingByte = 0;

const int w = 119;
const int a = 97;
const int s = 115;
const int d = 100;

const int j = 106;

// initialize the stepper library on pins 8 through 11:
Stepper left(stepsPerRevolution, 8, 10, 9, 11);
Stepper right(stepsPerRevolution, 4, 6, 5, 7);

Servo pump;

int pumper = 360;

const int SW_pin = 3; // digital pin connected to switch output
const int X_pin = 0; // analog pin connected to X output
const int Y_pin = 1; // analog pin connected to Y output

void setup() {
  left.setSpeed(rolePerMinute);
  right.setSpeed(rolePerMinute);
  pump.attach(2);
  pinMode(SW_pin, INPUT);
  digitalWrite(SW_pin, HIGH);
  // initialize the serial port:
  Serial.begin(9600);
}

void loop() {

  int tap = digitalRead(SW_pin);
  int x = analogRead(X_pin);
  int y = analogRead(Y_pin);

  if (x - y < 100 && x - y > -100) {

  }

  else if (y > 250 && y < 750) {
    if (x < 500) {
      for (int i = 0; i < stepsPerRevolution; i++) {
        left.step(1);
        right.step(1);
      }
    } else {
      for (int i = 0; i < stepsPerRevolution; i++) {
        left.step(-1);
        right.step(-1);
      }
    }
  }

  else if (x > 250 && x < 750) {
    if (y < 500) {
      for (int i = 0; i < stepsPerRevolution; i++) {
        left.step(1);
        right.step(-1);
      }
    } else {
      for (int i = 0; i < stepsPerRevolution; i++) {
        left.step(-1);
        right.step(1);
      }
    }
  }

  if (tap == 0) {
    pumper *= -1;
    pump.write(pumper);
  }

  if (Serial.available() > 0) {
    // read the incoming byte:
    incomingByte = Serial.read();

    if (incomingByte == w) {
      for (int i = 0; i < stepsPerRevolution; i++) {
        left.step(1);
        right.step(-1);
      }
    }

    if (incomingByte == s) {
      for (int i = 0; i < stepsPerRevolution; i++) {
        left.step(-1);
        right.step(1);
      }
    }

    if (incomingByte == a) {
      for (int i = 0; i < stepsPerRevolution; i++) {
        left.step(1);
        right.step(1);
      }
    }

    if (incomingByte == d) {
      for (int i = 0; i < stepsPerRevolution; i++) {
        left.step(-1);
        right.step(-1);
      }
    }

    if (incomingByte == j) {
      pumper *= -1;
      pump.write(pumper);
    }

    delay(200);

  }
}
