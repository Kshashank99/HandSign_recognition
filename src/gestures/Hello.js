import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose'; 


// describe victory gesture ✌️
const Hello = new GestureDescription('hello');


// thumb:
victoryDescription.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
victoryDescription.addDirection(Finger.Thumb, FingerDirection.VerticalUp, 0.75);
victoryDescription.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// index:
victoryDescription.addCurl(Finger.Index, FingerCurl.NoCurl, 1.0);
victoryDescription.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.75);
victoryDescription.addDirection(Finger.Index, FingerDirection.DiagonalUpLeft, 1.0);

// middle:
victoryDescription.addCurl(Finger.Middle, FingerCurl.NoCurl, 1.0);
victoryDescription.addDirection(Finger.Middle, FingerDirection.VerticalUp, 1.0);
victoryDescription.addDirection(Finger.Middle, FingerDirection.DiagonalUpLeft, 0.75);

// ring:
victoryDescription.addCurl(Finger.Ring, FingerCurl.NoCurl, 1.0);
victoryDescription.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.75);
victoryDescription.addDirection(Finger.Ring, FingerDirection.DiagonalUpLeft, 1.0);

// pinky:
victoryDescription.addCurl(Finger.Pinky, FingerCurl.NoCurl, 1.0);
victoryDescription.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.75);
victoryDescription.addDirection(Finger.Pinky, FingerDirection.DiagonalUpLeft, 1.0);

// // give additional weight to index and ring fingers
// victoryDescription.setWeight(Finger.Index, 2);
// victoryDescription.setWeight(Finger.Middle, 2);

export default Hello;