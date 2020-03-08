#pragma once
#include <Arduino.h>
#include <Stepper.h>
#include <math.h>

#ifndef MotorGroup_H
#define MotorGroup_H

const int stepsPerRevolution = 2048;

class MotorGroup
{
private:
    Stepper left = Stepper(stepsPerRevolution, 8, 9, 10, 11);
    Stepper right = Stepper(stepsPerRevolution, 4, 5, 6, 7);
    int height;
    int width;
    int initX;
    int initY;
    int speed;

public:
    MotorGroup(
        Stepper leftStepper,
        Stepper rightStepper,
        int frameHeight,
        int frameWidth,
        int x,
        int y);

    void init(int x, int y);
    void setup(int rolePerMinute);
    void move_left(int unit);
    void move_right(int unit);
    void move_up(int unit);
    void move_down(int unit);
};

#endif
