#pragma once
#include "MotorGroup.h"

int math(int m, int n)
{
    if (m > n)
    {
        return m;
    }
    return n;
}

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

    int round_l = (int)round(l);
    int round_r = (int)round(r);

    for (int i = 0; i < max(round_l, round_r); i++)
    {
        if (i < round_l)
        {
            left.step(1);
        }
        if (i < round_r)
        {
            right.step(1);
        }
    }
}

void MotorGroup::move_right(int unit)
{
    double l = sqrt(
        pow((double)initX + (double)unit, 2.0) +
        pow((double)height - (double)initY, 2.0));

    double r = sqrt(
        pow(((double)width - ((double)initX + (double)unit)), 2.0) +
        pow((double)height - (double)initY, 2.0));

    int round_l = (int)round(l);
    int round_r = (int)round(r);

    for (int i = 0; i < max(round_l, round_r); i++)
    {
        if (i < round_l)
        {
            left.step(-1);
        }
        if (i < round_r)
        {
            right.step(-1);
        }
    }
}

void MotorGroup::move_up(int unit)
{
    double l = sqrt(
        pow((double)initX, 2.0) +
        pow((double)height - ((double)initY + (double)unit), 2.0));

    double r = sqrt(
        pow(((double)width - (double)initX), 2.0) +
        pow((double)height - ((double)initY + (double)unit), 2.0));

    int round_l = (int)round(l);
    int round_r = (int)round(r);

    for (int i = 0; i < max(round_l, round_r); i++)
    {
        if (i < round_l)
        {
            left.step(1);
        }
        if (i < round_r)
        {
            right.step(-1);
        }
    }
}

void MotorGroup::move_down(int unit)
{
    double l = sqrt(
        pow((double)initX, 2.0) +
        pow((double)height - ((double)initY - (double)unit), 2.0));

    double r = sqrt(
        pow(((double)width - (double)initX), 2.0) +
        pow((double)height - ((double)initY - (double)unit), 2.0));

    int round_l = (int)round(l);
    int round_r = (int)round(r);

    for (int i = 0; i < max(round_l, round_r); i++)
    {
        if (i < round_l)
        {
            left.step(-1);
        }
        if (i < round_r)
        {
            right.step(1);
        }
    }
}
