

let increaseValue = 1;
let score = 0
let photo_level = 1;
let lvl = document.getElementById('clicker_level');
lvl.innerHTML = photo_level;


let photo = document.getElementById('igm')
photo.addEventListener("click", handleClick)

let improve = document.getElementById('imp')
improve.addEventListener("click", handleImpClick)


let reset = document.getElementById('etr')
reset.addEventListener("click", handleResetClick)

let photos_peeped = document.getElementById('photos_peeped')





function handleClick() {
	score = score + increaseValue
	updateUI(photos_peeped, score)
}
function handleImpClick() {
	if (score < 10) {
		let msg = "Vous n'avez pas assez d'argent !!!"
		updateUI(photos_peeped, msg)
	} else { 
		photo_level += 1
		updateUI(lvl, photo_level)
		increaseValue += 4
		score -= 10
		updateUI(photos_peeped, score)
	}
}


function handleResetClick() {
	score = 0
	increaseValue = 1
	updateUI(photos_peeped, score)
	photo_level = 1
	updateUI(lvl, photo_level)
	
}

function updateUI(node, variable) {
	node.innerHTML = variable;
}

