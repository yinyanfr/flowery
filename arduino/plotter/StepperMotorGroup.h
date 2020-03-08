#pragma once
#include <Stepper.h>

#ifndef STEPPERMOTORGROUP_H
#define STEPPERMOTORGROUP_H

class StepperMotorGroup
{
private:
    Stepper left;
    Stepper right;
    int height;
    int width;
    int initX;
    int initY;
    int unit;
    int speed;

public:
    StepperMotorGroup(
        Stepper leftStepper,
        Stepper rightStepper,
        int frameHeight,
        int frameWidth,
        int unitMovement);

    void setup(int rolePerMinute);

    void init(int x, int y);
    void left();
    void right();
    void up();
    void down();
}

#endif
