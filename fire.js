data = data.concat([
{	
	"id":"fire-sotskull",
	"area":"Fire Temple",
	"displayName":"Song of Time Block Skulltula",
	"tags":["skull","jump","1f"],
	"setups":[{
		"id":"jump",
		"displayName":"Glitchless Jump",
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 04),
		"rating":{
			"difficulty":1,
			"consistency":2,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
			"Align with the wall in the corner",
			"[backflip]",
			"[sidehop:left], [sidehop:right]",
			"[sideroll]",
			"[c:up] and move [analog:right]",
			"Cancel the movement by holding [shield]",
			"Also hold [target]",
			"[analog:up] and [roll]",
			"pull up the ledge"],
	}]
},
{	
	"id":"fire-2fskip",
	"area":"Fire Temple",
	"displayName":"2F Block Skip",
	"tags":["block","2f"],
	"setups":[{
		"id":"jump",
		"displayName":"Glitchless Jump",
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 04),
		"rating":{
			"difficulty":2,
			"speed":3,
			"consistency":2,
			"accuracy":2
		},
		"figures":["gif"],
		"steps":[
			"Grab the ledge next to the block, pull up and turn 90° towards the block",
			"Hold [target] and move link carefully right until the tip of his head exceeds the block",
			"[backflip]",
			"[c:up] and look a little to the right",
			"Hold [target], [roll] and immediately [analog:left]",
			],
	},
	{
		"id":"clip",
		"displayName":"Bomb Clip",
		"items":["bombs"],
		"age":"adult",
		"bannedRulesets":["accessible", "glitchless"],
		"tags":["clip"],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 04),
		"rating": {
			"difficulty":2,
			"consistency":2,
			"speed":2,
			"accuracy":2
		},
		"figures":["gif"],
		"steps":[
			"line up in the corner",
			"slash the sword",
			"turn 90° towards the block and grab it",
			"let go and do a spinattack",
			"pull out a bomb, wait half a second and [shielddrop]",
			"go back in the corner, press [target] and hold [analog:up]"
		]

	},
	{
		"id":"fastclip",
		"displayName":"Bomb Clip without Crystal Switch",
		"items":["bombs"],
		"age":"adult",
		"bannedRulesets":["accessible", "glitchless"],
		"tags":["clip"],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 04),
		"rating": {
			"difficulty":3,
			"consistency":3,
			"speed":1,
			"accuracy":4
		},
		"figures":["gif","jpg"],
		"steps":[
			"line up with the 2nd or 3rd row of tiles before the block",
			"start backwalking and release [target] on the way",
			"grab the ledge, flick [analog:up] to turn and pull out a [bomb]",
			"hold [target] and walk left in the corner",
			"let go [analog:left] and [target] in that order",
			"hold [analog:left] immediately after the clip",
			"press [b] to jumpslash after link stops blinking from damage [fig:2]"
		],
		"mistakes":[
			"wrong timing for the jumpslash can result in getting traped in the jail or fall down out of bounds"
		],

	}
	]
},
]);
