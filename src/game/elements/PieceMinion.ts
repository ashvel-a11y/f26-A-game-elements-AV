/* Problem 5
5.1 Create a subclass of Piece named PieceMinion that will represent a 
minion character from the Despicable Me movie. 

5.2 This class will inherit members from Piece and additionally include:
- a member field to represent the number of recruits its made - default set to 0 -
- a private readlonly member named MAX_RECRUITS to represent
the number of recruits this minion can make before it can't spawn anymore
Set this value to 3.

5.3 A constructor with the parameters required by the superclass 
     - calls the super class' constructor

5.4 A protected method:
    – increaseNumRecruits - increments number of recruits by 1 
   
5.5 A protected method named updateSpawn that has no
parameters and no return values. It is private and 
should be called every time the
number of recruits is increased. This method will
check the number of current recruits and if it exceeds
the MAX_RECRUITS:
    - it will set all the Spawn Abilities in the backpack to expired
NOTE: After you create this method - call it from 
inside of increaseRecruits.
    
5.6 An implementation for the method named speak that has no parameters
and returns the string 'Bello!' .

5.7 An implementation for method named spawn which will return a copy
of the Minion piece with the following properties:
- symbol - should be the lower case value of spawning object's symbol
- teamColor - should match values of spawning object
- original - should be set to false
- backpack - should be a clone of the spawning object's backpack
- numRecruits - should be set to the spawning object's numRecruits
- numSpawns - should be set to 0
The object doing the spawning should have its number of spawns increased by 1

Note: some of these fields can be set using default values - others cannot

5.8 An override for the updateAction method that:
calls increaseNumRecruits if the ActionType is Recruit, and 
and calls the super's updateAction otherwise

Test your PieceMinion with PieceMinion.test.ts
*/
