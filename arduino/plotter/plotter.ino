#include "StepperMotorDriver.h"

int incomingByte = 0;

const int w = 119;
const int a = 97;
const int s = 115;
const int d = 100;

const int j = 106;
const int k = 107;

void setup() {
  Serial.begin(9600);

}

void loop() {
  if (Serial.available() > 0) {
    // read the incoming byte:
    incomingByte = Serial.read();

    // say what you got:
    if(incomingByte != 10){
      Serial.println(incomingByte);
    }
  }
}
