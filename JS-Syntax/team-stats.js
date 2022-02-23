/*

Team Stats

We want to create and extract information about your favorite sports team. Basketball, soccer, tennis, or water polo, you pick it. It’s your job to create data using the JavaScript data structures at your disposal: arrays, objects, etc.

Once created, you can manipulate these data structures as well as gain insights from them. For example, you might want to get the total number of games your team has played, or the average score of all of their games.

*/

const team = {

    _players: [
        {
          firstName: 'Cristiano',
          lastName: 'Ronaldo',
          age: 37
        },
        {
          firstName: 'Marcus',
          lastName: 'Rashford',
          age: 24
        },
        {
          firstName: 'Paul',
          lastName: 'Pogba',
          age: 28
        }
    ],
  
    _games: [
        {
          opponent: 'Brighton',
          teamPoints: 43,
          opponentPoints: 24
        }, 
        {
          opponent: 'Southampton',
          teamPoints: 39,
          opponentPoints: 23
        },
        {
          opponent: 'Burnley',
          teamPoints: 38,
          opponentPoints: 20
        }
    ],
  
      addGame(opp, myPts, oppPts) {
        const game = {
          opponent: opp,
          teamPoints: myPts,
          opponentPoints: oppPts
        };
        this.games.push(game);
      },
  
       get games() {
         return this._games;
       },
  
       get players() {
         return this._players;
       },
  
      addPlayer(firstName, lastName, age) {
        let player = {
          firstName: firstName,
          lastName: lastName,
          age: age
        };
    
        this.players.push(player);
      }
      
  };
  
  
  
  team.addPlayer('Raphael', 'Verane', 28);
  team.addPlayer('Scott', 'McTominay', 25);
  team.addPlayer('Jadon', 'Sancho', 22);
  
  // console.log(team.players);
  
  
  team.addGame('Leeds', 46, 23);
  team.addGame('Watford', 49, 15);
  team.addGame('Man City', 52, 53);
  
  // console.log(team.games);
  
  
  
  