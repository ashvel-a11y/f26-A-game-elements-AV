/* Problem 2 
Define a class named Backpack that has:

2.1 One member field: 
 - an array of Abilities set to an empty array by default
 - a constructor with one parameter that sets this field
  
2.2 A getter for the member field
    getAbilities

2.3 One setter for the member field
    setAbilities

2.4 A method named isAvailable that has one
parameter of type ActionType that represents the description of
an ability. This method returns a boolean representing
whether the backpack has this ability AND it is NOT expired.

2.5 A method named setAbilityExpiration that has three parameters: 
  - an ActionType representing the description of the ability to change
  - a boolean - representing whether the ability should be changed to expired
  - changeAll - boolean - representing whether ALL the abilities with the matching ActionType
     should be changed to that expiration (or only one should be changed)
This method changes the expiration for only the matching ability to the value
passed. This method has no return value.

If only one should be changed - this method will find the FIRST 
instance in the backpack that has a matching description where the 
expired field does NOT match the expired boolean passed. 
If found - the method updates the expired field to match the
valued passed to this method. 

Example 1:   setAbilityExpiration(ActionType.Spawn, true, false)
           would update this backpack's abilities from:           
           " Renew: available "
           " Spawn:available "
           " Spawn:expired "
           " Spawn:available "

           to:
            " Renew: available "           
            " Spawn:expired "
            " Spawn:expired "
            " Spawn:available "
           

Example 2:   setAbilityExpiration(ActionType.Spawn, false, false)
           would update this backpack's abilities from:           
           " Spawn:available "
           " Spawn:expired "
           " Spawn:expired "

           to:
           " Spawn:available "
           " Spawn:available "
           " Spawn:expired "


2.6 A method named setAllExpirations that has one parameter
representing the expiration value that all abilities should
be updated to and sets all the Ability expired fields to the 
value passed.

2.7 A method named emptyBackpack that has no parameters and
doesn't return anything. This method empties the abilities array.

2.8 A clone method for this class that returns a deep copy of this object.

2.9 A toString method that has no parameters and returns the toString value
of each ability in the backpack inside of square brackets. Example:

    [ Spawn:expired Swap:available Renew:expired ]



-You can test your class with Backpack.test.ts
*/
