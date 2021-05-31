declare namespace Template {
    function Text(): ƒS.SceneReturn;
}
declare namespace Template {
    function SceneChange(): ƒS.SceneReturn;
}
declare namespace Template {
    function Animation(): ƒS.SceneReturn;
}
declare namespace Template {
    function Decision(): ƒS.SceneReturn;
}
declare namespace Template {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    let sound: {
        backgroundTheme: string;
        click: string;
    };
    let locations: {
        seafire: {
            name: string;
            background: string;
        };
        shore: {
            name: string;
            background: string;
        };
        view: {
            name: string;
            background: string;
        };
        woodscamp: {
            name: string;
            background: string;
        };
        waterfall: {
            name: string;
            background: string;
        };
        charselect: {
            name: string;
            background: string;
        };
        Black: {
            name: string;
            background: string;
        };
    };
    let characters: {
        Narrator: {
            name: string;
        };
        Main: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                veryhappy: string;
                unhappy: string;
                angry: string;
                arrogant: string;
                mediumlove: string;
                inlove: string;
            };
            Skill1: string;
            Skill2: string;
            Skill3: string;
        };
        Samara: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                veryhappy: string;
                unhappy: string;
                angry: string;
                arrogant: string;
                mediumlove: string;
                inlove: string;
                fireball1: string;
                fireball2: string;
                fireball3: string;
                fireball4: string;
                fireball5: string;
                fireball6: string;
                fireball7: string;
                fireball8: string;
                fireball9: string;
                lightning1: string;
                lightning2: string;
                lightning3: string;
                lightning4: string;
                lightning5: string;
                lightning6: string;
                lightning7: string;
                lightning8: string;
                lightning9: string;
                windstrike1: string;
                windstrike2: string;
                windstrike3: string;
                windstrike4: string;
                windstrike5: string;
                windstrike6: string;
                windstrike7: string;
                windstrike8: string;
                windstrike9: string;
            };
        };
        Hando: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                veryhappy: string;
                unhappy: string;
                angry: string;
                arrogant: string;
                mediumlove: string;
                inlove: string;
                bowshot1: string;
                bowshot2: string;
                bowshot3: string;
                bowshot4: string;
                bowshot5: string;
                bowshot6: string;
                fastshot1: string;
                fastshot2: string;
                fastshot3: string;
                fastshot4: string;
                fastshot5: string;
                fastshot6: string;
                rollshot1: string;
                rollshot2: string;
                rollshot3: string;
                rollshot4: string;
                rollshot5: string;
                rollshot6: string;
                rollshot7: string;
                rollshot8: string;
                rollshot9: string;
                rollshot10: string;
                rollshot11: string;
                rollshot12: string;
            };
        };
        Liraz: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                veryhappy: string;
                unhappy: string;
                angry: string;
                arrogant: string;
                mediumlove: string;
                inlove: string;
                blindinglight1: string;
                blindinglight2: string;
                blindinglight3: string;
                blindinglight4: string;
                blindinglight5: string;
                blindinglight6: string;
                blindinglight7: string;
                swordswing1: string;
                swordswing2: string;
                swordswing3: string;
                swordswing4: string;
                swordswing5: string;
                swordswing6: string;
                swordswing7: string;
                windburst1: string;
                windburst2: string;
                windburst3: string;
                windburst4: string;
                windburst5: string;
                windburst6: string;
                windburst7: string;
                windburst8: string;
                windburst9: string;
            };
        };
        Adira: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                happy: string;
                veryhappy: string;
                unhappy: string;
                angry: string;
                arrogant: string;
                mediumlove: string;
                inlove: string;
                skystrike1: string;
                skystrike2: string;
                skystrike3: string;
                skystrike4: string;
                skystrike5: string;
                skystrike6: string;
                skystrike7: string;
                swordattack1: string;
                swordattack2: string;
                swordattack3: string;
                swordattack4: string;
                swordslash1: string;
                swordslash2: string;
                swordslash3: string;
                swordslash4: string;
                swordslash5: string;
            };
        };
    };
    let items: {
        Healthpotion: {
            name: string;
            description: string;
            image: string;
        };
    };
    let scenecount: string;
    let stats: {
        Protagonist: {
            name: string;
        };
        char1: {
            points: number;
        };
    };
}
declare namespace Template {
    function Scene(): ƒS.SceneReturn;
}
declare namespace Template {
    function option1(): ƒS.SceneReturn;
}
declare namespace Template {
    function option2(): ƒS.SceneReturn;
}
declare namespace Template {
    function option3(): ƒS.SceneReturn;
}
declare namespace Template {
    function option4(): ƒS.SceneReturn;
}
declare namespace Template {
    function skill1(): ƒS.SceneReturn;
}
declare namespace Template {
    function skill2(): ƒS.SceneReturn;
}
declare namespace Template {
    function skill3(): ƒS.SceneReturn;
}
