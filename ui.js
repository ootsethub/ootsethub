var results = [];
var home = "";

function changePage()
{
	var hash = location.hash.substring(1);
	if(hash.length > 0) {
		var c = getContent(hash);
		if(c) {
			$('#content').html(generateFull(getContent(hash)));
		}
	} else if($('#search').val() == "") {
		$('#content').html(home);
	} else {
		results = search($('#search').val());
		var o = "";
		var i = 0;
		for(r of results) {
			o += generateCard(r);
			if(i>=8)
				break;
//			i++;
		}
		$('#content').html(o);
	}
}

function ucfirst(string) 
{
	if(!string) return "";
	return string.charAt(0).toUpperCase() + string.slice(1);
}

var tagRegex = /\[\#?(([a-z0-9-\+]+?(\d+)?)(:([a-z0-9- ]+))?)\]/gmi;
function parseTags(text)
{
	while(match = tagRegex.exec(text)) {
		console.log(match);
		if(match[0][1] == '#')
			text = text.replace(match[0],'<a href="#'+match[1]+'">'+match[1]+'</a>');
		switch(match[2]) {
			case "z":
			case "target": text = text.replace(match[0],'<em>Z-Target</em>'); break;
			case "backflip": text = text.replace(match[0],'<em>Backflip</em>'); break;
			case "sidehop": text = text.replace(match[0], '<em>Sidehop '+ucfirst(match[5])+'</em>'); break;
			case "c": text = text.replace(match[0], '<em>C '+ucfirst(match[5])+'</em>'); break;
			case "roll": text = text.replace(match[0], '<em>Roll</em>'); break;
			case "roll+retarget": text = text.replace(match[0], '<em>Retarget-Roll</em>'); break;
			case "analog": text = text.replace(match[0], '<em>Analog '+ucfirst(match[5])+'</em>'); break;
			case "fig": text = text.replace(match[0], '(s. <em>Figure '+match[5]+'</em>)'); break;
			case "ess": text = text.replace(match[0], '<em>ESS-Turn '+ucfirst(match[5])+'</em>'); break;
			case "a": text = text.replace(match[0], '<em>A</em>'); break;
			case "b": text = text.replace(match[0], '<em>B</em>'); break;
			case "r": text = text.replace(match[0], '<em>R</em>'); break;
			case "jumpslash": text = text.replace(match[0], '<em>'+ucfirst(match[1])+'</em>'); break;
		}
	}
	return text;
}

function generateFull(data)
{
	if(data.setups) {
		var o = '';
		for(setup of data.setups) {
			o += generateFull(setup);
		}
		return o;
	} else {
		var o = '';
		

		o += '<h1>';
		if(data.area)
			o += data.area+' - ';
		if(data.isSetup)
			o += data.parent.displayName+": "+data.displayName;
		else
			o += data.displayName;
		o += '</h1>';



		o += '<div class="full container">';
		o += '<div class="">';
		

		o += '<div class="panel panel-primary"><div class="panel-body"><div class="figures">';
		for(f in data.figures) {
			o += generateFigure(data.id, data.figures[f], parseInt(f)+1);
		}
		o += '</div></div></div>';
		o += '</div>';

		o += '<div class="c_right">';
		o += '<div class="panel panel-primary"><div class="panel-heading">Steps</div><div class="panel-body"><div class=""><ol>';
		o += data.steps;
		o += '</ol></div></div></div>';


		o += '<div class="panel panel-primary"><div class="panel-body"><div class=""><table class="infotable">';
		o += '<tr><td>Rulesets</td><td><span class="ruleset">'+rulesets.filter(f=>!data.bannedRulesets.includes(f.toLowerCase())).join('</span><span class="ruleset">')+'</span></td></tr>';
		//o += '<tr><td>Items</td><td></td></tr>';
		o += '<tr><td>Versions</td><td><span class="version">'+versions.join('</span><span class="version">')+'</span></td></tr>';
		if(data.age) o += '<tr><td>Age</td><td>'+ucfirst(data.age)+'</td></tr>';
		o += '<tr class="sep"><td></td><td></td></tr>';
		o += '<tr><td>&#9819; <span class="tooltip">Difficulty<span class="tooltiptext">Overall difficulty</span></span></td><td class="level-'+data.rating.difficulty+'">'+rDes.difficulty[data.rating.difficulty]+'</td></tr>';
		o += '<tr><td>&oplus; Accuracy</td><td class="level-'+data.rating.accuracy+'">'+rDes.accuracy[data.rating.accuracy]+'</td></tr>';
		o += '<tr><td>&#128337;&#xFE0E; Speed</td><td class="level-'+data.rating.speed+'">'+rDes.speed[data.rating.speed]+'</td></tr>';
		o += '<tr><td>&#8635;&#xFE0E; Consistency</td><td class="level-'+data.rating.consistency+'">'+rDes.consistency[data.rating.consistency]+'</td></tr>';
		o += '<tr class="sep"><td></td><td></td></tr>';
		if (data.discoveredBy) o += '<tr><td>Discovered by</td><td>'+data.discoveredBy.join(', ')+'</td></tr>';
		//o += '<tr><td>Author</td><td>'+data.authors.join(', ')+'</td></tr>';
		o += '<tr><td>Date added</td><td>'+data.dateAdded.toLocaleDateString()+'</td></tr>';
		//o += '<tr><td>Date updated</td><td></td></tr>';
		o += '</table></div></div></div>';



		o += '<div class="detail">';
		if(data.description) {
			o += '<div class="panel panel-primary"><div class="panel-heading">Description</div><div class="panel-body"><div class="">';
			o += parseTags(data.description);
			o += '</div></div></div>';
		}

		if(data.notes) {
			o += '<div class="panel panel-primary"><div class="panel-heading">&#x270E; Things to note</div><div class="panel-body"><div class=""><ul>';
			o += parseTags(data.notes);
			o += '</ul></div></div></div>';
		}

		if(data.mistakes) {
			o += '<div class="panel panel-primary"><div class="panel-heading">&#x1F494;&#xFE0E; Common mistakes</div><div class="panel-body"><div class=""><ul>';
			o += parseTags(data.mistakes);
			o += '</ul></div></div></div>';
		}
		if(data.resources) {
			o += '<div class="panel panel-primary"><div class="panel-heading">&#x1F4F9;&#xFE0E; Resources</div><div class="panel-body"><div class=""><ul>';
			for(a of data.resources)
				o += '<li><a href="'+a+'" target="_blank">'+a+'</a></li>';
			o += '</ul></div></div></div>';
		}
		if(data.parent.resources) {
			o += '<div class="panel panel-primary"><div class="panel-heading">&#x1F4F9;&#xFE0E; Resources</div><div class="panel-body"><div class=""><ul>';
			for(a of data.parent.resources)
				o += '<li><a href="'+a+'" target="_blank">'+a+'</a></li>';
			o += '</ul></div></div></div>';
		}
		o += '</div>';
		
		o += '</div>';
		o += '</div>';

		return o;
	}
}

function generateCard(data) 
{
	var o = "";
	o += '<div class="card panel panel-default"><div class="panel-heading ">';
	o += '<div class="headpanel">';
	o += '<div class="title"><a href="#'+data.id+'">';
	if(data.area)
		o += data.area+' - ';
	if(data.isSetup)
		o += data.parent.displayName+": "+data.displayName;
	else
		o += data.displayName;
	o += '</a></div>';
	if(data.isSetup) {
		o += '<div class="rating difficulty level-'+data.rating.difficulty+'">&#9819;</div>';
		o += '<div class="rating accuracy level-'+data.rating.accuracy+'">&oplus;</div>';
		o += '<div class="rating speed level-'+data.rating.speed+'">&#128337;&#xFE0E;</div>';
 		o += '<div class="rating consistency level-'+data.rating.consistency+'">&#8635;&#xFE0E;</div>';
 		//o += '<div class="favorite">&#9733;&#xFE0E;</div>';
	}
	o += '</div></div><div class="panel-body card">';
	o += '<div class="figures">';
	for(f in data.figures) {
		if(f > 0)
			break;
		o += generateFigure(data.id, data.figures[f], parseInt(f)+1);
	}
	o += '</div>';
	if(data.isSetup) {
		o += '<div class="steps"><ol>';
		o += data.steps;
		o += '</ol></div>';
	} else {
		o += '<div class="setups"><ul>';
		for(s of data.setups) {
			o += '<li><a href="#'+s.id+'">'+s.displayName+'</a></li>';
		}
		o += '</ol></div>';
	}

	o += '</div></div>';
	return o;
}

function generateFigure(id, ext, n)
{
	var o = '';
	o += '<div class="fig">';
	o += '<img src="img/'+id+'-'+n+'.'+ext+'">';
	o += '<span class="overlay">'+n+'</span>';
	o += '</div>';
	return o;
}

function sortData(a, b)
{
	return a.id > b.id ? 1  : -1;
}

function generateHome()
{
	var o = '<div class="home content">';

	o += '<span class="heading">SetHub</span><br><span class="subheading">Setup DB for OoT Tricks &amp; Glitches</span>';

//	o += '<div class="panel panel-primary"><div class="panel-heading">Usage</div><div class="panel-body"><div class="">';
//	o += '<ul>';
//	o += '<li><em>Esc</em>: Back to Startpage</li>';
//	o += '<li><em>Ctrl+F</em>: Focus search bar</li>';
//	o += '</ul>';
//	o += "</div>";
	
	o += '<div class="index">';
	o += '<ul>';
	for(var obj in data.sort(sortData)) {
		o += '<li>';
		if(data[obj].setups.length==1)
			o += '<a href="#'+data[obj].setups[0].id+'">'+data[obj].setups[0].id+'</a>';
		else {
			o += '<a href="#'+data[obj].id+'">'+data[obj].id+'</a>';
			o += '<ul>';
			for(s in data[obj].setups) {
				o += '<li><a href="#'+data[obj].setups[s].id+'">'+data[obj].setups[s].id+'</a></li>';				
			}
			o += '</ul>';
		}
		o += '</li>';
	}
	o += '</ul>';
	o += '</div>';


	o += '</div>';
	return o;
}
