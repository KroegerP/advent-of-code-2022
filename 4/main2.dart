import 'dart:io';

void main() {
  List<int> startingPositions;

  File('input.txt').readAsString().then((String contents) {
    final List<String> splitContents = contents.split('\r\n');
    var encompassingPairs = [];
    var pairCount = 0;

    splitContents.asMap().forEach((index, pair) {
      int range0Lower;
      int range0Upper;
      int range1Lower;
      int range1Upper;
      // switch (pair.length) {
      //   case 7: // Shortest Length, all single digit numbers
      //     range0Lower = int.parse(pair[0]);
      //     range0Upper = int.parse(pair[2]);
      //     range1Lower = int.parse(pair[4]);
      //     range1Upper = int.parse(pair[6]);
      //     break;
      //   case 8: // One is longer
      //     range0Lower = int.parse(pair[0]);
      //     range0Upper = int.parse(pair[2]);
      //     range1Lower = int.parse(pair[4]);
      //     range1Upper = int.parse(pair[6]);
      //     break;
      //   case 9:
      //     break;
      //   case 10:
      //     break;
      //   default: // Both long
      //     range0Lower = int.parse(pair[0]);
      //     range0Upper = int.parse(pair[2]);
      //     range1Lower = int.parse(pair[4]);
      //     range1Upper = int.parse(pair[6]);
      // }
      List<String> splitPairs = pair.split(',');
      List<String> firstPair = splitPairs[0].split('-');
      List<String> secondPair = splitPairs[1].split('-');
      range0Lower = int.parse(firstPair[0]);
      range0Upper = int.parse(firstPair[1]);
      range1Lower = int.parse(secondPair[0]);
      range1Upper = int.parse(secondPair[1]);
      // print(range0Upper);
      if (range0Lower <= range1Lower && range1Upper <= range0Upper) {
        encompassingPairs.add(pair);
        pairCount += 1;
      } else if (range0Lower >= range1Lower && range1Upper >= range0Upper) {
        encompassingPairs.add(pair);
        pairCount += 1;
      } else if (range1Lower <= range0Upper && range1Upper > range0Upper) {
        encompassingPairs.add(pair);
        pairCount += 1;
      } else if (range0Upper == range1Lower || range1Lower == range0Upper) {
        encompassingPairs.add(pair);
        pairCount += 1;
      } else if (range1Upper >= range0Lower && range1Lower < range0Lower) {
        encompassingPairs.add(pair);
        pairCount += 1;
      }
    });

    // print(contents.split('\r\n'));

    print(encompassingPairs);
    print(pairCount);
  });
}
