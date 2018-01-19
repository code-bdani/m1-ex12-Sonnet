var sonnet = 
`How like a winter hath my absence been<br>From thee, the pleasure of the fleeting year!<br>What freezings have I felt, what dark days seen!<br>What old December's bareness everywhere!<br>And yet this time removed was summer's time;<br>The teeming autumn, big with rich increase,<br>Bearing the wanton burden of the prime,<br>Like widow'd wombs after their lords' decease:<br>Yet this abundant issue seemed to me<br>But hope of orphans, and unfathered fruit;<br>For summer and his pleasures wait on thee,<br>And, thou away, the very birds are mute:<br>&nbsp;&nbsp;&nbsp;Or, if they sing, 'tis with so dull a cheer,<br>&nbsp;&nbsp;&nbsp;That leaves look pale, dreading the winter's near.`;
var orphan = sonnet.indexOf("orphan");
console.log(orphan);    //console logs the index of the orphan variable
console.log(sonnet.length);     //console logs the total number of characters in the "sonnet" variable
var sonnet = sonnet.replace("winter", "yuletide");
var newSonnet = sonnet.replace(/the /gi, "a large ");

document.getElementById("sonnet").innerHTML = newSonnet;
console.log(newSonnet.length);