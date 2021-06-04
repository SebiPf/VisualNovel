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
    seafire: {
      name: "seafireplace",
      background: "./Images/Backgrounds/sea_fireplace.jpg"
    },
    shore: {
      name:"shore",
      background: "./Images/Backgrounds/shore.jpg"
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
    Black: {
      name:"Black",
      background: "./Images/Backgrounds/black.png"
    },
    bridge: {
      name:"bridge",
      background: "./Images/Backgrounds/bridge.jpg"
    },
    camp: {
      name:"camp",
      background: "./Images/Backgrounds/camp.png"
    },
    dungeonentranceclose: {
      name:"Dungeonentranceclose",
      background: "./Images/Backgrounds/dungeon_entance_close.jpg"
    },
    dungeonentrance: {
      name:"dungeonentrance",
      background: "./Images/Backgrounds/dungeon_entrance.png"
    },
    dungeonstairs: {
      name:"dungeonstair",
      background: "./Images/Backgrounds/dungeon_stair.jpg"
    },
    moutain: {
      name:"fieldmoutain",
      background: "./Images/Backgrounds/field_moutain.png"
    },
    fight: {
      name:"fight",
      background: "./Images/Backgrounds/fight.jpg"
    },
    sea: {
      name:"sea",
      background: "./Images/Backgrounds/sea.jpg"
    },
    tower: {
      name:"towerwoods",
      background: "./Images/Backgrounds/tower_woods.png"
    },
    waterfallhideout: {
      name:"waterfallhideout",
      background: "./Images/Backgrounds/waterfall_hideout.jpg"
    },
    waterfalls: {
      name:"waterfalls",
      background: "./Images/Backgrounds/waterfalls.png"
    },
    window: {
      name:"windowsunrise",
      background: "./Images/Backgrounds/window_sunrise.gif"
    },
    woodsflowers: {
      name:"woodsflowers",
      background: "./Images/Backgrounds/woods_flowers.jpg"
    },
    woodspath: {
      name:"woodspath",
      background: "./Images/Backgrounds/woods_path.png"
    },

  };
  // define Carr
  export let characters = {
    Narrator: {
      name: ""
    },
    Main:{
      name: "",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "",
        happy: ".",
        veryhappy: "",
        unhappy: "",
        angry: "",
        arrogant: "",
        mediumlove: "",
        inlove: "",
      },
      Skill1: "",
      Skill2: "",
      Skill3: ""
    },
    
    Samara: {
      name: "Samara: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Characters/ArchMage/ArchMage.png",
        happy: "./Images/Characters/ArchMage/ArchMageHappy.png",
        veryhappy: "./Images/Characters/ArchMage/ArchMageVeryHappy.png",
        unhappy: "./Images/Characters/ArchMage/ArchMageUnHappy.png",
        angry: "./Images/Characters/ArchMage/ArchMageAngry.png",
        arrogant: "./Images/Characters/ArchMage/ArchMageArrogant.png",
        mediumlove: "./Images/Characters/ArchMage/ArchMageMediumLove.png",
        inlove: "./Images/Characters/ArchMage/ArchMageInLove.png",
        fireball1: "./Images/Characters/ArchMage/Fireball/AM_FireBall_1.png",
        fireball2: "./Images/Characters/ArchMage/Fireball/AM_FireBall_2.png",
        fireball3: "./Images/Characters/ArchMage/Fireball/AM_FireBall_3.png",
        fireball4: "./Images/Characters/ArchMage/Fireball/AM_FireBall_4.png",
        fireball5: "./Images/Characters/ArchMage/Fireball/AM_FireBall_5.png",
        fireball6: "./Images/Characters/ArchMage/Fireball/AM_FireBall_6.png",
        fireball7: "./Images/Characters/ArchMage/Fireball/AM_FireBall_7.png",
        fireball8: "./Images/Characters/ArchMage/Fireball/AM_FireBall_8.png",
        fireball9: "./Images/Characters/ArchMage/Fireball/AM_FireBall_9.png",
        lightning1: "./Images/Characters/ArchMage/Lightning/AM_Lightning_1.png",
        lightning2: "./Images/Characters/ArchMage/Lightning/AM_Lightning_2.png",
        lightning3: "./Images/Characters/ArchMage/Lightning/AM_Lightning_3.png",
        lightning4: "./Images/Characters/ArchMage/Lightning/AM_Lightning_4.png",
        lightning5: "./Images/Characters/ArchMage/Lightning/AM_Lightning_5.png",
        lightning6: "./Images/Characters/ArchMage/Lightning/AM_Lightning_6.png",
        lightning7: "./Images/Characters/ArchMage/Lightning/AM_Lightning_7.png",
        lightning8: "./Images/Characters/ArchMage/Lightning/AM_Lightning_8.png",
        lightning9: "./Images/Characters/ArchMage/Lightning/AM_Lightning_9.png",
        windstrike1: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_1.png",
        windstrike2: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_2.png",
        windstrike3: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_3.png",
        windstrike4: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_4.png",
        windstrike5: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_5.png",
        windstrike6: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_6.png",
        windstrike7: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_7.png",
        windstrike8: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_8.png",
        windstrike9: "./Images/Characters/ArchMage/Windstrike/AM_WindStrike_9.png",
      }
    },
    Hando: {
      name: "Hando: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Characters/Archer/Archer1.png",
        happy: "./Images/Characters/Archer/ArcherHappy.png",
        veryhappy: "./Images/Characters/Archer/ArcherVeryHappy.png",
        unhappy: "./Images/Characters/Archer/ArcherUnHappy.png",
        angry: "./Images/Characters/Archer/ArcherAngry.png",
        arrogant: "./Images/Characters/Archer/ArcherArrogant.png",
        mediumlove: "./Images/Characters/Archer/ArcherMediumLove.png",
        inlove: "./Images/Characters/Archer/ArcherInLove.png",
        bowshot1: "./Images/Characters/Archer/BowShot/AA_shot_1.png",
        bowshot2: "./Images/Characters/Archer/BowShot/AA_shot_2.png",
        bowshot3: "./Images/Characters/Archer/BowShot/AA_shot_3.png",
        bowshot4: "./Images/Characters/Archer/BowShot/AA_shot_4.png",
        bowshot5: "./Images/Characters/Archer/BowShot/AA_shot_5.png",
        bowshot6: "./Images/Characters/Archer/BowShot/AA_shot_6.png",
        fastshot1: "./Images/Characters/Archer/BowShot/AA_shot_1.png",
        fastshot2: "./Images/Characters/Archer/BowShot/AA_shot_2.png",
        fastshot3: "./Images/Characters/Archer/BowShot/AA_shot_3.png",
        fastshot4: "./Images/Characters/Archer/BowShot/AA_shot_4.png",
        fastshot5: "./Images/Characters/Archer/BowShot/AA_shot_5.png",
        fastshot6: "./Images/Characters/Archer/BowShot/AA_shot_6.png",
        rollshot1: "./Images/Characters/Archer/RollShot/AA_RollShot_1.png",
        rollshot2: "./Images/Characters/Archer/RollShot/AA_RollShot_2.png",
        rollshot3: "./Images/Characters/Archer/RollShot/AA_RollShot_3.png",
        rollshot4: "./Images/Characters/Archer/RollShot/AA_RollShot_4.png",
        rollshot5: "./Images/Characters/Archer/RollShot/AA_RollShot_5.png",
        rollshot6: "./Images/Characters/Archer/RollShot/AA_RollShot_6.png",
        rollshot7: "./Images/Characters/Archer/RollShot/AA_RollShot_7.png",
        rollshot8: "./Images/Characters/Archer/RollShot/AA_RollShot_8.png",
        rollshot9: "./Images/Characters/Archer/RollShot/AA_RollShot_9.png",
        rollshot10: "./Images/Characters/Archer/RollShot/AA_RollShot_10.png",
        rollshot11: "./Images/Characters/Archer/RollShot/AA_RollShot_11.png",
        rollshot12: "./Images/Characters/Archer/RollShot/AA_RollShot_12.png",

        
      }
    },
    Liraz: {
      name: "Liraz: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Characters/Nightstalker/Nightstalker.png",
        happy: "./Images/Characters/Nightstalker/NightstalkerHappy.png",
        veryhappy: "./Images/Characters/Nightstalker/NightstalkerVeryHappy.png",
        unhappy: "./Images/Characters/Nightstalker/NightstalkerUnHappy.png",
        angry: "./Images/Characters/Nightstalker/NightstalkerAngry.png",
        arrogant: "./Images/Characters/Nightstalker/NightstalkerArrogant.png",
        mediumlove: "./Images/Characters/Nightstalker/NightstalkerMediumLove.png",
        inlove: "./Images/Characters/Nightstalker/NightstalkerInLove.png",
        blindinglight1: "./Images/Characters/Nightstalker/Shield/NS_Shield_1.png",
        blindinglight2: "./Images/Characters/Nightstalker/Shield/NS_Shield_2.png",
        blindinglight3: "./Images/Characters/Nightstalker/Shield/NS_Shield_3.png",
        blindinglight4: "./Images/Characters/Nightstalker/Shield/NS_Shield_4.png",
        blindinglight5: "./Images/Characters/Nightstalker/Shield/NS_Shield_5.png",
        blindinglight6: "./Images/Characters/Nightstalker/Shield/NS_Shield_6.png",
        blindinglight7: "./Images/Characters/Nightstalker/Shield/NS_Shield_7.png",
        swordswing1: "./Images/Characters/Nightstalker/swordswing/NS_Swing_1.png",
        swordswing2: "./Images/Characters/Nightstalker/swordswing/NS_Swing_2.png",
        swordswing3: "./Images/Characters/Nightstalker/swordswing/NS_Swing_3.png",
        swordswing4: "./Images/Characters/Nightstalker/swordswing/NS_Swing_4.png",
        swordswing5: "./Images/Characters/Nightstalker/swordswing/NS_Swing_5.png",
        swordswing6: "./Images/Characters/Nightstalker/swordswing/NS_Swing_6.png",
        swordswing7: "./Images/Characters/Nightstalker/swordswing/NS_Swing_7.png",
        windburst1: "./Images/Characters/Nightstalker/Windburst/NS_Wind_1.png",
        windburst2: "./Images/Characters/Nightstalker/Windburst/NS_Wind_2.png",
        windburst3: "./Images/Characters/Nightstalker/Windburst/NS_Wind_3.png",
        windburst4: "./Images/Characters/Nightstalker/Windburst/NS_Wind_4.png",
        windburst5: "./Images/Characters/Nightstalker/Windburst/NS_Wind_5.png",
        windburst6: "./Images/Characters/Nightstalker/Windburst/NS_Wind_6.png",
        windburst7: "./Images/Characters/Nightstalker/Windburst/NS_Wind_7.png",
        windburst8: "./Images/Characters/Nightstalker/Windburst/NS_Wind_8.png",
        windburst9: "./Images/Characters/Nightstalker/Windburst/NS_Wind_9.png",

        
      }
    },
    Adira: {
      name: "Adira: ",
      origin: ƒS.ORIGIN.BOTTOMCENTER,
      pose: {
        normal: "./Images/Characters/SwordWhielder/SwordWhielder.png",
        happy: "./Images/Characters/SwordWhielder/SwordWhielderHappy.png",
        veryhappy: "./Images/Characters/SwordWhielder/SwordWhielderVeryHappy.png",
        unhappy: "./Images/Characters/SwordWhielder/SwordWhielderUnHappy.png",
        angry: "./Images/Characters/SwordWhielder/SwordWhielderAngry.png",
        arrogant: "./Images/Characters/SwordWhielder/SwordWhielderArrogant.png",
        mediumlove: "./Images/Characters/SwordWhielder/SwordWhielderMediumLove.png",
        inlove: "./Images/Characters/SwordWhielder/SwordWhielderInLove.png",
        skystrike1: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_1.png",
        skystrike2: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_2.png",
        skystrike3: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_3.png",
        skystrike4: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_4.png",
        skystrike5: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_5.png",
        skystrike6: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_6.png",
        skystrike7: "./Images/Characters/SwordWhielder/SkyStrike/SW_SkyStrike_7.png",
        swordattack1: "./Images/Characters/SwordWhielder/SwordAttack/SW_SwordAttack_1.png",
        swordattack2: "./Images/Characters/SwordWhielder/SwordAttack/SW_SwordAttack_2.png",
        swordattack3: "./Images/Characters/SwordWhielder/SwordAttack/SW_SwordAttack_3.png",
        swordattack4: "./Images/Characters/SwordWhielder/SwordAttack/SW_SwordAttack_4.png",
        swordslash1: "./Images/Characters/SwordWhielder/Swordslash/SW_SwordSlash_1.png",
        swordslash2: "./Images/Characters/SwordWhielder/Swordslash/SW_SwordSlash_2.png",
        swordslash3: "./Images/Characters/SwordWhielder/Swordslash/SW_SwordSlash_3.png",
        swordslash4: "./Images/Characters/SwordWhielder/Swordslash/SW_SwordSlash_4.png",
        swordslash5: "./Images/Characters/SwordWhielder/Swordslash/SW_SwordSlash_5.png",



      }
    }
  };

  export let items ={
    Healthpotion: {
      name: "Healthpotion",
      description: "Gives you some Health",
      image: "./Images/PotionRed.png"
    },
    Flower: {
      name: "Flower",
      description: "Seems useless",
      image: "./Images/flower.png"
    },
    WaterBottle: {
      name: "WaterBottle",
      description: "Adds Strength",
      image: "./Images/WaterBottle.png"
    },
    EmptyBottle: {
      name: "EmptyBottle",
      description: "Seems useless",
      image: "./Images/EmptyBottle.png"
    },
    Apple: {
      name: "Apple",
      description: "Adds Strenght",
      image: "./Images/Apple.png"
    },
    Scroll: {
      name: "Scroll",
      description: "Seems usefull",
      image: "./Images/Scroll.png"
    }
  }
  export let scenecount = "";
  export let scenecount2 = "";
  export let test = 0;
  export let teststring = "";

  
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
      //{scene: Animation, name: "animation"},
      {id: "main", scene: scene1, name: "1stScene", next: scenecount},
      {id: "Archer1", scene: option1, name: "1stScene", next: scenecount},
      {id: "Nightstalker1", scene: option2, name: "2ndScene", next: scenecount}, 
      {id: "ArchMage1", scene: option3, name: "3rdScene",next: scenecount}, 
      {id: "Swordwielder1", scene: option4, name: "4thScene", next: scenecount},
      {id: "skill1", scene: skill1, name: "skill1", next: scenecount},
      {id: "skill2", scene: skill2, name: "skill2", next: scenecount},
      {id: "skill3", scene: skill3, name: "skill3", next: scenecount},
      {id: "scene2", scene: scene2, name: "scene2", next: scenecount},
      {id: "scene3", scene: scene3, name: "scene3", next: scenecount},
      {id: "scene4", scene: scene4, name: "scene4"},
    ];
    ƒS.Progress.setData(stats);
    ƒS.Progress.go(scenes);
  }
}
