ig.module( 'game.levels.1' )
.requires( 'impact.image','game.entities.player' )
.defines(function(){
Level1=/*JSON[*/{
	"entities": [
		{
			"type": "EntityPlayer",
			"x": 496,
			"y": 104
		}
	],
	"layer": [
		{
			"name": "main",
			"width": 16,
			"height": 10,
			"linkWithCollision": false,
			"visible": true,
			"tilesetName": "media/background/Purple.png",
			"repeat": false,
			"preRender": false,
			"distance": 1,
			"tilesize": 64,
			"foreground": false,
			"data": [
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1],
				[0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1],
				[0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
				[0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0],
				[0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0]
			]
		}
	]
}/*]JSON*/;
Level1Resources=[new ig.Image('media/background/Purple.png')];
});