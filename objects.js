lifes = {

    max: 3,
    amount: 3,

    update: function() {
        if (dog.is_beyond) {

            dog.is_beyond = false;

            if (this.amount > 0) {
                this.amount--;
                current_state = states["splash"];
            } else current_state = states["game_over"];

        }

    },

    draw: function() {

        for (var i = 0; i < this.max; i++) {
            s_heart_off.draw(ctx, 10 + i * 24, 10);
            if (i < this.amount) s_heart.draw(ctx, 10 + i * 24, 10);
        }

    }

}

donuts = {

    list: [],

    interval: 50,
    speed_range: [1, 4],

    update: function() {

        if (frames % this.interval == 0) {

            this.list[this.list.length] = { 
                x: width,
                y: get_random_int(0, height - s_donuts[0].width),
                speed: get_random_int(this.speed_range[0], this.speed_range[1]),
                s_num: get_random_int(0, s_donuts.length - 1)
            };

        }

        for (var i = 0; i < this.list.length; i++) {
            this.list[i].x -= this.list[i].speed;

            if (this.list[i].x < -s_donuts[0].width) this.list.splice(i, 1);
        }

    },

    draw: function(ctx) {

        for (var i = 0; i < this.list.length; i++) {
            var s_num = this.list[i].s_num;
            s_donuts[s_num].draw(ctx, this.list[i].x, this.list[i].y);
        }

    }

}

dog = {

    x: 80,
    y: 0,
    velocity: 0,
    jump_height: 6,
    gravity: 0.3,
    rotation: 0,
    swing_range: 8,
    swing_speed: 10, // чем больше, тем меньше скорость
    beyond: 40,
    rotation_speed: 0.06, // чем больше, тем больше скорость
    rotation_max_angle_down: 0.6,
    rotation_max_angle_up: 0.2,
    is_beyond: false,

    jump: function() {

        this.velocity = -this.jump_height;

    },

    update: function() {

        if (current_state == states["splash"]) {
            this.y = height / 2 + this.swing_range * Math.cos(frames / this.swing_speed);
            this.rotation = 0;
        } else {
            this.velocity += this.gravity;
            this.y += this.velocity;

            if ( (this.y > height + this.beyond) || (this.y < -this.beyond) ) {
                this.is_beyond = true;
            }

            if (this.velocity >= this.jump_height)
                this.rotation = Math.min(this.rotation_max_angle_down, this.rotation + this.rotation_speed);
            else this.rotation = -this.rotation_max_angle_up;
        }

    },

    draw: function(ctx) {

        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);

        s_dog.draw(ctx, -s_dog.width / 2, -s_dog.height / 2);

        ctx.restore();

    }

};