#pragma once
#include <Arduino.h>

#ifndef JOYSTICK_H
#define JOYSTICK_H

class Joystick
{
private:
    // Arduino pin numbers
    int SW_pin;
    const int X_pin = 0; // analog pin connected to X output
    const int Y_pin = 1; // analog pin connected to Y output

    const int initX = 492;
    const int initY = 505;

public:
    Joystick(int pin);
    void setup();
    char getDirection();
    char getWatering();
};

#endif
