namespace fantasyrpg {
    export async function audiouebung(): ƒS.SceneReturn {
        let signalDelay2s: ƒS.Signal = ƒS.Progress.defineSignal([() => ƒS.Progress.delay(2)]);
        await ƒS.Location.show(locations.Black);
        await ƒS.update();
        await ƒS.Speech.set(characters.Narrator, "Wir sollten uns solangsam beeilen, du weißt Herr Peters ist immer sehr streng was Pünktlichkeit angeht.")
        ƒS.update();
        await ƒS.Sound.play(sound.break, 0);
        await ƒS.Sound.fade(sound.break, 0.3, 4);
        await ƒS.Sound.fade(sound.bell, 1,1);
        signalDelay2s();
        await ƒS.Sound.play(sound.steps, 0.6, true);
        await ƒS.Location.show(locations.Black);
        ƒS.update(2);
        await ƒS.update(transition.clock.duration, transition.clock.alpha, transition.clock.edge);
        await ƒS.Sound.fade(sound.steps, 0,0);
        await ƒS.Sound.fade(sound.break, 0, 1);
        await ƒS.Sound.fade(sound.classroom, 0.1, 2);
        await ƒS.Sound.play(sound.teacher, 0.001, false);
        await ƒS.Sound.fade(sound.classroom, 0.0, 5);



    }
}