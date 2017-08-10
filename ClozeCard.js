module.exports = ClozeCard;

function ClozeCard(text, cloze){
  this.cloze = cloze;
  this.fullText = text;
  this.partial = text.replace(cloze, '...');

  if (!text.includes(cloze)){
		console.log("ERROR: '" + cloze + "'' doesn't appear in '" + text + "'.");
	}
}

// var secondTry = new ClozeCard("test two works perfectely, "test two");
// console.log(secondTry.cloze);
