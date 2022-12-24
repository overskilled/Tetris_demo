const canvas = document.getElementById('board');
const ctx    = canvas.getContext('2d');

//calculate the size of canvas
ctx.canvas.width    = Column * Board_size;
ctx.canvas.height   =  Row * Board_size;

//scale de size of each block
ctx.scale = (Board_size);

let board = new Board();

function play(){
    board.reset();
    let piece = new Piece(ctx);
    piece.draw();
  
    board.piece = piece;
    //console.table(board.grid);
}

