data = data.concat([
{	
	"id":"zd-fountainclip",
	"area":"Zora's Domain",
	"displayName":"Fountain without Letter",
	"tags":[],
	"setups":[{
		"id":"adult",
		"displayName":"as Adult",
		"bannedRulesets":["accessible","glitchless"],
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 27),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
			"Align with the pillar", 
			"Pull out the sword",
			"Move sideways and forward to walk into the edge",
			"[jumpslash]",
			"Move towards the fountain exit",
		]
	}],
	"notes": [
		"You can also manually aim for the jumpslash, the required angle is not all too precise"
	]
},
{	
	"id":"zd-unthaw",
	"area":"Zora's Domain",
	"displayName":"Unthaw King Zora",
	"tags":[],
	"setups":[{
		"id":"sign",
		"displayName":"using the sign",
		"bannedRulesets":["accessible","glitchless"],
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 27),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
			"Walk up to King Zora without facing him", 
			"Align the tip of Link's head with the last white streak",
			"[sidehop:left]",
			"[a] to read the sign",
			"Reload the area by walking down and up again",
		]
	}],
	"notes": [
		"It is important that Link never faced King Zora after loading the upper area (until reading the sign)",
		"Instead of reading the sign it is also possible to use any item that causes the camera to pan (like trade items). That's even easier and faster"
	]
},
{	
	"id":"zr-upperhp",
	"area":"Zora River",
	"displayName":"PoH near Waterfall",
	"tags":["hp","jump","river","zora", "waterfall","upper"],
	"setups":[{
		"id":"jump",
		"displayName":"Glitchless Jump",
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 27),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"accuracy":4
		},
		"figures":["gif"],
		"steps":[
			"Align with wall in the corner", 
			"[backflip]",
			"[sidehop:left]",
			"[roll+retarget]",
			"[roll] and pull back up",
			"[roll]",
			"Hold [analog:down]"],
	}],
	"resources": [
		"https://www.youtube.com/watch?v=FXxvf0IgmhQ",
		"https://www.youtube.com/watch?v=Tc0CcFZGyfU",
		"https://www.youtube.com/watch?v=FnAUX95cAyA"
	]

},
{	
	"id":"zr-lowerhp",
	"area":"Zora River",
	"displayName":"Pillar PoH",
	"tags":["hp","jump","river","zora", "pillar","lower"],
	"description":"",
	"setups":[{
		"id":"jump",
		"displayName":"Glitchless Jump",
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 07, 01),
		"rating":{
			"difficulty":2,
			"consistency":2,
			"accuracy":4
		},
		"figures":["gif","png"],
		"steps":[
			"Backwalk (closest to the wall) to the edge and pull back up",
			"[roll]",
			"180° turn on the spot",
			"[c:up] and align left side of B Button with the black streak [fig:2]",
			"Hold [analog:up] and [roll]"
		],
		"description":"",
		"notes":["Instead of free camera adjustment 1 [ess:left] should work as well"],
		"mistakes":["The roll-timing is somewhat important. Press [a] a couple of frames later than [analog:up]"]
	}]
},
{	
	"id":"sfm-mazeskip",
	"area":"Sacred Forest Meadow",
	"displayName":"Maze Skip",
	"tags":["jump","sfm","maze"],
	"description":"",
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
			"accuracy":2
		},
		"figures":["gif"],
		"steps":[
			"Kill the Moblin",
			"Align with the wall at the maze entrance",
			"[sidehop] to the wall",
			"[backflip]",
			"90° turn left on the spot",
			"2x [sidehop:left]",
			"[backflip]",
			"[c:up] and look a tiny amount left",
			"hold [target], [roll] and immediately hold [analog:right]"
		],
		"description":"",
	}]
},
{	
	"id":"hw-sand",
	"area":"Haunted Wasteland",
	"displayName":"Itemless Quicksand",
	"tags":["pit"],
	"description":"",
	"setups":[{
		"id":"forward",
		"displayName":"Forward",
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 04),
		"rating":{
			"difficulty":2,
			"consistency":2,
			"accuracy":2
		},
		"figures":["gif"],
		"steps":[
			"Align with the left border of the quicksand",
			"Turn 180° and get unstuck from the sand (2-3 rolls)",
			"Backwalk across",
			"Stop movement immediately once on solid ground"
		],
		"notes": [
			"There is not much space on the other side, so it's easy to overshoot"
		],
		"description":"",
	},
	{
		"id":"reverse",
		"displayName":"Reverse",
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 04),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
			"Align with the right border of the quicksand",
			"Turn 180°",
			"[sidehop:right] until you did 2 proper length sidehops",
			"2x [sidehop:left] and hold [analog:down]"
		],
		"mistakes": [
			"Not having full momentum will result in voiding out. Try to execute the sidehops fast without interrupts",
			"If you don't start close enough to the edge your movement to get unstuck might result in backwalking too far inwards. In that case you need to compensate manually using an additional sidehop or try again"
		],
		"description":"",
	}]
},
{	
	"id":"hw-path",
	"area":"Haunted Wasteland",
	"displayName":"Lensless Path",
	"tags":[],
	"description":"",
	"setups":[{
		"id":"forward",
		"displayName":"Forward",
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 04),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
			"Move forward and cross the seam after the flag polls (vertical)",
			"Turn left and walk to the beginning of the hill (horizontal)",
			"Cross the seam on your left (slightly downwards)",
			"Walk the hill up along the seam (slightly upwards)",
			"Walk the hill down (-45° down) until reaching about the height of the exit",
			"Turn towards the exit"
		],
		"notes": [
		],
		"description":"",
	},
	{
		"id":"reverse",
		"displayName":"Reverse",
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 04),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
			"Move straight forward until the leever in your way appears + 3 rolls more",
			"Turn 45° left",
			"Walk straight up the hill",
			"Follow the seam on the left down",
			"Right before the bottom of the hill, cross the seam to the left side",
			"Walk a bit more",
			"Turn towards the structure"
		],
		"description":"",
	}]
},
{	
	"id":"gy-gravechest",
	"area":"Graveyard",
	"displayName":"Composer Grave Chest",
	"tags":["fire","magic","grave"],
	"description":"",
	"setups":[{
		"id":"flamestorage",
		"displayName":"using Deku Stick",
		"age":"child",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 04),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
			"Get [#basic-flamestorage]",
			"Go into the corner",
			"2x [backflip]",
			"4x [sidehop:left]",
			"Pull out the Deku Stick",
			"[sidehop:left] until reaching the door",
			"Turn towards the door by flicking [analog:left]",
			"Light the second torch",
		],
		"mistakes": [
			"The composer grave is divided into 2 sections. Once you cross the section to the redead-part (slightly further than the 4 sidehops), you'll lose flame storage",
			"The door has to be opened at a specific position that Link automatically lights the first torch when going through. Manual adjustment of the position should not be required with this setup"
		],
		"description":"",
	}]
},
{	
	"id":"lh-water",
	"area":"Lake Hylia",
	"displayName":"Enter Watertemple",
	"tags":["lab"],
	"description":"",
	"setups":[{
		"id":"clip",
		"displayName":"without Items",
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 14),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"accuracy":4
		},
		"figures":["gif","png"],
		"steps":[
			"Get into the corner of the chimney",
			"[sidehop:left]",
			"[roll]",
			"[backflip]",
			"[sidehop:right]",
			"[roll+retarget]",
			"Press [b] and cancel with [r]",
			"Shield-Turn 180°",
			"[jumpslash]",
			"2x [backflip]",
			"Jump down and swim the right way around inside the island without clipping back in bounds",
			"Touch the loadingzone"
		],
		"notes":[
			"While swimming to the island the camera will lock in place until reaching almost the island",
			"Swim towards the right edge of the visible water, but stay below solid ground [fig:2]",
			"You might want to kill the guay first, since it can disturb the clipping setup"
		],
		"mistakes": [
			"Crouchstabbing at step 7 will make Link recoil and mess up the position",
		],
		"description":"",
		"resources":[
			"https://youtu.be/nkz1suNoI1s",
		]
	}]
},
{	
	"id":"kak-houseclip",
	"area":"Kakariko Village",
	"displayName":"House Clip",
	"tags":[],
	"bannedRulesets":["accessible","glitchless"],
	"description":"",
	"setups":[
	{
		"id":"bazaar",
		"displayName":"Bazaar",
		"age":"child",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 14),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
		],
		"description":"",
	},
	{
		"id":"impa",
		"displayName":"inside Impa's House",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 14),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
			"Align with the wall",
			"Move sideways to the shelf",
			"Slowly move backwards and as soon as Link starts to grab the ledge press/mash [a]"
		],
		"description":"",
	},
	{
		"id":"potion",
		"displayName":"Potion Shop",
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 14),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
		],
		"description":"",
	},
	{
		"id":"gallery",
		"displayName":"Shooting Gallery",
		"age":"adult",
		"tags":[],
		"authors":["meanmido"],
		"dateAdded":new Date(2019, 06, 14),
		"rating":{
			"difficulty":1,
			"consistency":1,
			"accuracy":1
		},
		"figures":["gif"],
		"steps":[
			"[sidehop:right], [sidehop:left], [roll] to get a 45° angle",
			"Pull out the sword",
			"Move into the corner of the box",
			"2x [crouchstab] and [jumpslash]"
		],
		"notes":[
			"When reaching the box quickly shield or let go of the analogstick. Link might climb the box when the movement continues"
		],
		"description":"",
	}
	],
	"notes": [
		"Shielding after a jumpslash cancels Link back-movement and makes it easier to not clip back in bounds"
	]
},

]);
