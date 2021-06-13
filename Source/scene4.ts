namespace Template {
    export async function scene4(): ƒS.SceneReturn {
        console.log("scene4");
        
        await ƒS.Location.show(locations.Black);
        await ƒS.update(1);
        await ƒS.Text.print("You Agreed to go on an Adventure with your friends");
        await ƒS.Text.print("This is the End of this Preview");
        await ƒS.Text.print("Feel free to play again since every choice leads to a different experience");
        await ƒS.Text.print("In this rund you achived the following things");
        
        await ƒS.Text.print("Strength: " + stats.Main.Strength);
        await ƒS.Text.print("Affection to : " + stats.Side1.name + ": " + stats.relside1);
        await ƒS.Text.print("Affection to : " + stats.Side2.name + ": " + stats.relside2);
        await ƒS.Text.print("Affection to : " + stats.Side3.name + ": " + stats.relside3);
        await ƒS.Text.print("Also you collected those items");
        ƒS.Inventory.open();
        await ƒS.Text.print("And if you wonder what will await you in the full version of this Novel");
        await ƒS.Text.print("Expect some Action");
        skill1funktion();
        skill2funktion();
        skill3funktion();
        await ƒS.Text.print("As well As some charakter development");
        

        
        
    }
}