namespace Template {
    export async function Animation(): ƒS.SceneReturn {

        await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.windburst1, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1, characters.Liraz.pose.windburst2);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.windburst2, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1, characters.Liraz.pose.windburst3);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.windburst3, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1, characters.Liraz.pose.windburst4);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.windburst4, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1, characters.Liraz.pose.windburst5);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.windburst5, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1, characters.Liraz.pose.windburst6);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.windburst6, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1, characters.Liraz.pose.windburst7);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.windburst7, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1, characters.Liraz.pose.windburst8);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.windburst8, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1, characters.Liraz.pose.windburst9);
            await ƒS.Character.hideAll();
            await ƒS.Character.show(characters.Liraz, characters.Liraz.pose.windburst9, ƒS.positionPercent(50, 90))
            await ƒS.update(0.1, characters.Liraz.pose.windburst9);
            await ƒS.Character.hideAll();
            await ƒS.update(0.1);
    }
}