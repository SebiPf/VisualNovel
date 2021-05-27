namespace Template {
    export async function option2(): ƒS.SceneReturn{
        console.log("2ndScene");
        await ƒS.Location.show(locations.view);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        
        scenecount = ".";
        return scenecount
        
    }
}