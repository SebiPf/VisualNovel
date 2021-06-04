namespace Template {
    export async function audiouebung(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.schule);
        await ƒS.update();
        await ƒS.Sound.fade(sound.classroom, 0.1, 1);
        await ƒS.Sound.fade(sound.break, 0.1, 4);
        await ƒS.Sound.play(sound.bell, 0, false);
        await ƒS.Sound.play(sound.steps, 1, true);



        await ƒS.Location.show(locations.pause);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        await ƒS.Sound.fade(sound.steps, 0,1);
        await ƒS.Sound.fade(sound.break, 0, 6);
        await ƒS.Sound.fade(sound.classroom, 0.1, 4);
        await ƒS.Sound.play(sound.steps, 1)



    }
}