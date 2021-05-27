namespace Template {
    export async function option1(): ƒS.SceneReturn {
        console.log("1stScene");
        await ƒS.Location.show(locations.seafire);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        scenecount = ".";
        //await ƒS.Character.show(characters.Ryu, characters.Ryu.pose.normal, ƒS.positionPercent(30, 100))
        return scenecount
        
    }
}