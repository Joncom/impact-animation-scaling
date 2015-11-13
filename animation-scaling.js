ig.module('plugins.animation-scaling')
.requires('impact.animation')
.defines(function() {
    ig.Animation.inject({
        scale: { x : 1, y: 1 },
        draw: function( targetX, targetY ) {
            var scale = ig.system.scale;
            ig.system.context.save();
            var originX = targetX + (this.sheet.width/2);
            var originY = targetY + (this.sheet.height/2);
            ig.system.context.translate(originX * scale, originY * scale);
            ig.system.context.scale(this.scale.x,this.scale.y);
            ig.system.context.translate(-originX * scale, -originY * scale);
            this.parent(targetX, targetY);
            ig.system.context.restore();
        }
    });
});
