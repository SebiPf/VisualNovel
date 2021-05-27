namespace Template {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //define transition
  export let transition = {
    clock: {
      duration: 3,
      alpha: "./Images/Transitions/WipesAndOther/cw-side.jpg",
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
    },
    view: {
      name:"view",
      background: "./Images/Backgrounds/view.jpg"
    },
    woodscamp: {
      name:"woodscamp",
      background: "./Images/Backgrounds/woods_camp.png"
    },
    waterfall: {
      name:"waterfall",
      background: "./Images/Backgrounds/waterfall.jpg"
    },
    charselect: {
      name:"charselect",
      background: "./Images/Backgrounds/CharSelect.png"
    },
  };
  // define Carr
  export let characters = {
    Narrator: {
      name: ""
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

  export let items ={
    Healthpotion: {
      name: "Healthpotion",
      description: "Gives you some Health",
      image: "pfad"



    }
  }
  export let scenecount = "";
  
  export let stats ={
    Protagonist: {
      name: "Protagonist"

    },
    char1: {
      points: 0
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
      //{ scene: Text, name: "01_Text", next: scenecount.count},
      //{scene: Decision, name: "02_Test"},
      {scene: SceneChange, name: "1stScene", next: scenecount},
      {id: "first", scene: option1, name: "1stScene", next: scenecount},
      {id: "second", scene: option2, name: "2ndScene"}, 
      {id: "third", scene: option3, name: "3rdScene"}, 
      {id: "fourth", scene: option4, name: "4thScene"}  
    ];
    ƒS.Progress.setData(stats);
    ƒS.Progress.go(scenes);
  }
}
