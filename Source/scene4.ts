namespace Template {
    export async function scene4(): ƒS.SceneReturn {
        console.log("scene4");
        await ƒS.Character.hideAll();
        ƒS.update();
        await ƒS.Location.show(locations.Black);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "");
        await ƒS.Text.print("You Agreed to go on an Adventure with your friends");
        await ƒS.Text.print("This is the End of this Preview");
        await ƒS.Text.print("Feel free to play again since every choice leads to a different experience");
        await ƒS.Text.print("In this rund you achived the following things");
        
        await ƒS.Text.print("Strength: " + stats.Main.Strength);
        await ƒS.Text.print("Affection to " + stats.Side1.name + ": " + stats.relside1);
        await ƒS.Text.print("Affection to " + stats.Side2.name + ": " + stats.relside2);
        await ƒS.Text.print("Affection to " + stats.Side3.name + ": " + stats.relside3);
        await ƒS.Text.print("Also you collected those items");
        ƒS.Inventory.open();
        await ƒS.Location.show(locations.Black);
        ƒS.update(3);
        await ƒS.Speech.tell(characters.Narrator, "");
        ƒS.Inventory.close();
        await ƒS.Text.print("And if you wonder what will await you in the full version of this Novel");
        await ƒS.Text.print("Expect some Action");
        await ƒS.Speech.tell(characters.Narrator, "");
        skill1funktion();
        await ƒS.Speech.tell(characters.Narrator, "");
        skill2funktion();
        await ƒS.Speech.tell(characters.Narrator, "");
        skill3funktion();
        await ƒS.Speech.tell(characters.Narrator, "");
        await ƒS.Text.print("As well As some charakter development");
        

        
        
    }
}