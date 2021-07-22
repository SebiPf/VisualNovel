namespace fantasyrpg {
    export async function credits() {
        console.log("credits");
        await ƒS.Location.show(locations.Black);
        await ƒS.update(transition.pixel.duration, transition.pixel.alpha, transition.pixel.edge);
        ƒS.Sound.play(sound.credits, 0.3, true);
        await ƒS.Location.show(locations.mountain)
        ƒS.update();
        ƒS.Text.addClass("contract");
        ƒS.Speech.hide();
        let pages: string[] = ["<strong>Credits</strong> \
      <br>This Game was made with Fudge(Fudge Story)</br>\
      <br>Writing, Gamedesigne, adjusting Assets and Programming was done by Sebastian Pfeiffer</br>\
      <br>The Image that is currently in the Background was created by Vicente Nitti (@vnitti)</br>\
      <br>It was used 1 more time where it was cut in 4 and some characters and text were put over it</br>\
      <br>Lizenz: https://creativecommons.org/licenses/by/4.0/</br>\
      <br>The socials are the following</br>\
      <br>Twitter:   https://twitter.com/vnitti_art</br>\
      <br>Itch.io:   https://vnitti.itch.io/</br>\
      <br>Patreon:   https://patreon.com/vnitti</br>\
      <br>Portfolio: https://deviantart.com/vnitti</br>\
      <br>Seite 1</br>", "<strong>Credits</strong>\
      <br>All other images and Assets are either free to use and can be found on the following website</br>\
      <br>https://itch.io/game-assets/free/tag-pixel-art</br>\
      <br>Feel free to support any of the creators</br>\
      <br>or are drawn by Sebastian Pfeiffer</br>\
      <br>Musik during fights by Brian Paul Zimmerman</br>\
      <br>https://www.youtube.com/watch?v=x6qEh02qAfU&t=3s&ab_channel=TheBigBossTheory</br>\
      <br>Ever other Musik is from VGcomposer and free to use</br>\
      <br><https://vgcomposer.itch.io/action-rpg-music-free/br>\
      <br>Soundeffekts are licence free</br>\
      <br>Seite 2</br>", "<strong>Credits</strong>"];
        let current: number = 0;
        let flip = { back: "Back", next: "Next", done: "Close" };
        let choice: string;
        ƒS.Text.addClass("flip");
        do {
            ƒS.Text.print(pages[current]);
            choice = await ƒS.Menu.getInput(flip, "flip");
            switch (choice) {
                case flip.back: current = Math.max(0, current - 1); break;
                case flip.next: current = Math.min(pages.length - 1, current + 1); break;

            }
        } while (choice != flip.done);
        ƒS.Text.close();
        

    }
}