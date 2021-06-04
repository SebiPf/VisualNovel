namespace Template {
    export async function scene2(): ƒS.SceneReturn {
        console.log("scene2");
        await ƒS.Location.show(locations.tower);
        await ƒS.update(1);
        await ƒS.Speech.tell(characters.Narrator, "scene 2")
        scenecount = "scene3";
        return scenecount;
        
    }
}