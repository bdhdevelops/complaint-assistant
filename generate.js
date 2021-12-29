var templateContainer = document.getElementById("template-container");
var complaintHistoryReview =  {};
var bhrReview = {};
var retainSampleAnalysis = {};
var riskReview = {};
var returnSampleAnalysis = {};
var capaRequired = {};
var investigationSummary = {};
var investigationExecSummary = {};
var asAnalyzedCode1 = {};
var asAnalyzedCode2 = {};
var typeOfInvestigationCode = {};
var investigationFindingsCode = {};
var investigationConclusionCode = {};
var componentCode = {};

complaintHistoryReview = {
	"256082": "<p> Reference CAPA #1878253. </p>"
}

bhrReview = {
	"256082": "<p> A BHR review was performed on batch number XXXX for the kit SARS-CoV-2 Veritor \
		       (material #256082). No relevant issues were found. </p>"
}

submitButton.addEventListener("click", function() {
	generateTemplate();
	toggleForm();
}); 

returnToFormButton.addEventListener("click", function() {
	toggleForm();
});



function checkForWeird(failure, product) {
	if (product.value == "256094") {
		console.log("Veritor at home.");
	}
}

function generateTemplate() {
	var formInfo = document.getElementById("main-form").elements;
	var productLine = formInfo[0];
	var failureMode = formInfo[1];
	checkForWeird(failureMode, productLine);

	// VANILLA CASE
	// 00000000
	if (!formInfo[2].checked 
		&& !formInfo[3].checked
		&& !formInfo[5].checked
		&& !formInfo[6].checked
		&& !formInfo[8].checked
		&& !formInfo[9].checked 
		&& !formInfo[11].checked 
		&& !formInfo[12].checked) 
	{
		console.log("CASE 00000000: No products or photos returned; no retention or batch testing performed.");
		templateContainer.innerHTML += complaintHistoryReview["256082"];
		templateContainer.innerHTML += bhrReview["256082"];
	}

	//00000011
	else if (!formInfo[2].checked 
		&& !formInfo[3].checked
		&& !formInfo[5].checked
		&& !formInfo[6].checked
		&& !formInfo[8].checked
		&& !formInfo[9].checked 
		&& formInfo[11].checked 
		&& formInfo[12].checked) 
	{
		console.log("CASE 00000011: Only retention testing; retention testing confirmed problem.");
	}

	//00001000
	else if (!formInfo[2].checked 
		&& !formInfo[3].checked
		&& !formInfo[5].checked
		&& !formInfo[6].checked
		&& formInfo[8].checked
		&& !formInfo[9].checked 
		&& !formInfo[11].checked 
		&& !formInfo[12].checked) 
	{
		console.log("CASE 00001000: Only batch testing; batch testing did not confirm problem.");
	}

	//00001010
	else if (!formInfo[2].checked 
		&& !formInfo[3].checked
		&& !formInfo[5].checked
		&& !formInfo[6].checked
		&& formInfo[8].checked
		&& !formInfo[9].checked 
		&& formInfo[11].checked 
		&& !formInfo[12].checked) 
	{
		console.log("CASE 00001010: Batch and retention; neither confirmed.");
	}
	
	//00001011
	else if (!formInfo[2].checked 
		&& !formInfo[3].checked
		&& !formInfo[5].checked
		&& !formInfo[6].checked
		&& formInfo[8].checked
		&& !formInfo[9].checked 
		&& formInfo[11].checked 
		&& formInfo[12].checked) 
	{
		console.log("CASE 00001011: Batch and retention; retention confirmed.");
	}

	//00001100
	else if (!formInfo[2].checked 
		&& !formInfo[3].checked
		&& !formInfo[5].checked
		&& !formInfo[6].checked
		&& formInfo[8].checked
		&& formInfo[9].checked 
		&& !formInfo[11].checked 
		&& !formInfo[12].checked) 
	{
		console.log("CASE 00001011: Only batch; batch investigation confirmed.");
	}

	//00001110
	else if (!formInfo[2].checked 
		&& !formInfo[3].checked
		&& !formInfo[5].checked
		&& !formInfo[6].checked
		&& formInfo[8].checked
		&& formInfo[9].checked 
		&& formInfo[11].checked 
		&& !formInfo[12].checked) 
	{
		console.log("CASE 00001110: Batch and retention; batch investigation confirmed.");
	}

	//00001111
	else if (!formInfo[2].checked 
		&& !formInfo[3].checked
		&& !formInfo[5].checked
		&& !formInfo[6].checked
		&& formInfo[8].checked
		&& formInfo[9].checked 
		&& formInfo[11].checked 
		&& formInfo[12].checked) 
	{
		console.log("CASE 00001111: Batch and retention; both confirmed the problem.");
	}

	//00100000
	else if (!formInfo[2].checked 
		&& !formInfo[3].checked
		&& formInfo[5].checked
		&& !formInfo[6].checked
		&& !formInfo[8].checked
		&& !formInfo[9].checked 
		&& !formInfo[11].checked 
		&& !formInfo[12].checked) 
	{
		console.log("CASE 00100000: Only photographs returned; problem not confirmed.");
	}

	//00100010
	else if (!formInfo[2].checked 
		&& !formInfo[3].checked
		&& formInfo[5].checked
		&& !formInfo[6].checked
		&& !formInfo[8].checked
		&& !formInfo[9].checked 
		&& formInfo[11].checked 
		&& !formInfo[12].checked) 
	{
		console.log("CASE 00100010: Photographs and retention testing; problem not confirmed.");
	}

	//00100011
	else if (!formInfo[2].checked 
		&& !formInfo[3].checked
		&& formInfo[5].checked
		&& !formInfo[6].checked
		&& !formInfo[8].checked
		&& !formInfo[9].checked 
		&& formInfo[11].checked 
		&& formInfo[12].checked) 
	{
		console.log("CASE 00100011: Photographs and retention testing; retention confirmed the problem.");
	}

	//00101000
	else if (!formInfo[2].checked 
		&& !formInfo[3].checked
		&& formInfo[5].checked
		&& !formInfo[6].checked
		&& formInfo[8].checked
		&& !formInfo[9].checked 
		&& !formInfo[11].checked 
		&& !formInfo[12].checked) 
	{
		console.log("CASE 00101000: Photographs and batch testing; neither confirmed the problem.");
	}

	/*
	00101011
	00101100
	00101101
	00101110
	00101111
	00110000
	00110001
	00110010
	00110011
	00110100
	00110101
	00110110
	00110111
	00111000
	00111001
	00111010
	00111011
	00111100
	00111101
	00111110
	00111111
	01000000
	01000001
	01000010
	01000011
	01000100
	01000101
	01000110
	01000111
	01001000
	01001001
	01001010
	01001011
	01001100
	01001101
	01001110
	01001111
	01010000
	01010001
	01010010
	01010011
	01010100
	01010101
	01010110
	01010111
	01011000
	01011001
	01011010
	01011011
	01011100
	01011101
	01011110
	01011111
	01100000
	01100001
	01100010
	01100011
	01100100
	01100101
	01100110
	01100111
	01101000
	01101001
	01101010
	01101011
	01101100
	01101101
	01101110
	01101111
	01110000
	01110001
	01110010
	01110011
	01110100
	01110101
	01110110
	01110111
	01111000
	01111001
	01111010
	01111011
	01111100
	01111101
	01111110
	01111111
	10000000
	10000001
	10000010
	10000011
	10000100
	10000101
	10000110
	10000111
	10001000
	10001001
	10001010
	10001011
	10001100
	10001101
	10001110
	10001111
	10010000
	10010001
	10010010
	10010011
	10010100
	10010101
	10010110
	10010111
	10011000
	10011001
	10011010
	10011011
	10011100
	10011101
	10011110
	10011111
	10100000
	10100001
	10100010
	10100011
	10100100
	10100101
	10100110
	10100111
	10101000
	10101001
	10101010
	10101011
	10101100
	10101101
	10101110
	10101111
	10110000
	10110001
	10110010
	10110011
	10110100
	10110101
	10110110
	10110111
	10111000
	10111001
	10111010
	10111011
	10111100
	10111101
	10111110
	10111111
	11000000
	11000001
	11000010
	11000011
	11000100
	11000101
	11000110
	11000111
	11001000
	11001001
	11001010
	11001011
	11001100
	11001101
	11001110
	11001111
	11010000
	11010001
	11010010
	11010011
	11010100
	11010101
	11010110
	11010111
	11011000
	11011001
	11011010
	11011011
	11011100
	11011101
	11011110
	11011111
	11100000
	11100001
	11100010
	11100011
	11100100
	11100101
	11100110
	11100111
	11101000
	11101001
	11101010
	11101011
	11101100
	11101101
	11101110
	11101111
	11110000
	11110001
	11110010
	11110011
	11110100
	11110101
	11110110
	11110111
	11111000
	11111001
	11111010
	11111011
	11111100
	11111101
	11111110
	11111111*/
}
