"use strict";

var assert = require("assert");
var parser = require("./");

[
  // knob1
  [ [ 0xB1, 0x15, 0x00 ], { col: 0, row: 0, val: 0x00, ch: 1 } ],
  [ [ 0xB1, 0x16, 0x10 ], { col: 1, row: 0, val: 0x10, ch: 1 } ],
  [ [ 0xB1, 0x17, 0x20 ], { col: 2, row: 0, val: 0x20, ch: 1 } ],
  [ [ 0xB1, 0x18, 0x30 ], { col: 3, row: 0, val: 0x30, ch: 1 } ],
  [ [ 0xB1, 0x19, 0x40 ], { col: 4, row: 0, val: 0x40, ch: 1 } ],
  [ [ 0xB1, 0x1a, 0x50 ], { col: 5, row: 0, val: 0x50, ch: 1 } ],
  [ [ 0xB1, 0x1b, 0x60 ], { col: 6, row: 0, val: 0x60, ch: 1 } ],
  [ [ 0xB1, 0x1c, 0x70 ], { col: 7, row: 0, val: 0x70, ch: 1 } ],

  // knob2
  [ [ 0xB2, 0x29, 0x00 ], { col: 0, row: 1, val: 0x00, ch: 2 } ],
  [ [ 0xB2, 0x2a, 0x10 ], { col: 1, row: 1, val: 0x10, ch: 2 } ],
  [ [ 0xB2, 0x2b, 0x20 ], { col: 2, row: 1, val: 0x20, ch: 2 } ],
  [ [ 0xB2, 0x2c, 0x30 ], { col: 3, row: 1, val: 0x30, ch: 2 } ],
  [ [ 0xB2, 0x2d, 0x40 ], { col: 4, row: 1, val: 0x40, ch: 2 } ],
  [ [ 0xB2, 0x2e, 0x50 ], { col: 5, row: 1, val: 0x50, ch: 2 } ],
  [ [ 0xB2, 0x2f, 0x60 ], { col: 6, row: 1, val: 0x60, ch: 2 } ],
  [ [ 0xB2, 0x30, 0x70 ], { col: 7, row: 1, val: 0x70, ch: 2 } ],

  // pad
  [ [ 0x93, 0x09, 0x00 ], { col: 0, row: 2, val: 0x00, ch: 3 } ],
  [ [ 0x93, 0x0a, 0x7F ], { col: 1, row: 2, val: 0x7F, ch: 3 } ],
  [ [ 0x93, 0x0b, 0x00 ], { col: 2, row: 2, val: 0x00, ch: 3 } ],
  [ [ 0x93, 0x0c, 0x7F ], { col: 3, row: 2, val: 0x7F, ch: 3 } ],
  [ [ 0x93, 0x19, 0x00 ], { col: 4, row: 2, val: 0x00, ch: 3 } ],
  [ [ 0x93, 0x1a, 0x7F ], { col: 5, row: 2, val: 0x7F, ch: 3 } ],
  [ [ 0x93, 0x1b, 0x00 ], { col: 6, row: 2, val: 0x00, ch: 3 } ],
  [ [ 0x93, 0x1c, 0x7F ], { col: 7, row: 2, val: 0x7F, ch: 3 } ],

  // cursor
  [ [ 0xB4, 0x72, 0x00 ], { col: 0, row: 3, val: 0x00, ch: 4 } ],
  [ [ 0xB4, 0x73, 0x7F ], { col: 1, row: 3, val: 0x7F, ch: 4 } ],
  [ [ 0xB4, 0x74, 0x00 ], { col: 2, row: 3, val: 0x00, ch: 4 } ],
  [ [ 0xB4, 0x75, 0x7F ], { col: 3, row: 3, val: 0x7F, ch: 4 } ]
].forEach(function(testCase) {
  var data = testCase[0];
  var expected = testCase[1];
  var actual = parser.parse(data);

  assert.deepEqual(actual, expected,
    JSON.stringify(data) + "; expected " + JSON.stringify(expected) + "; but got " + JSON.stringify(actual)
  );
});
