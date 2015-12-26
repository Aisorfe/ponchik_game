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

    s_dog = new Sprite(img, 0, 0, 73, 50);

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

    s_nums = [
        new Sprite(img, 243, 2, 6, 10),
        new Sprite(img, 173, 2, 6, 10),
        new Sprite(img, 179, 2, 6, 10),
        new Sprite(img, 187, 2, 6, 10),
        new Sprite(img, 195, 2, 6, 10),
        new Sprite(img, 203, 2, 6, 10),
        new Sprite(img, 211, 2, 6, 10),
        new Sprite(img, 219, 2, 6, 10),
        new Sprite(img, 227, 2, 6, 10),
        new Sprite(img, 235, 2, 6, 10),
    ];

    s_alphabet = {
        "a": new Sprite(img, 175, 14, 6, 10),
        "b": new Sprite(img, 183, 14, 6, 10),
        "c": new Sprite(img, 191, 14, 6, 10),
        "d": new Sprite(img, 199, 14, 6, 10),
        "e": new Sprite(img, 207, 14, 6, 10),
        "f": new Sprite(img, 215, 14, 6, 10),
        "g": new Sprite(img, 223, 14, 6, 10),
        "h": new Sprite(img, 231, 14, 6, 10),
        "i": new Sprite(img, 239, 14, 6, 10),
        "j": new Sprite(img, 247, 14, 6, 10),
        "k": new Sprite(img, 255, 14, 6, 10),
        "l": new Sprite(img, 263, 14, 6, 10),
        "m": new Sprite(img, 271, 14, 6, 10),
        "n": new Sprite(img, 279, 14, 6, 10),
        "o": new Sprite(img, 287, 14, 6, 10),
        "p": new Sprite(img, 295, 14, 6, 10),
        "q": new Sprite(img, 303, 14, 6, 10),
        "r": new Sprite(img, 311, 14, 6, 10),
        "s": new Sprite(img, 319, 14, 6, 10),
        "t": new Sprite(img, 327, 14, 6, 10),
        "u": new Sprite(img, 335, 14, 6, 10),
        "v": new Sprite(img, 343, 14, 6, 10),
        "w": new Sprite(img, 351, 14, 6, 10),
        "x": new Sprite(img, 359, 14, 6, 10),
        "y": new Sprite(img, 367, 14, 6, 10),
        "z": new Sprite(img, 375, 14, 6, 10),
        " ": new Sprite(img, 383, 14, 6, 10)
    };
}