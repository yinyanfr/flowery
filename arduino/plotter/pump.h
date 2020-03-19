#pragma once
#include <Servo.h>

#ifndef PUMP_H
#define PUMP_H

class Pump
{
private:
    Servo servo;
    int pump_pin;
    int pumper = 360;

public:
    Pump(int pin);
    void setup();
    void pump();
};

#endif
