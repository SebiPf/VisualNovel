namespace Template {
    export async function scene2b(): ƒS.SceneReturn {
        console.log("scene2b");
        await ƒS.Character.hideAll();
        ƒS.update();
        await ƒS.Location.show(locations.camp);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "scene 2")
        scenecount = "scene3";
        return scenecount;
        
    }
}