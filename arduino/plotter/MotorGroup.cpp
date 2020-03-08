#pragma once
#include "MotorGroup.h"

MotorGroup::MotorGroup(
    Stepper leftStepper,
    Stepper rightStepper,
    int frameHeight,
    int frameWidth,
    int x,
    int y)
{
    left = leftStepper;
    right = rightStepper;
    height = frameHeight;
    width = frameWidth;
    initX = x;
    initY = y;
}

void MotorGroup::setup(int rolePerMinute)
{
    speed = rolePerMinute;
}

void MotorGroup::init(int x, int y)
{
    initX = x;
    initY = y;
}

void MotorGroup::move_left(int unit)
{
    double l = sqrt(
        pow((double)initX - (double)unit, 2.0) +
        pow((double)height - (double)initY, 2.0));

    double r = sqrt(
        pow(((double)width - ((double)initX - (double)unit)), 2.0) +
        pow((double)height - (double)initY, 2.0));

    Serial.println(l);
    Serial.println(r);

    left.step((int)round(l));
    right.step((int)round(r));
}

void MotorGroup::move_right(int unit)
{
    double l = sqrt(
        pow((double)initX + (double)unit, 2.0) +
        pow((double)height - (double)initY, 2.0));

    double r = sqrt(
        pow(((double)width - ((double)initX + (double)unit)), 2.0) +
        pow((double)height - (double)initY, 2.0));

    Serial.println(l);
    Serial.println(r);

    left.step((int)round(l));
    right.step((int)round(r));
}

void MotorGroup::move_up(int unit)
{
    double l = sqrt(
        pow((double)initX, 2.0) +
        pow((double)height - ((double)initY + (double)unit), 2.0));

    double r = sqrt(
        pow(((double)width - (double)initX), 2.0) +
        pow((double)height - ((double)initY + (double)unit), 2.0));

    Serial.println(l);
    Serial.println(r);

    left.step(2048);
    right.step(2048);
}

void MotorGroup::move_down(int unit)
{
    double l = sqrt(
        pow((double)initX, 2.0) +
        pow((double)height - ((double)initY - (double)unit), 2.0));

    double r = sqrt(
        pow(((double)width - (double)initX), 2.0) +
        pow((double)height - ((double)initY - (double)unit), 2.0));

    Serial.println(l);
    Serial.println(r);

    left.step((int)round(l));
    right.step((int)round(r));
}
