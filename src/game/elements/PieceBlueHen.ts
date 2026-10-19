/* Problem 4

Modify the class named PieceBlueHen class we created in lecture:

4.1 Add a parameter to the constructor to include the Backpack and pass this
value to the super's constructor. Add a permanent ability with description
ActionType.Attack to the permanent abilities of this Piece.

4.2 A constructor with only the parameters required by the superclass 
    (Do not add more parameters to this constructor)
     - call the super class' constructor (symbol should be set to 'H' by default)
     - add a permanent Abiliity with description ActionType.Attack to its 
     permanent abilities
     BlueHen pieces will always be able to attack

4.3 Update spawn to include a clone of the spawning piece's backpack for the new blue hen.

4.4 Override updateAction method and call increaseNumFlies if the piece can fly, 
then call the super's updateAction.

Test your PieceBlueHen with PieceBlueHen.test.ts
*/
