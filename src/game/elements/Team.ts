/*Problem 8

8.1 Create a new class named Team that will represent one
player's set of game pieces. It will contain the following members:

- member field of type string for the color of the team
- member field to represent all Pieces that the belongs to the team 
    this should be of an array of Pieces (since they will have more than
    one type of Piece)

8.2 A constructor with two parameters: 
    (parameters should be in the order listed above) that sets the two member fields

8.3 Two accessor methods:
    – getTeamColor and getPieces

8.4 A mutator method named removePieceFromTeam with a Piece
parameter and no return value. This method removes the Piece from the array.

8.5 A mutator method named addPieceToTeam with one parameter Piece and no return value.
    This method should add the Piece to the Team AND set the Piece’s 
    color to the team color.


8.6 toString method is provided for you: 

toString(): string {
        let retString: string = "Team : " + this.getTeamColor() + ":\n";
        for (let eachPiece of this.teamPieces) {
            retString +=
                "\n  " +
                eachPiece.toString() +
                "\t" +
                eachPiece.getBackpack().toString();
        }
        return retString;
    }

Test your Team class with Team.test.ts
*/
