#pragma once
#include <Arduino.h>
#include <Stepper.h>
#include "MotorGroup.h"

int incomingByte = 0;

const int w = 119;
const int a = 97;
const int s = 115;
const int d = 100;

const int j = 106;
const int k = 107;

// const int stepsPerRevolution = 2048;  // change this to fit the number of steps per revolution
const int rolePerMinute = 15;         // Adjustable range of 28BYJ-48 stepper is 0~17 rpm

Stepper left = Stepper(stepsPerRevolution, 8, 9, 10, 11);
Stepper right = Stepper(stepsPerRevolution, 4, 5, 6, 7);

MotorGroup smg = MotorGroup(
  left,
  right,
  30,
  20,
  15,
  10
);

void setup() {
  smg.setup(rolePerMinute);
  Serial.begin(9600);
}

void loop() {
  // if (Serial.available() > 0) {
  //   // read the incoming byte:
  //   incomingByte = Serial.read();

  //   // say what you got:
  //   if(incomingByte != 10){
  //     Serial.println(incomingByte);
  //   }
  // }
  smg.move_up(1);
  delay(500);
}
