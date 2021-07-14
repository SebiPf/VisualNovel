namespace fantasyrpg {
    export async function getinput(): ƒS.SceneReturn{
        if(stats.incave == true){
            ƒS.Character.show(characters.Scroll, characters.Scroll.pose.incave, ƒS.positionPercent(50,50))
            ƒS.update();
            }
            else{
              ƒS.Character.show(characters.Scroll, characters.Scroll.pose.normal, ƒS.positionPercent(50,50))
              ƒS.update();
            }
            ƒS.Speech.tell(characters.Narrator, "Can you decifer it?")
            ƒS.Speech.tell(characters.Narrator, "try it");
        stats.message = await ƒS.Speech.getInput();
        if (stats.message == "You can't defeat the Golem"){
            await ƒS.Text.print("Thats the right Message but what does it mean?")
            stats.retreat = true;
        }
        ƒS.Character.hide(characters.Scroll);

    }}