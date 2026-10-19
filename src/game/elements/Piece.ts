/* Problem 3 
Modify the abstract class named Piece class we created in lecture:
 
3.1 Add two new member fields:
    - a Backpack - by default it should create a new Backpack
    - an array of type Ability to represent the 
            permanant abilities the piece has throughout the game
            by default this array should contain a 
            permanent ability with description ActionType.Move
            (ALL Pieces in this game will have the ability to move)

3.2 Add a parameter to the constructor to include the Backpack and set
this field to the Backpack passed to the constructor.

3.3 Define a getter:
    getBackpack

3.4 Define a method named swapBackpack that has one Piece
parameter and returns nothing. This method swaps the backpack
of this Piece with the other Piece.

3.5 A method named allowableAction that has one ActionType parameter representing
a type of action a Piece can make and returns a boolean.
The method will check if this piece can make the action by checking if
the action is listed in it's permanent abilities member field OR if
the action is in the piece's backpack and is not expired. 
HINT: to check this last requirement you should use the 
isAvailable method you created in Backpack!

3.6 A method named updateAction that has one ActionType parameter
representing an action and doesn't return anything. This 
method calls the backpack's setAbilityExpiration method to set the
expired field for this ability action to true. This should only
update ONE ability in the Piece's backpack. 
(This method will be called by our Action classes every time a piece uses
one of it's abilities from its backpack)

/

Note:No tests for this class.

*/
