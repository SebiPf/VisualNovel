namespace fantasyrpg {
  export async function end(): ƒS.SceneReturn {
    console.log("end");
    ƒS.Sound.play(sound.normal, 0.3, true);
    await ƒS.Location.show(locations.Black);
    await ƒS.update(1);
    if(stats.relside1>100){
      stats.relside1 = 100;
    }
    if(stats.relside2>100){
      stats.relside2 = 100;
    }
    if(stats.relside3>100){
      stats.relside3 = 100;
    }
    if(stats.Main.Strength>100){
      stats.Main.Strength = 100;
    }
    await ƒS.Text.print("This is the end of the Story");
    await ƒS.Text.print("If you liked the game you always have the possibility to play it again");
    await ƒS.Text.print("Bcause every decision you did had an effekt on the story and its ending");
    await ƒS.Text.print("And finally here is what you archived");
    await ƒS.Text.print("You archived the following \n strength: " + stats.Main.Strength)
    await ƒS.Text.print("You went into a Relationship with: " + stats.chosenrel);
    await ƒS.Text.print("Friendship strength to " + stats.Side1.name + ": " + stats.relside1);
    await ƒS.Text.print("Friendship strength to " + stats.Side2.name + ": " + stats.relside2);
    await ƒS.Text.print("Friendship strength to " + stats.Side3.name + ": " + stats.relside3);

  }
}