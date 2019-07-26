data = data.concat([
{	
	"id":"basic-flamestorage",
	"area":"Basics",
	"displayName":"Flame Storage",
	"tags":[],
	"description":"",
	"setups":[
		{
			"id":"torch",
			"displayName":"from a torch",
			"bannedRulesets":"glitchless",
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
				"Pull out a Deku Stick and ignite it",
				"Put the stick away (with the stick in hit range of the torch during pack animation)",
				"Pull the stick where you need it",
			],
			"notes": [
				"It doesn't have to be put away using [a], pulling another item like Slingshot works as well",
				"Using the sword or leaving a scene/map will cancel flame storage",
				"There is no time limit on storing the flame",
				"Entering a body of water will not cancel the effect"
			],
			"description":"",
		}
	],
},
{	
	"id":"basic-bottleonb",
	"area":"Basics",
	"displayName":"Bottle on B",
	"tags":[],
	"description":"",
	"setups":[
		{
			"id":"adultbombs",
			"displayName":"using Bombs",
			"bannedRulesets":["glitchless","accessible"],
			"age":"adult",
			"items":["bottle","bombs","shield"],
			"tags":[],
			"authors":["meanmido"],
			"dateAdded":new Date(2019, 06, 04),
			"rating":{
				"difficulty":3,
				"consistency":1,
				"speed":2,
				"accuracy":5
			},
			"figures":["gif","jpg"],
			"steps":[
				"Align with a wall",
				"[sidehop]",
				"2x [roll]",
				"Shielddrop a bomb",
				"[roll]",
				"[backflip]",
				"Drop contents of a bottle",
				"Pull the bottle back out",
				"Hold [z] and [r]",
				"Pausebuffer to the frame where Link's shield is tilted to the right [fig:2]",
				"Press [b] during the unpause lag",
				"Also hold the bottle button",
				"Release [r] in catch range of the bugs/fish"
			],
			"notes": [
				"Depending on where you perform the setup you might not see Link as good to identify the correct frame",
				"The setup requires an even ground, a straight wall and enough space to move"
			],
			"description":"",
		},
		{
			"id":"adultfield",
			"displayName":"in Hyrule Field",
			"bannedRulesets":["glitchless","accessible"],
			"age":"adult",
			"items":["bottle","shield"],
			"tags":[],
			"authors":["meanmido"],
			"dateAdded":new Date(2019, 06, 04),
			"rating":{
				"difficulty":3,
				"consistency":2,
				"speed":2,
				"accuracy":2
			},
			"figures":["gif"],
			"steps":[
				"Position roughly 2x [sidehop:left], 2x crouchstab from the step-marking on the wall",
				"Drop the bottled content",
				"Pull the bottle back out",
				"[sidehop:right] into the shallow water",
				"Press [b] right before Link touches the water surface",
				"Wait until Link is back on solid ground",
				"Hold [z] and [r] and move towards to the bugs/fish",
				"Hold the bottle button as well and release [r]",
			],
			"notes": [
				"Positioning is not all to precise, it's only important that Link floats back on land after the sidehop",
			],
			"description":"",
		},
		{
			"id":"childkokiri",
			"displayName":"in Kokiri Forest",
			"bannedRulesets":["glitchless","accessible"],
			"age":"child",
			"items":["bottle","shield"],
			"tags":[],
			"authors":["meanmido"],
			"dateAdded":new Date(2019, 06, 04),
			"rating":{
				"difficulty":3,
				"consistency":2,
				"speed":2,
				"accuracy":2
			},
			"figures":["gif"],
			"steps":[
				"Align with the pillar in the middle",
				"Drop the bottled content",
				"[sidehop:left]",
				"Pull the bottle back out",
				"[backflip] and press [b] right before Link touches the water surface",
				"Hold [z] and [r] and move back to the pillar",
				"Hold bottle button as well and release [r] in catch range of the bugs/fish"
			],
			"description":"",
		},
		{
			"id":"childdomain",
			"displayName":"in Zora's Domain",
			"bannedRulesets":["glitchless","accessible"],
			"age":"child",
			"items":["bottle","shield"],
			"tags":[],
			"authors":["meanmido"],
			"dateAdded":new Date(2019, 06, 04),
			"rating":{
				"difficulty":2,
				"consistency":2,
				"speed":2,
				"accuracy":2
			},
			"figures":["gif"],
			"steps":[
				"Align with the wall so that the back of Links left foot is on the water line",
				"2x [sidehop:right]",
				"Turn 90° left on the spot",
				"[roll]",
				"Pull out the bottle",
				"[sidehop:right] and press [b] when Link is losing height of his sidehop",
				"Move to the fish and hold [z] and [r]",
				"Also hold bottle button and release [r] in catch range of the fish"
			],
			"notes":[
				"Pressing B to [quickdraw] is done a bit earlier than on other setups. If Link puts away the bottle after he reaches land B was probably pressed to late",
				"This setup has no time constraint since it doesn't require to re-catch bottled content"
			],
			"description":"",
		}
	],
	"notes":[
		"Pressing the bottle button followed directly by [r] lets Link pull out the bottle without swinging it, since the shield cancels the animation",
		"If you miss catching the bottle content you can try again by holding [r] and then the bottle button",
		"Once you use a C button in a different way than a [shieldswipe] you'll lose B as the last used item"
	]
},
	{
		"id":"basic-groundjump",
		"area":"Basics",
		"displayName":"Ground Jump",
		"tags":[],
		"description":"",
		"setups":[
		{
			"id":"bombs",
			"displayName":"using Bombs",
			"bannedRulesets":"glitchless",
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
				"Hold [z]",
				"Shielddrop a bomb",
				"Take a step back (stay in grab range)",
				"Pull out a sword or stick",
				"Hold [r]",
				"Press [a] to put the sword/stick away",
				"Shield the explosion",
				"[backflip] somewhere you want to jump from the ground"
			],
			"notes": [
				"you can't interact with actors (chests, ladders, bombflowers, NPCs, etc) or use items while ground jump is active",
				"any type of jumping or getting damaged by enemies will cancel the effect",
			],
			"description":"",
		}
		]
	},
{	
	"id":"basic-isg",
	"area":"Basics",
	"displayName":"Infinite Sword Glitch",
	"tags":[],
	"description":"",
	"notes": [
		"Pulling out the sword/stick while backflipping will not cancel ISG",
		"When successful the sword will leave a trail",
		"While ISG is active it is impossible to fall or jump",
		"Slashing the sword, shielding or getting damaged cancels the effect",
	],
	"setups":[
		{
			"id":"bomb",
			"displayName":"from a bomb",
			"bannedRulesets":["glitchless","accessible"],
			"tags":[],
			"authors":["meanmido"],
			"dateAdded":new Date(2019, 06, 04),
			"rating":{
				"difficulty":2,
				"consistency":2,
				"accuracy":1
			},
			"figures":["gif"],
			"steps":[
				"Shielddrop a bomb",
				"[crouchstab] in grab range",
				"when Link pulls back the sword interrupt the animation by grabbing the bomb",
				"throw away the bomb to avoid getting damage"
			],
			"notes": [
				"It depends on where the bomb lands to be automatically in grab range, Link is usually too close. Starting to backwalk and then pulling out a bomb, let go of [z] and pressing [r] at the same time might help to get quickly in a decent position for the crouchstab" 
			],
			"description":"",
		},
		{
			"id":"enemy",
			"displayName":"from an Enemy",
			"bannedRulesets":["glitchless","accessible"],
			"tags":[],
			"authors":["meanmido"],
			"dateAdded":new Date(2019, 06, 04),
			"rating":{
				"difficulty":1,
				"consistency":1,
				"accuracy":3
			},
			"figures":["gif"],
			"steps":[
				"[crouchstab] in enemy range",
				"Press [z] followed immediately by [c:up]",
			],
			"description":"",
		}
	],
},
{	
	"id":"basic-ocarinaitems",
	"area":"Basics",
	"displayName":"Ocarina Items",
	"tags":["songs","bottle"],
	"description":"",
	"setups":[
		{
			"id":"backflip",
			"displayName":"using a Backflip",
			"bannedRulesets":["glitchless","accessible"],
			"tags":[],
			"authors":["meanmido"],
			"dateAdded":new Date(2019, 06, 24),
			"rating":{
				"difficulty":1,
				"consistency":1,
				"speed":2,
				"accuracy":1
			},
			"figures":["gif"],
			"steps":[
				"Catch something in a bottle",
				"[backflip] and press Bottle-button followed with a pullable item before Link touches the ground",
			],
			"notes": [
				"Jumping down from a higher place greatly increases the time to press the buttons",
			],
			"description":"",
		},
		{
			"id":"ess",
			"displayName":"using ESS Position",
			"bannedRulesets":["glitchless","accessible"],
			"tags":[],
			"authors":["meanmido"],
			"dateAdded":new Date(2019, 06, 24),
			"rating":{
				"difficulty":2,
				"consistency":1,
				"speed":1,
				"accuracy":1
			},
			"figures":["gif"],
			"steps":[
				"Catch something in a bottle",
				"Hold slightly down until Link's feet begin to shuffle",
				"Press Bottle-button followed by a pullable item"
			],
			"description":"",
		}
	],
},
]);
