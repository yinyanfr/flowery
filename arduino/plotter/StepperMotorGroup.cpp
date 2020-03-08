#pragma once
#include "StepperMotorGroup.h"

StepperMotorGroup::StepperMotorGroup(
    Stepper leftStepper,
    Stepper rightStepper,
    int frameHeight,
    int frameWidth,
    int unitMovement)
{
    left = leftStepper;
    right = rightStepper;
    height = frameHeight;
    width = frameWidth;
    unit = unitMovement;
}

void StepperMotorGroup::setup(int rolePerMinute)
{
    speed = rolePerMinute;
}

void StepperMotorGroup::init(int x, int y)
{
    initX = x;
    initY = y;
}

void left() {}
void right() {}
void up() {}
void down() {}
