namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //define transition
  export let transition = {
    clock: {
      duration: 3,
      alpha: "",
      edge: 1
    }
  }

  //define sound
  export let sound = {
    //musik
    backgroundTheme: "",
    //Sound
    click: ""
  }
  export let locations = {
    city: {
      name: "city",
      background: "./Images/Bild.jpg"
    }
  }
  // define Carr
  export let characters = {
    Narrator: {
      name: ""
    },
    Protagonist: {
      name: "Protagonist"

    },
    Ryu: {
      name: "Ryu",
      origin: ƒ.ORIGIN2D.BOTTOMRIGHT,
      pose: {
        normal: "",
        smile: ""
      }
    }
  }

  document.addEventListener("keydown", hndKeypress);
  async function hndKeypress(_event: KeyboardEvent): Promise<void> {
    switch (_event.code) {
      case ƒ.KEYBOARD_CODE.F4:
        console.log("Save");
        await ƒS.Progress.save();
        break;

      case ƒ.KEYBOARD_CODE.F9:
        console.log("Load");
        await ƒS.Progress.load();
        break;
    }
  }
  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      { scene: Text, name: "Scene" }
    ];
    ƒS.Progress.go(scenes);
  }
}
