namespace Template {
    export async function meter(): ƒS.SceneReturn {
        console.log("4thScene");
        await ƒS.Location.show(locations.seafire);
        ƒS.update();
        

        await ƒS.Speech.tell(characters.Narrator, "hi")


        stats.state.a +=55;
        ƒS.update();
    }
}