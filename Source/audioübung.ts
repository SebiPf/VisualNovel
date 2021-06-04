namespace Template {
    export async function audiouebung(): ƒS.SceneReturn {
        await ƒS.Location.show(locations.pause);
        await ƒS.update();
        //await ƒS.Sound.fade(sound.classroom, 0.1, 1);
        await ƒS.Sound.fade(sound.break, 0.1, 4);
        await ƒS.Sound.play(sound.bell, 0, false);
        await ƒS.Sound.play(sound.steps, 0.6, true);
        await ƒS.Location.show(locations.schule);
        ƒS.update(2);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        await ƒS.Sound.fade(sound.steps, 0,0);
        await ƒS.Sound.fade(sound.break, 0, 1);
        await ƒS.Sound.fade(sound.classroom, 0.1, 4);
        //await ƒS.Sound.play(sound.steps, 1)



    }
}