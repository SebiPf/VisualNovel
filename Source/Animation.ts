namespace Template {
    export async function Animation(): ƒS.SceneReturn {

        let animation: ƒS.AnimationDefinition = {

            start: { translation: ƒS.positions.bottomcenter, rotation: -20, scaling: new ƒS.Position(0.5, 1.5), color: ƒS.Color.CSS("red", 1) },
            end: { translation: ƒS.positions.bottomright, rotation: 20, scaling: new ƒS.Position(1.5, 0.5), color: ƒS.Color.CSS("blue", 1) },
            duration: 1,
            playmode: ƒS.ANIMATION_PLAYMODE.REVERSELOOP
        };
        await ƒS.Location.show(locations.waterfall);
        await ƒS.Character.animate(characters.Adira, characters.Adira.pose.normal, animation);
        await ƒS.update(2);

    }
}