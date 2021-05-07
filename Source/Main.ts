namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //define transition
  export let transition = {
    clock: {
      duration: 3,
      alpha: "./Images/grau.jpg",
      edge: 1
    }
  };

  //define sound
  export let sound = {
    //musik
    backgroundTheme: "",
    //Sound
    click: ""
  };
  export let locations = {
    city: {
      name: "city",
      background: "./Images/Backgrounds/bg_city_cloudy.png"
    },
    school: {
      name:"school",
      background: "./Images/Backgrounds/3955292.jpg"
    }
  };
  // define Carr
  export let characters = {
    Narrator: {
      name: ""
    },
    Protagonist: {
      name: "Protagonist"

    },
    Ryu: {
      name: "Ryu: ",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        normal: "./Images/Characters/Ryu_normal.png",
        smile: ""
      }
    },
    Girl: {
      name: "Girl: ",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        normal: "./Images/Characters/placeholder_girl.png",
        smile: ""
      }
    }
  };

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
      { scene: Text, name: "01_Text"},
      {scene: Test, name: "02_Test"} 
    ];
    ƒS.Progress.go(scenes);
  }
}
