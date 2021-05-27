namespace Template {
    export async function option3(): ƒS.SceneReturn {
        console.log("3rdScene");
        await ƒS.Location.show(locations.waterfall);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        //return scenecount
        scenecount = ".";
        return scenecount
    }
}