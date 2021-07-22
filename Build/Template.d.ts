declare namespace fantasyrpg {
    function Text(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function scene1(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function Animation(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function Decision(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    export import ƒ = FudgeCore;
    export import ƒS = FudgeStory;
    export let transition: {
        clock: {
            duration: number;
            alpha: string;
            edge: number;
        };
        pixel: {
            duration: number;
            alpha: string;
            edge: number;
        };
        fight: {
            duration: number;
            alpha: string;
            edge: number;
        };
        speed: {
            duration: number;
            alpha: string;
            edge: number;
        };
    };
    export let sound: {
        classroom: string;
        bell: string;
        break: string;
        teacher: string;
        steps: string;
        normal: string;
        fight: string;
        town: string;
        credits: string;
        click: string;
    };
    export let locations: {
        seafire: {
            name: string;
            background: string;
        };
        camp: {
            name: string;
            background: string;
        };
        woods: {
            name: string;
            background: string;
        };
        mountain: {
            name: string;
            background: string;
        };
        Black: {
            name: string;
            background: string;
        };
        white: {
            name: string;
            background: string;
        };
        whitename: {
            name: string;
            background: string;
        };
        alchemist: {
            name: string;
            background: string;
        };
        cave: {
            name: string;
            background: string;
        };
        caveboss: {
            name: string;
            background: string;
        };
        hotspring: {
            name: string;
            background: string;
        };
        kreuzung2: {
            name: string;
            background: string;
        };
        tower: {
            name: string;
            background: string;
        };
        trailblocked: {
            name: string;
            background: string;
        };
        trailtomountain: {
            name: string;
            background: string;
        };
        trailwithlake: {
            name: string;
            background: string;
        };
        villagecenter: {
            name: string;
            background: string;
        };
        waterfall: {
            name: string;
            background: string;
        };
        zweigung: {
            name: string;
            background: string;
        };
        trail: {
            name: string;
            background: string;
        };
        fight: {
            name: string;
            background: string;
        };
    };
    export let characters: {
        Narrator: {
            name: string;
        };
        Scroll: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                incave: string;
            };
        };
        Stone: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Stone2: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Stone3: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Knife: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
            };
        };
        Golem: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                normal: string;
                dead: string;
                knife: string;
                attack1: string;
                attack2: string;
                attack3: string;
                attack4: string;
                attack5: string;
                attack6: string;
                attack7: string;
                death1: string;
                death2: string;
                death3: string;
                death4: string;
                death5: string;
                death6: string;
                death7: string;
            };
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
        dice: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                dice1: string;
                dice2: string;
                dice3: string;
                dice4: string;
                dice5: string;
                dice6: string;
            };
        };
        dice2: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                dice1: string;
                dice2: string;
                dice3: string;
                dice4: string;
                dice5: string;
                dice6: string;
            };
        };
        dice3: {
            name: string;
            origin: ƒ.ORIGIN2D;
            pose: {
                dice1: string;
                dice2: string;
                dice3: string;
                dice4: string;
                dice5: string;
                dice6: string;
            };
        };
    };
    export function stones(): ƒS.AnimationDefinition;
    export function stones1(): ƒS.AnimationDefinition;
    export function stones2(): ƒS.AnimationDefinition;
    export function diceani1(): ƒS.AnimationDefinition;
    export function diceani2(): ƒS.AnimationDefinition;
    export function diceani3(): ƒS.AnimationDefinition;
    export function diceani4(): ƒS.AnimationDefinition;
    export function diceani5(): ƒS.AnimationDefinition;
    export function diceani6(): ƒS.AnimationDefinition;
    export function diceani1left(): ƒS.AnimationDefinition;
    export function diceani2left(): ƒS.AnimationDefinition;
    export function diceani3left(): ƒS.AnimationDefinition;
    export function diceani4left(): ƒS.AnimationDefinition;
    export function diceani5left(): ƒS.AnimationDefinition;
    export function diceani6left(): ƒS.AnimationDefinition;
    export function diceani1right(): ƒS.AnimationDefinition;
    export function diceani2right(): ƒS.AnimationDefinition;
    export function diceani3right(): ƒS.AnimationDefinition;
    export function diceani4right(): ƒS.AnimationDefinition;
    export function diceani5right(): {
        start: {
            translation: ƒ.Vector2;
            rotation: number;
        };
        end: {
            translation: ƒ.Vector2;
            rotation: number;
        };
        duration: number;
        playmode: ƒ.ANIMATION_PLAYMODE;
    };
    export function diceani6right(): ƒS.AnimationDefinition;
    export function knifethrow(): ƒS.AnimationDefinition;
    function addfriendship(_event: CustomEvent): void;
    function addstrength(_event: CustomEvent): void;
    function openadvice(_event: CustomEvent): void;
    function usescroll(_event: CustomEvent): void;
    export let items: {
        Healthpotion: {
            name: string;
            description: string;
            image: string;
            static: boolean;
        };
        Flower: {
            name: string;
            description: string;
            image: string;
            handler: typeof addfriendship;
        };
        advice: {
            name: string;
            description: string;
            image: string;
            static: boolean;
            handler: typeof openadvice;
        };
        EmptyBottle: {
            name: string;
            description: string;
            image: string;
        };
        Apple: {
            name: string;
            description: string;
            image: string;
            handler: typeof addstrength;
        };
        Scroll: {
            name: string;
            description: string;
            image: string;
            handler: typeof usescroll;
        };
    };
    export let scenecount: string;
    export let scenecount2: string;
    export let test: number;
    export let teststring: string;
    export let stats: {
        Protagonist: {
            name: string;
        };
        char1: {
            points: number;
        };
        state: {
            a: number;
        };
        bossfight: boolean;
        number: number;
        random: number;
        makePotiontest: boolean;
        flowercheck: boolean;
        chosenrel: string;
        bonus: boolean;
        incave: boolean;
        message: string;
        retreat: boolean;
        potionamount: number;
        Main: {
            name: string;
            namechar: string;
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
            Strength: number;
        };
        relside1: number;
        scoreside1: string;
        relside2: number;
        scoreside2: string;
        relside3: number;
        scoreside3: string;
        relzwischenablage: number;
        Side1: {
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
        Side2: {
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
        Side3: {
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
    };
    export function volplus(): void;
    export function volminus(): void;
    export {};
}
declare namespace fantasyrpg {
    function scene(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function audiouebung(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function credits(): Promise<void>;
}
declare namespace fantasyrpg {
    function end(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function getinput(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function loveending(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function meter(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function option1(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function option2(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function option3(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function option4(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function returnscene(): Promise<string>;
}
declare namespace fantasyrpg {
    function scene2(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function scene2b(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function scene3(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function scene4(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function scene5(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function scene6(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function scene7(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function scene8(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function scene9(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function setscene(): string;
}
declare namespace fantasyrpg {
    function skill1(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function skill1funktion(): Promise<void>;
}
declare namespace fantasyrpg {
    function skill2(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function skill2funktion(): Promise<void>;
}
declare namespace fantasyrpg {
    function skill3(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function skill3funktion(): Promise<void>;
}
declare namespace fantasyrpg {
    function testing(): ƒS.SceneReturn;
}
declare namespace fantasyrpg {
    function throwdice(): Promise<void>;
}
