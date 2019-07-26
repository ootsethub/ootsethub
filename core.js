var data = [];
var setups = [];
var rulesets = ["Glitchless", "Accessible", "NoIM/WW"];
var versions = ["1.0", "1.1", "1.2"];
var rDes = {
	"difficulty": ["n/a", "very easy", "easy", "medium", "difficult", "expert"],
	"speed": ["n/a", "fastest", "fast", "average", "rather slow", "slow"],
	"accuracy" : ["n/a", "very forgiving", "forgiving", "average", "precise", "frame-perfect"],
	"consistency" : ["n/a", "very consistent", "pretty consistent", "average", "below average", "pretty inconsistent"]
}

function initData()
{
	for(var t of data) {
		if(t.setups) {
			for(var s of t.setups) {
				s.tags = s.tags.concat(t.tags).join(" ");
				s.id = t.id+"-"+s.id;
				s.parent = t;
				s.description = parseTags(s.description);
				if(!s.bannedRulesets) s.bannedRulesets=[];
				s.steps = "<li>"+s.steps.join("</li><li>")+"</li>";
				if(s.notes) s.notes = "<li>"+s.notes.join("</li><li>")+"</li>"; else s.notes="";
				if(t.notes) s.notes += "<li>"+t.notes.join("</li><li>")+"</li>";
				if(s.mistakes) s.mistakes = "<li>"+s.mistakes.join("</li><li>")+"</li>";
				s.steps = parseTags(s.steps);
				s.isSetup = true;
				s.area = t.area;
				setups.push(s);

			}
		}
		t.tags = t.tags.join(" ");
		t.isSetup = false;
		setups.push(t);
	}

	home = generateHome();
}

function search(term) 
{
	if(!term) {
		return [];
	}
	var terms = term.split(" ").map(Function.prototype.call, String.prototype.trim);
	var sreg = new RegExp('('+terms.join("|")+')',"mi");
	for(s of setups) {
		s.rank = 0;
		if(s.id.match(sreg)) {
			s.rank += 32;
		}
		if(s.tags.match(sreg)) {
			s.rank += 16;
		}
		if(s.displayName.match(sreg)) {
			s.rank += 8;
		}
		if(s.description && s.description.match(sreg)) {
			s.rank += 4;
		}
	}

	return setups.filter(x=>x.rank > 0 && ((!x.isSetup && x.setups.length > 1) || x.isSetup));
}

function getContent(id)
{
	return setups.find(x=>x.id==id);
}
