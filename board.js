class Board {

    //reset the board at the start of each game
    reset(){
        this.grid = this.getEmptyBoard();
    }
    
    getEmptyBoard() {
        return Array.from(
          {length: Row}, () => Array(Column).fill(0)
        );
    }
}
