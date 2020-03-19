#pragma once
#include "Joystick.h"

Joystick::Joystick(int pin)
{
    SW_pin = pin;
}

void Joystick::setup()
{
    pinMode(SW_pin, INPUT);
    digitalWrite(SW_pin, HIGH);
}

char Joystick::getDirection()
{
    int tap = digitalRead(SW_pin);
    int x = analogRead(X_pin);
    int y = analogRead(Y_pin);

    if (x - y < 100 && x - y > -100)
    {
        return 'f';
    }

    else if (y > 250 && y < 750)
    {
        if (x < 500)
        {
            return 'a';
        }
        else
        {
            return 'd';
        }
    }

    else if (x > 250 && x < 750)
    {
        if (y < 500)
        {
            return 'w';
        }
        else
        {
            return 's';
        }
    }

    if(tap == 0){
        return "j";
    }
}

char Joystick::getWatering()
{
    int tap = digitalRead(SW_pin);
    if (tap == 0)
    {
        return 'j';
    }
    else
    {
        return 'k';
    }
}
