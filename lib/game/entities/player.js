ig.module("game.entities.player")
  .requires("impact.game", "impact.image")
  .defines(function () {
    console.log("loading entit");
    ig.global.EntityPlayer = ig.Entity.extend({
      // Set some of the properties
      //   collides: ig.Entity.COLLIDES.ACTIVE,
      type: ig.Entity.TYPE.A,
      //   checkAgainst: ig.Entity.TYPE.B,

      size: { x: 64, y: 64 },
      health: 50,

      // Load an animation sheet
      animSheet: new ig.AnimationSheet("media/enemy04_sheet.png", 64, 64),

      init: function (x, y, settings) {
        // Add animations for the animation sheet
        this.addAnim("idle", 0.1, [0, 1, 2]);
        this.addAnim("jump", 0.1, [3, 4, 5]);

        // Call the parent constructor
        this.parent(x, y, settings);
      },

      update: function () {
        // This method is called for every frame on each entity.
        // React to input, or compute the entity's AI here.

        if (ig.input.pressed("jump")) {
          this.vel.y = -100;
          this.currentAnim = this.anims.jump.rewind();
        }

        // Call the parent update() method to move the entity
        // according to its physics
        this.parent();
      },
    });
  });
