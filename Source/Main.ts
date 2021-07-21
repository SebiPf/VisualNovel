namespace fantasyrpg {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;

  console.log("FudgeStory template starting");

  //define transition
  export let transition = {
    clock: {
      duration: 3,
      alpha: "./Images/Transitions/WipesAndOther/cw-side.jpg",
      edge: 1
    },
    pixel:{
      duration: 1,
      alpha: "./Images/Transitions/Others/029.png",
      edge: 1
    },
    fight: {
      duration: 3,
      alpha: "./Images/Transitions/Others/005.png",
      edge: 1
    },
    speed: {
      duration: 3,
      alpha: "./Images/Transitions/Others/034.png",
      edge: 1
    },
  };

  //define sound
  export let sound = {
    //musik
    classroom: "./sound/classroom.wav",
    bell: "./sound/schoolbell.wav",
    break: "./sound/schoolbreak.mp3",
    teacher: "./sound/teacherscream.wav",
    steps: "./sound/steps.wav",
    //Sound
    click: ""
  };
  export let locations = {
    seafire: {
      name: "seafireplace",
      background: "./Images/Backgrounds/shore.png"
    },
    camp: {
      name: "camp",
      background: "./Images/Backgrounds/dorf.png"
    },
    woods: {
      name: "woods",
      background: "./Images/Backgrounds/Forest.png"
    },
    mountain: {
      name: "mountain",
      background: "./Images/Backgrounds/mountain.png"
    },
    Black: {
      name: "black",
      background: "./Images/Backgrounds/black.png"
    },
    white: {
      name: "white",
      background: "./Images/Backgrounds/White.png"
    },
    whitename: {
      name: "whitename",
      background: "./Images/Backgrounds/whiteentername.png"
    },
    alchemist: {
      name: "alchemist",
      background: "./Images/Backgrounds/alchemist.png"
    },
    cave: {
      name: "cave",
      background: "./Images/Backgrounds/cave.png"
    },
    caveboss: {
      name: "caveboss",
      background: "./Images/Backgrounds/caveboss.png"
    },
    hotspring: {
      name: "hotspring",
      background: "./Images/Backgrounds/hotspring.png"
    },
    kreuzung2: {
      name: "kreuzung2",
      background: "./Images/Backgrounds/kreuzung2.png"
    },
    tower: {
      name: "tower",
      background: "./Images/Backgrounds/tower.png"
    },
    trailblocked: {
      name: "trailblocked",
      background: "./Images/Backgrounds/trailblocked.png"
    },
    trailtomountain: {
      name: "trailtomountain",
      background: "./Images/Backgrounds/trailtomountain.png"
    },
    trailwithlake: {
      name: "trailwithlake",
      background: "./Images/Backgrounds/trailwithlake.png"
    },
    villagecenter: {
      name: "villagecenter",
      background: "./Images/Backgrounds/villagecenter.png"
    },
    waterfall: {
      name: "waterfall",
      background: "./Images/Backgrounds/waterfall.png"
    },
    zweigung: {
      name: "zweigung",
      background: "./Images/Backgrounds/zweigung.png"
    },
    trail: {
      name: "trail",
      background: "./Images/Backgrounds/trail.png"
    },
    fight: {
      name: "fight",
      background: "./Images/Backgrounds/fight.png"
    },


  };
  
  // define Carr
  export let characters = {
    Narrator: {
      name: ""
    },
    Scroll:{
      name: "Advice",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        normal: "./Images/normal.png",
        incave: "./Images/incave.png"
      }
    },
    Stone:{
      name: "Stone",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        normal: "./Images/Characters/Stone.png"
      }
    },
    Stone2:{
      name: "Stone1",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        normal: "./Images/Characters/Stone1.png"
      }
    },
    Stone3:{
      name: "Stone2",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        normal: "./Images/Characters/Stone2.png"
      }
    },
    Knife:{
      name: "Knife",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        normal: "./Images/Characters/Golem/Knife.png"
      }
    },
    Golem:{
      name: "Golem",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        normal: "./Images/Characters/Golem/Golem_Normal.png",
        dead: "./Images/Characters/Golem/Golem_Dead.png",
        knife: "./Images/Characters/Golem/Golem_Knife.png",
        attack1: "./Images/Characters/Golem/Attack/Golem_Attack_1.png",
        attack2: "./Images/Characters/Golem/Attack/Golem_Attack_2.png",
        attack3: "./Images/Characters/Golem/Attack/Golem_Attack_3.png",
        attack4: "./Images/Characters/Golem/Attack/Golem_Attack_4.png",
        attack5: "./Images/Characters/Golem/Attack/Golem_Attack_5.png",
        attack6: "./Images/Characters/Golem/Attack/Golem_Attack_6.png",
        attack7: "./Images/Characters/Golem/Attack/Golem_Attack_7.png",
        death1: "./Images/Characters/Golem/Death/Golem_Death_1.png",
        death2: "./Images/Characters/Golem/Death/Golem_Death_2.png",
        death3: "./Images/Characters/Golem/Death/Golem_Death_3.png",
        death4: "./Images/Characters/Golem/Death/Golem_Death_4.png",
        death5: "./Images/Characters/Golem/Death/Golem_Death_5.png",
        death6: "./Images/Characters/Golem/Death/Golem_Death_6.png",
        death7: "./Images/Characters/Golem/Death/Golem_Death_7.png",

      }
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
        skystrike1: "../Images/Characters/Swordwhielder/SkyStrike/SW_SkyStrike_1.jpg",
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
    },
    dice:{
      name: "dice",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        dice1: "./Images/1.png",
        dice2: "./Images/2.png",
        dice3: "./Images/3.png",
        dice4: "./Images/4.png",
        dice5: "./Images/5.png",
        dice6: "./Images/6.png",
      }
    },
    dice2:{
      name: "dice2",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        dice1: "./Images/11.png",
        dice2: "./Images/22.png",
        dice3: "./Images/33.png",
        dice4: "./Images/44.png",
        dice5: "./Images/55.png",
        dice6: "./Images/66.png",
      }
    },
    dice3:{
      name: "dice3",
      origin: ƒS.ORIGIN.CENTER,
      pose: {
        dice1: "./Images/111.png",
        dice2: "./Images/222.png",
        dice3: "./Images/333.png",
        dice4: "./Images/444.png",
        dice5: "./Images/555.png",
        dice6: "./Images/666.png",
      }
    }
  };
  	//Animation for dice
    export function stones(): ƒS.AnimationDefinition {
      return {
        start: { translation: ƒS.positionPercent(0, 0)},
        end: { translation: ƒS.positionPercent(40, 120)},
        duration: 3,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
      };
    }
    export function stones1(): ƒS.AnimationDefinition {
      return {
        start: { translation: ƒS.positionPercent(30, 0)},
        end: { translation: ƒS.positionPercent(70, 120)},
        duration: 3,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
      };
    }
    export function stones2(): ƒS.AnimationDefinition {
      return {
        start: { translation: ƒS.positionPercent(60, 0)},
        end: { translation: ƒS.positionPercent(120, 120)},
        duration: 3,
        playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
      };
    }
  export function diceani1(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 80), rotation: 0},
      end: { translation: ƒS.positionPercent(50, 80), rotation: 180 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani2(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 80), rotation: 190},
      end: { translation: ƒS.positionPercent(50, 80), rotation: 360 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani3(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 80), rotation: 370 },
      end: { translation: ƒS.positionPercent(50, 80), rotation: 540 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani4(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 80), rotation: 550},
      end: { translation: ƒS.positionPercent(50, 80), rotation: 720 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani5(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 80), rotation: 730},
      end: { translation: ƒS.positionPercent(50, 80), rotation: 900 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani6(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(50, 80), rotation: 910},
      end: { translation: ƒS.positionPercent(50, 80), rotation: 1080 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani1left(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 80) , rotation: 0},
      end: { translation: ƒS.positionPercent(20, 80), rotation: 90 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani2left(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 80), rotation: 90},
      end: { translation: ƒS.positionPercent(20, 80), rotation: 180 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani3left(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 80), rotation: 180 },
      end: { translation: ƒS.positionPercent(20, 80), rotation: 270 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani4left(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 80), rotation: 270},
      end: { translation: ƒS.positionPercent(20, 80), rotation: 360 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani5left(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 80), rotation: 360},
      end: { translation: ƒS.positionPercent(20, 80), rotation: 450 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani6left(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(20, 80), rotation: 450},
      end: { translation: ƒS.positionPercent(20, 80), rotation: 360 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani1right(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 80) , rotation: 0},
      end: { translation: ƒS.positionPercent(80, 80), rotation: 90 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani2right(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 80), rotation: 90},
      end: { translation: ƒS.positionPercent(80, 80), rotation: 180 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani3right(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 80), rotation: 180 },
      end: { translation: ƒS.positionPercent(80, 80), rotation: 270 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani4right(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 80), rotation: 270},
      end: { translation: ƒS.positionPercent(80, 80), rotation: 360 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani5right() {
    return {
      start: { translation: ƒS.positionPercent(80, 80), rotation: 360},
      end: { translation: ƒS.positionPercent(80, 80), rotation: 450 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function diceani6right(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 80), rotation: 450},
      end: { translation: ƒS.positionPercent(80, 80), rotation: 360 },
      duration: 0.5,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }
  export function knifethrow(): ƒS.AnimationDefinition {
    return {
      start: { translation: ƒS.positionPercent(80, 80)},
      end: { translation: ƒS.positionPercent(10, 80)},
      duration: 3,
      playmode: ƒS.ANIMATION_PLAYMODE.PLAYONCE
    };
  }






  function addfriendship(_event: CustomEvent): void {
    console.log(_event);
    if(stats.flowercheck == true){
      ƒS.Text.print("You give " + stats.chosenrel + " the flower you found");
      ƒS.Text.print(stats.chosenrel +" really likes them and gives you a kiss");
      
      if( stats.chosenrel in stats.Side1){
        stats.relside1 +=20;
        ƒS.Character.show(stats.Side1, stats.Side1.pose.inlove, ƒS.positionPercent(90, 90))
      }
      else if( stats.chosenrel in stats.Side2){
        stats.relside2 +=20;
        ƒS.Character.show(stats.Side2, stats.Side2.pose.inlove, ƒS.positionPercent(90, 90))
      }
      else if( stats.chosenrel in stats.Side3){
        stats.relside3 +=20;
        ƒS.Character.show(stats.Side3, stats.Side3.pose.inlove, ƒS.positionPercent(90, 90))
      }

    }
    else{
      ƒS.Inventory.add(items.Flower)
      ƒS.Speech.tell(characters.Narrator, "You can not use that here");

    }
  }
  
 
  function addstrength(_event: CustomEvent): void {
    console.log(_event);
    stats.Main.Strength += 10
  }
  function openadvice(_event: CustomEvent): void {
    console.log(_event);
    
    if(stats.incave == true){
      let Throwdice = {
        e1: "Feel Lucky?", 
      };
      let Dicethrow = ƒS.Menu.getInput(Throwdice, "dialog3");
      Dicethrow = Dicethrow;
      stats.retreat= true;
      }
      else{
        let Throwdice1 = {
          e2: "Feel Lucky?", 
        };
        let Dicethrow1 = ƒS.Menu.getInput(Throwdice1, "dialog4");
         Dicethrow1 = Dicethrow1;
        
      }

    ƒS.Character.hideAll();
    ƒS.update(5);
    console.log("test")
  }
  function usescroll(_event: CustomEvent): void {
    console.log(_event);
    if(stats.bossfight = true && stats.Main.name == "Samara"){
      ƒS.Text.print("Something is happening you feel very strong all of the sudden");
      ƒS.Text.print("You decide to fire off all your spells");
      skill1funktion();
      skill2funktion();
      skill3funktion();
      scenecount = "victory";
      
    }
    else{
      ƒS.Inventory.add(items.Scroll)
      ƒS.Speech.tell(characters.Narrator, "You can not use that here");
    }
  }
  
  

  export let items ={
    Healthpotion: {
      name: "Healthpotion",
      description: "Gives you some Health",
      image: "./Images/PotionRed.png",
      static: true
    },
    Flower: {
      name: "Flower",
      description: "Seems useless",
      image: "./Images/flower.png",
      handler: addfriendship
    },
    advice: {
      name: "Advice",
      description: "Has something writen on it",
      image: "./Images/Scroll.png",
      static: true,
      handler: openadvice
    },
    EmptyBottle: {
      name: "EmptyBottle",
      description: "Seems useless",
      image: "./Images/EmptyBottle.png",
    },
    Apple: {
      name: "Apple",
      description: "Adds Strenght",
      image: "./Images/Apple.png",
      handler: addstrength
    },
    Scroll: {
      name: "Scroll",
      description: "Seems usefull",
      image: "./Images/Scroll.png",
      handler: usescroll
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
    },
    state:{
      a: 0
    },
    bossfight: false,
    number: 0,
    random: 0,
    makePotiontest: false,
    flowercheck: false,
    chosenrel: "",
    bonus: false,
    incave: false,
    message: "",
    retreat: false,
    potionamount: 0,

    
    
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
      Skill3: "",
      Strength: 0,
    },
    relside1: 0,
    scoreside1: "",
    relside2: 0,
    scoreside2: "",
    relside3: 0,
    scoreside3: "",
    relzwischenablage: 0,
    
    
    Side1:{
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
    Side2:{
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
    Side3:{
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
  }

  let volume: number = 1.0;

   export function volplus(): void{
     if (volume < 10){
       volume += 0.1;
       ƒS.Sound.setMasterVolume(volume);
     }
    
   }
   export function volminus(): void{
     if (volume > 0){
       volume -= 0.1;
       ƒS.Sound.setMasterVolume(volume);
     }
    
   }




  let inGameMenue = {
    save: "Save",
    load: "Load",
    close: "Close",
    volplus: "+",
    volminus: "-",
    credits: "Credits",
    about: "about"
  };
  let gameMenue: ƒS.Menu;
  gameMenue;





  async function buttonfunc(_option: string): Promise<void>{
    if (_option == inGameMenue.save){
      await ƒS.Progress.save();
    }
    else if (_option == inGameMenue.load){
      await ƒS.Progress.load();
    }
    else if (_option == inGameMenue.close){
      close();
    }
     else if (_option == inGameMenue.volplus){
       volplus();
     }
     else if (_option == inGameMenue.volminus){
       volminus();
     }
    else if (_option == inGameMenue.credits){
      credits();
    }
    else if (_option == inGameMenue.about){
      
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
      case ƒ.KEYBOARD_CODE.I:
        console.log("InventoryOpen");
        await ƒS.Inventory.open();
        break;
    }
     
  }
  


  window.addEventListener("load", start);
  function start(_event: Event): void {

    gameMenue = 
      ƒS.Menu.create(inGameMenue, buttonfunc, "gameMenue")



    let scenes: ƒS.Scenes = [
      //{id: "scene6", scene: scene9, name: "scene6"},
      //{scene: audiouebung, name: "audioübung"}
      //{ scene: Text, name: "01_Text", next: scenecount.count},
      //{scene: Decision, name: "02_Test"},
      //{scene: Animation, name: "animation"},
      {id: "scene1", scene: scene1, name: "1stScene", next: scenecount},
      {id: "Archer1", scene: option1, name: "1stScene", next: scenecount},
      {id: "Nightstalker1", scene: option2, name: "2ndScene", next: scenecount}, 
      {id: "ArchMage1", scene: option3, name: "3rdScene",next: scenecount}, 
      {id: "Swordwielder1", scene: option4, name: "4thScene", next: scenecount},
      {id: "skill1", scene: skill1, name: "skill1", next: scenecount},
      {id: "skill2", scene: skill2, name: "skill2", next: scenecount},
      {id: "skill3", scene: skill3, name: "skill3", next: scenecount},
      {id: "scene2", scene: scene2, name: "scene2", next: scenecount},
      {id: "scene2b", scene: scene2b, name: "scene2b", next: scenecount},
      {id: "scene3", scene: scene3, name: "scene3", next: scenecount},
      {id: "scene4", scene: scene4, name: "scene4", next: scenecount},
      {id: "scene5", scene: scene5, name: "scene5", next: scenecount},
      {id: "scene6", scene: scene6, name: "scene6", next: scenecount},
      {id: "scene7", scene: scene7, name: "scene7", next: scenecount},
      {id: "scene8", scene: scene8, name: "scene8", next: scenecount},
      {id: "scene9", scene: scene9, name: "scene9", next: scenecount},
      {id: "getinput", scene: getinput, name: "getinput", next: scenecount},
      {id: "credits", scene: credits, name: "credits"},
      {id: "end", scene: end, name: "end"},
      
    ];
    let uiElement: HTMLElement =document.querySelector("[type= interface]");
    stats = ƒS.Progress.setData(stats, uiElement);
    //ƒS.Progress.setData(stats);
    ƒS.Progress.go(scenes);
  }
}
