/* Problem 1 
Define a class named Ability that has:

1.1 Two member fields: 
 - description of the ability of type:  ActionType (enumerated Type)
 - permanent - boolean representing whether this 
   ability is an ability that a Piece gets to keep throughout 
   the whole game (true) or an ability that can expire (false)
 - boolean representing whether this ability is expired 
            default value set to false (if not expired we will say it is available)
 - a constructor with two parameters that sets the description and permanent fields
  
1.2 Define getters:
    getDescription, isExpired, isPermanent

1.3 One setter for the Expired field
    setExpired
    Note: description and permanent should not be changed anywhere
     outside this class definition

1.4 A clone method for this class that returns a deep copy of this object

1.5 An equals method that has one Ability parameter and returns a boolean. 
This method compares the description only.
Two instances of Ability will be considered equivalent if their descriptions match.

1.6 A toString method that has no parameters and returns a string containing
the description. 
If the ability is expired it should be followed by ":expired" otherwise
 it should be followed by ":available".
        example of an available ability:  "Spawn:available"
        example of an expired ability:  "Renew:expired"
        

-You can test your class with Ability.test.ts
*/

import { ActionType } from "./Utilities";

