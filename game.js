var

canvas,
ctx,
width,
height,

frames = 0,
bg_speed = 2,
score = 0,

states = {

    "splash": 0,
    "game": 1,
    "game_over": 2,

},

current_state = states["splash"];

function main() {

    canvas = document.createElement("canvas");
    width = window.innerWidth;
    height = window.innerHeight;

    var evt = "touchstart";

    if (width >= 500) {
        width = 640;
        height = 320;
        evt = "mousedown";
    }

    document.addEventListener(evt, on_press);

    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext("2d");

    document.body.appendChild(canvas);

    var img = new Image();
    img.src = "res/sheet.png";

    img.onload = function() {

        initSprites(this);
        ctx.fillStyle = s_bg.color;
        dog.x = width * 0.1;

        run();

    }

}

function run() {

    var loop = function() {
        update();
        render();
        window.requestAnimationFrame(loop, canvas);
    }

    window.requestAnimationFrame(loop, canvas);

}

function update() {

    frames++;

    s_bg.pos = (s_bg.pos + bg_speed) % s_bg.width;

    dog.update();

    donuts.update();

    lifes.update();

}

function render() {

    if (current_state == states["game_over"]) game_over();

    else {

        ctx.fillRect(0, 0, width, height);

        s_bg.draw(ctx, -s_bg.pos, 0);
        s_bg.draw(ctx, s_bg.width - s_bg.pos, 0);

        dog.draw(ctx);

        donuts.draw(ctx);

        lifes.draw(ctx);

        show_score(ctx);

        if (current_state == states["splash"]) {

            show_splash_screen(ctx);

        }

    }

}

function on_press(evt) {

    switch (current_state) {

        case states["splash"]:
            current_state = states["game"];
            dog.is_floating = false;
            dog.jump();
            break;

        case states["game"]:
            dog.jump();
            break;

        case states["game_over"]:
            lifes.amount = 3;
            score = 0;
            current_state = states["splash"];
            break;

    }

}

function game_over() {

    ctx.fillStyle = "#ff5757";
    ctx.fillRect(0, 0, width, height);

}

function get_random_int(min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function get_random_array_element(array) {

    return array[get_random_int(0, array.length - 1)];

}

function show_score(ctx) {

    var str_score = score.toString();

    print_word(ctx, "score", 10, height - 20);

    for (var i = 0; i < str_score.length; i++) {
        s_nums[str_score[i]].draw(ctx, 58 + i * 8, height - 20);
    }

}

function print_word(ctx, word, x, y) {

    for (var i = 0; i < word.length; i++) {
        s_alphabet[word[i]].draw(ctx, x + i * 8, y);
    }

}

function show_splash_screen(ctx) {

    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, width, height);

    print_word(ctx, "click to play", width / 2 - 60, height / 2 - s_alphabet[" "].height / 2);

}

function Rectangle(x, y, w, h) {

    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

}

document.addEventListener("DOMContentLoaded", main);