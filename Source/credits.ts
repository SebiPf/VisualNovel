namespace fantasyrpg {
    export async function credits(){
        console.log("credits");
        await ƒS.Location.show(locations.Black);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        ƒS.Sound.play(sound.credits, 0.3, true);
        await ƒS.Location.show(locations.mountain)
        ƒS.update();
        await ƒS.Text.print("This Game was made with Fudge(Fudge Story");
        await ƒS.Text.print("Writing, Gamedesigne, adjusting Assets and Programming was done by Sebastian Pfeiffer");
        await ƒS.Text.print("The Image that is currently in the Background was created by Vicente Nitti (@vnitti)");
        await ƒS.Text.print("It was used 1 more time where it was cut in 4 and some characters and text were put over it");
        await ƒS.Text.print("Lizenz: https://creativecommons.org/licenses/by/4.0/");
        await ƒS.Text.print("The socials are the following");
        await ƒS.Text.print("Twitter:   https://twitter.com/vnitti_art");
        await ƒS.Text.print("Itch.io:   https://vnitti.itch.io/");
        await ƒS.Text.print("Patreon:   https://patreon.com/vnitti");
        await ƒS.Text.print("Portfolio: https://deviantart.com/vnitti");
        await ƒS.Text.print(" All other images and Assets are either free to use and can be found on the following website");
        await ƒS.Text.print("https://itch.io/game-assets/free/tag-pixel-art");
        await ƒS.Text.print("Feel free to support any of the creators");
        await ƒS.Text.print("or are drawn by Sebastian Pfeiffer");
        


        await ƒS.Text.print("Musik during fights by Brian Paul Zimmerman");
        await ƒS.Text.print("https://www.youtube.com/watch?v=x6qEh02qAfU&t=3s&ab_channel=TheBigBossTheory");
        await ƒS.Text.print("Ever other Musik is from VGcomposer and free to use");
        await ƒS.Text.print("https://vgcomposer.itch.io/action-rpg-music-free");
        await ƒS.Text.print("Soundeffekts are licence free");
        

    }
}