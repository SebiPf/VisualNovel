namespace fantasyrpg {
    export async function throwdice(){
        console.log("throw dice");
        stats.random = Math.floor(Math.random() * stats.number + 4);
        console.log("random number is " + stats.random);






        
        if(stats.number <= 3){

            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice1, diceani1());
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice5, diceani2());
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice6, diceani3());
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice3, diceani4());
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice2, diceani5());
            ƒS.Character.hide(characters.dice);
            if(stats.random == 1){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice1, diceani6());
            }
            else if(stats.random == 2){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice2, diceani6());
            }
            else if(stats.random == 3){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice3, diceani6());
            }
            else if(stats.random == 4){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice4, diceani6());
            }
            else if(stats.random == 5){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice5, diceani6());
            }
            else if(stats.random == 6){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice6, diceani6());
            }
            await ƒS.Character.hideAll();
            await ƒS.update(1);
        }
        
        else if(stats.number>3 && stats.number<=9){

            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice1, diceani1left())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice5, diceani2left())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice6, diceani3left())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice3, diceani4left())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice2, diceani5left())
            ƒS.Character.hide(characters.dice);
            if(stats.random == 1){
                stats.random = 2;
            }
            else if(stats.random == 2){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice1, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice1, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 3){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice1, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice1, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 4){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice2, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice2, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 5){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice1, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice1, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 6){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice3, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice3, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            if(stats.random == 7){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice6, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice6, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 8){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice3, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice3, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 9){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice6, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice6, ƒS.positionPercent(20,80))
                ƒS.update(1);

            }
            else if(stats.random == 10){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice5, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice5, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 11){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice6, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice6, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 12){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice6, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice6, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }

            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice1, diceani1right());
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice3, diceani2right())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice2, diceani3right())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice4, diceani4right())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice6, diceani5right())
            ƒS.Character.hide(characters.dice);
            if(stats.random == 1){
                stats.random = 2;
            }
            else if(stats.random == 2){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice1, diceani6right());
            }
            else if(stats.random == 3){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice2, diceani6right());
            }
            else if(stats.random == 4){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice2, diceani6right());
            }
            else if(stats.random == 5){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice4, diceani6right());
            }
            else if(stats.random == 6){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice3, diceani6right());
            }
            if(stats.random == 7){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice1, diceani6right());
            }
            else if(stats.random == 8){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice5, diceani6right());
            }
            else if(stats.random == 9){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice3, diceani6right());
            }
            else if(stats.random == 10){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice5, diceani6right());
            }
            else if(stats.random == 11){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice5, diceani6right());
            }
            else if(stats.random == 12){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice6, diceani6right());
            }
            await ƒS.Character.hideAll();
            await ƒS.update(1);
        }
        else if(stats.number>9){

            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice1, diceani1left())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice5, diceani2left())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice6, diceani3left())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice3, diceani4left())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice2, diceani5left())
            ƒS.Character.hide(characters.dice);
            if(stats.random == 1){
                stats.random = 3;
            }
            else if(stats.random == 2){
                stats.random = 4;
            }
            else if(stats.random == 3){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice1, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice1, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 4){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice1, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice1, ƒS.positionPercent(20,80))
                ƒS.update(1);
                
            }
            else if(stats.random == 5){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice1, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice1, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 6){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice2, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice2, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            if(stats.random == 7){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice5, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice5, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 8){

                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice3, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice3, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 9){

                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice3, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice3, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 10){

                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice5, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice5, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 11){

                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice1, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice1, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
            else if(stats.random == 12){

                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice6, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice6, ƒS.positionPercent(20,80))
                ƒS.update(1);
            }
        
            if(stats.random == 13){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice3, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice3, ƒS.positionPercent(20,80))
                ƒS.update(1);

            }
            else if(stats.random == 14){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice6, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice6, ƒS.positionPercent(20,80))
                ƒS.update(1);

            }
            else if(stats.random == 15){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice3, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice3, ƒS.positionPercent(20,80))
                ƒS.update(1);

            }
            else if(stats.random == 16){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice5, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice5, ƒS.positionPercent(20,80))
                ƒS.update(1);

            }
            else if(stats.random == 17){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice6, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice6, ƒS.positionPercent(20,80))
                ƒS.update(1);
    
            }
            else if(stats.random == 18){
                await ƒS.Character.animate(characters.dice2, characters.dice2.pose.dice6, diceani6left());
                await ƒS.Character.show(characters.dice2, characters.dice2.pose.dice6, ƒS.positionPercent(20,80))
                ƒS.update(1);

            }

            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice1, diceani1())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice3, diceani2())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice2, diceani3())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice4, diceani4())
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice6, diceani5())
            ƒS.Character.hide(characters.dice);
            if(stats.random == 1){
                stats.random = 3;
            }
            else if(stats.random == 2){
                stats.random = 4;
            }
            else if(stats.random == 3){
                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice1, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice1, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 4){
                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice1, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice1, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 5){
                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice2, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice2, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 6){
                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice3, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice3, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            if(stats.random == 7){
                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice1, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice1, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 8){

                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice2, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice2, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 9){

                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice3, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice3, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 10){

                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice3, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice3, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 11){

                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice5, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice5, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 12){

                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice6, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice6, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            if(stats.random == 13){

                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice6, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice6, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 14){
 
                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice5, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice5, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 15){

                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice6, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice6, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 16){

                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice6, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice6, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 17){

                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice6, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice6, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }
            else if(stats.random == 18){

                await ƒS.Character.animate(characters.dice3, characters.dice3.pose.dice6, diceani6());
                await ƒS.Character.show(characters.dice3, characters.dice3.pose.dice6, ƒS.positionPercent(50,80))
                ƒS.update(1);
            }

            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice1, diceani1right());
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice5, diceani2right());
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice6, diceani3right());
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice4, diceani4right());
            ƒS.Character.hide(characters.dice);
            await ƒS.Character.animate(characters.dice, characters.dice.pose.dice2, diceani5right());
            ƒS.Character.hide(characters.dice);
            
            if(stats.random == 1){
                stats.random = 3;
            }
            else if(stats.random == 2){
                stats.random = 4;
            }
            else if(stats.random == 3){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice1, diceani6right());
            }
            else if(stats.random == 4){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice2, diceani6right());
            }
            else if(stats.random == 5){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice2, diceani6right());
            }
            else if(stats.random == 6){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice1, diceani6right());
            }
            if(stats.random == 7){
                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice1, diceani6right());
            }
            else if(stats.random == 8){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice3, diceani6right());
            }
            else if(stats.random == 9){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice3, diceani6right());
            }
            else if(stats.random == 10){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice2, diceani6right());
            }
            else if(stats.random == 11){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice5, diceani6right());
            }
            else if(stats.random == 12){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice6, diceani6right());
            }
            if(stats.random == 13){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice4, diceani6right());

            }
            else if(stats.random == 14){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice3, diceani6right());

            }
            else if(stats.random == 15){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice6, diceani6right());

            }
            else if(stats.random == 16){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice5, diceani6right());

            }
            else if(stats.random == 17){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice5, diceani6right());

            }
            else if(stats.random == 18){

                await ƒS.Character.animate(characters.dice, characters.dice.pose.dice6, diceani6right());

            }
            await ƒS.Character.hideAll();
            await ƒS.update(1);
        }





        
    }
}