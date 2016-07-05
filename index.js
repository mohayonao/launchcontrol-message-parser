"use strict";

var PAD = [ 0x09, 0x0a, 0x0b, 0x0c, 0x19, 0x1a, 0x1b, 0x1c ];
var KNOB1 = [ 0x15, 0x16, 0x17, 0x18, 0x19, 0x1a, 0x1b, 0x1c ];
var KNOB2 = [ 0x29, 0x2a, 0x2b, 0x2c, 0x2d, 0x2e, 0x2f, 0x30 ];

function parse(data) {
  var st = data[0]|0;
  var d1 = Math.max(0, Math.min(data[1]|0, 127));
  var d2 = Math.max(0, Math.min(data[2]|0, 127));
  var messageType = st & 0xF0;
  var ch = st & 0x0F;
  var track;

  // control change
  if (messageType === 0xB0) {
    track = KNOB1.indexOf(d1);
    if (track !== -1) {
      return { col: track, row: 0, val: d2, ch: ch };
    }
    track = KNOB2.indexOf(d1);
    if (track !== -1) {
      return { col: track, row: 1, val: d2, ch: ch };
    }
    if (0x72 <= d1 && d1 <= 0x75) {
      return { col: (d1 - 0x72), row: 3, val: d2, ch: ch };
    }
  }

  // note on
  if (messageType === 0x90) {
    track = PAD.indexOf(d1);
    if (track !== -1) {
      return { col: track, row: 2, val: d2, ch: ch };
    }
  }

  return null;
}

module.exports = { parse: parse };
