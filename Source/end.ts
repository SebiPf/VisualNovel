namespace fantasyrpg {
    export async function end(): ƒS.SceneReturn {
      console.log("end");

      await ƒS.Text.print("This is the end of the Story"); 
      await ƒS.Text.print("If you liked the game you always have the possibility to play it again"); 
      await ƒS.Text.print("Ecause every decision you did had an effekt on the story"); 
      await ƒS.Text.print("And finally here is what you archived"); 
      await ƒS.Text.print("You archived the following \nstrength: " + stats.Main.Strength + "\nYou went into a Relationship with: " + stats.chosenrel + "\nFriendship strength to " + stats.Side1 + ": " + stats.relside1 + "\nFriendship strength to " + stats.Side2 + ": " + stats.relside2  + "\nFriendship strength to " + stats.Side3 + ": " + stats.relside3); 
      

    }
  }