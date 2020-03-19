#pragma once
#include <Arduino.h>
#include <Stepper.h>

#include "MotorGroup.h"
#include "Joystick.h"
#include "pump.h"

int incomingByte = 0;

const int w = 119;
const int a = 97;
const int s = 115;
const int d = 100;

const int j = 106;

const int stepsPerRevolution = 2048; // change this to fit the number of steps per revolution
const int rolePerMinute = 15;        // Adjustable range of 28BYJ-48 stepper is 0~17 rpm

const int unit = 100;

Stepper left = Stepper(stepsPerRevolution, 8, 9, 10, 11);
Stepper right = Stepper(stepsPerRevolution, 4, 5, 6, 7);

MotorGroup smg = MotorGroup(
    left,
    right,
    30,
    20,
    15,
    10);

Joystick stick = Joystick(3);

Pump p = Pump(2);

void setup()
{
  smg.setup(rolePerMinute);
  stick.setup();
  p.setup();
  Serial.begin(9600);
}

void loop()
{
  switch (stick.getDirection())
  {
  case 'w':
    smg.move_up(unit);
    break;
  case 'a':
    smg.move_left(unit);
    break;
  case 's':
    smg.move_down(unit);
    break;
  case 'd':
    smg.move_right(unit);
    break;
  case 'j':
    p.pump();
    break;
  default:
    break;
  }

  if (Serial.available() > 0)
  {
    // read the incoming byte:
    incomingByte = Serial.read();

    if (incomingByte == w)
    {
      smg.move_up(unit);
    }

    if (incomingByte == s)
    {
      smg.move_down(unit);
    }

    if (incomingByte == a)
    {
      smg.move_left(unit);
    }

    if (incomingByte == d)
    {
      smg.move_right(unit);
    }

    if (incomingByte == j)
    {
      p.pump();
    }
  }

    delay(200);
  }
