class Piece {  
  constructor(ctx) {
    this.ctx = ctx;
    this.color = 'blue';
    this.shape = [
      [2, 0, 0], 
      [2, 2, 2], 
      [0, 0, 0]
    ];
    
    // Starting position.
    this.x = 3;
    this.y = 0;
  }

  
  draw() {
    this.ctx.fillStyle = this.color;
    this.shape.forEach((row, y) => {
      row.forEach((value, x) => {
        // this.x, this.y gives the left upper position of the shape
        // x, y gives the position of the block in the shape
        // this.x + x is then the position of the block on the board
        if (value > 0) {
          this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
        }
      });
    });
  }
}