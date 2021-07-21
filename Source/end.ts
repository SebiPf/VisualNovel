namespace fantasyrpg {
    export async function end(): ƒS.SceneReturn {
      console.log("end");

      await ƒS.Text.print("This is the end of the Story"); 
      await ƒS.Text.print("If you liked the game you always have the possibility to play it again"); 
      await ƒS.Text.print("Ecause every decision you did had an effekt on the story"); 
      await ƒS.Text.print("And finally here is what you archived"); 
      await ƒS.Text.print("You archived the following \n strength: " + stats.Main.Strength + "\n You went into a Relationship with: " + stats.chosenrel + "\n Friendship strength to " + stats.Side1.name + ": " + stats.relside1 + "\n Friendship strength to " + stats.Side2.name + ": " + stats.relside2  + "\n Friendship strength to " + stats.Side3.name + ": " + stats.relside3); 
      

    }
  }