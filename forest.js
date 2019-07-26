data = data.concat([
{	
	"id":"forest-backyard",
	"area":"Forest Temple",
	"displayName":"Accessing the backyard",
	"tags":[],
	"setups":[
	{
		"id":"ledgecancel",
		"items":[],
		"displayName":"using Ledge Cancel",
		"tags":[],
		"bannedRulesets":["accessible","glitchless"],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 27),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"speed":1,
			"accuracy":2
		},
		"figures":["gif"],
		"steps":[
			"Get on the song of time block and stand on the very left side",
			"[sidehop:right]",
			"[sidehop:left]",
			"Press [a] to roll and immediately [z] ",
		],
	},
	{
		"id":"outofbounds",
		"displayName":"by clipping Out of Bounds",
		"tags":[],
		"bannedRulesets":["accessible","glitchless"],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 27),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"speed":4,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
			"Jumpslash into the pillar",
			"Jump into the unloaded room",
			"Go through the door and back",
		],
	},
	{
		"id":"recoil",
		"displayName":"using a Recoil Jump",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 27),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"speed":3,
			"accuracy":1
		},
		"figures":["gif","jpg"],
		"steps":[
			"[sidehop:left] to the ropes",
			"Pull out the sword",
			"Align as shown [fig:2]",
			"Move forward",
			"As soon as Link jumps press/mash [b] and hold [analog:down]"
		],
	},
	]
},
{	
	"id":"forest-bossdoor",
	"area":"Forest Temple",
	"displayName":"Enter Boss Room",
	"tags":[],
	"setups":[
	{
		"id":"itemless",
		"items":[],
		"displayName":"without Items",
		"tags":[],
		"bannedRulesets":["accessible","glitchless"],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 27),
		"rating":{
			"difficulty":2,
			"consistency":1,
			"speed":4,
			"accuracy":2
		},
		"figures":["gif","jpg","jpg"],
		"steps":[
			"Go into the right corner and align as shown [fig:2]",
			"[backflip] and pull back up",
			"Move along the right front corner",
			"Align [fig:3]",
			"Hold [z] and move slowly forward until Link clips into the ground",
			"Let go and jump down to the loadingzone"
		],
		"notes": [
			"Aligning with the wall and backwalking to the corner might help to not accidentally clip back"
		],
	},
	{
		"id":"hookshot",
		"displayName":"using Hookshot",
		"tags":[],
		"bannedRulesets":["accessible","glitchless"],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 27),
		"rating":{
			"difficulty":2,
			"consistency":1,
			"speed":1,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
			"Stand in the front right corner and aim right to the door knob",
			"Hold [z]",
			"[backflip] and immediately cancel by firing hookshot",
			"[roll] and let go of the ledge",
			"Jump down to the loadingzone"
		],
		"notes": [
			"firing the hookshot needs to be done very quickly after the backflip. Almost immediately"
		]
	},
	],
	"notes": [
		"When jumping to the loadingzone move in direction of the stairs with roll speed. If you short-hop you'll miss it"
	]
},

]);
