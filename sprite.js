var

s_bg,
s_dog,
s_donuts;

function Sprite(img, x, y, width, height) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
};

Sprite.prototype.draw = function(ctx, x, y) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height,
        x, y, this.width, this.height);
};

function initSprites(img) {
    s_bg = new Sprite(img, 0, 50, 960, 370);
    s_bg.color = "#2f2f2f";
    s_bg.pos = 0;

    s_dog = new Sprite(img, 0, 0, 74, 50);

    s_donuts = [
        new Sprite(img, 75, 2, 18, 18),
        new Sprite(img, 95, 2, 18, 18),
        new Sprite(img, 115, 2, 18, 18),
        new Sprite(img, 75, 22, 18, 18),
        new Sprite(img, 95, 22, 18, 18),
        new Sprite(img, 115, 22, 18, 18),
    ];

    s_heart = new Sprite(img, 135, 2, 18, 16);
    s_heart_off = new Sprite(img, 155, 2, 18, 16);
}