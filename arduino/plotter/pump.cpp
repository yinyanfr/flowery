#pragma once
#include "pump.h"

Pump::Pump(int pin)
{
    pump_pin = pin;
}

void Pump::setup()
{
    servo.attach(pump_pin);
}

void Pump::pump()
{
    pumper *= -1;
    servo.write(pumper);
}
