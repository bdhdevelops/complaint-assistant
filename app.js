

var elements = document.getElementById("main-form").elements;
var submitButton = document.querySelector("#main-form-submit-button");
var resetButton = document.querySelector("#reset-button");
var returnToFormButton = document.getElementById("return-to-form-button");
var productConfirmedLabel = document.getElementById("did-product-confirm-label");
var productConfirmedDescription = document.getElementById("product-confirmed-description");
var photoConfirmedLabel = document.getElementById("did-photo-confirm-label");
var photoConfirmedDescription = document.getElementById("photo-confirmed-description");
var batchTestingLabel = document.getElementById("batch-confirmed-label");
var batchConfirmedDescription = document.getElementById("batch-confirmed-description");
var retentionTestingLabel = document.getElementById("retention-confirmed-label");
var retentionConfirmedDescription = document.getElementById("retention-confirmed-description");

/*************************************************************
FORM STRUCTURE

elements[0] = Product line
elements[1] = Failure mode
elements[2] = Product returned checkbox
elements[3] = Did product return confirm problem checkbox
elements[4] = Product confirmed problem description
elements[5] = Photos returned checkbox
elements[6] = Did photo return confirm problem checkbox
elements[7] = Photo confirmed problem description
elements[8] = Batch testing performed checkbox
elements[9] = Did batch testing confirm problem checkbox
elements[10] = Batch testing confirmed problem description
elements[11] = Retention testing performed checkbox
elements[12] = Did retention testing confirm problem checkbox
elements[13] = Retention testing confirmed problem description

*************************************************************/



function resetForm() {
	elements[2].checked = false;
	elements[3].checked = false;
	elements[3].classList.add("subquestion");
	elements[5].checked = false;
	elements[6].checked = false;
	elements[6].classList.add("subquestion");
	elements[8].checked = false;
	elements[9].checked = false;
	elements[9].classList.add("subquestion");
	elements[11].checked = false;
	elements[12].checked = false;
	elements[12].classList.add("subquestion");
	productConfirmedDescription.value = "Enter a description of the product investigataion.";
	photoConfirmedDescription.value = "Enter a description of the photo investigataion.";
	batchConfirmedDescription.value = "Enter a description of the batch investigataion.";
	retentionConfirmedDescription.value = "Enter a description of the retention investigataion.";
	productConfirmedLabel.classList.add("subquestion");
	productConfirmedDescription.classList.add("subquestion");
	photoConfirmedLabel.classList.add("subquestion");
	photoConfirmedDescription.classList.add("subquestion");
	batchTestingLabel.classList.add("subquestion");
	batchConfirmedDescription.classList.add("subquestion");
	retentionTestingLabel.classList.add("subquestion");
	retentionConfirmedDescription.classList.add("subquestion");
}

resetForm();

function toggleForm() {
	document.getElementById("form-container").classList.toggle("form-container-class");
}

// Product returned checkbox
elements[2].addEventListener("change", function() {
		// Did product confirm checkbox
		elements[3].classList.toggle("subquestion");
		// Did product confirm label
		productConfirmedLabel.classList.toggle("subquestion");
});

// Did product confirm checkbox
elements[3].addEventListener("change", function() {
	// Product confirmed description
		productConfirmedDescription.classList.toggle("subquestion");
});

// Photos returned checkbox
elements[5].addEventListener("change", function() {
		// Did photos confirm checkbox
		elements[6].classList.toggle("subquestion");
		// Did photos confirm label
		photoConfirmedLabel.classList.toggle("subquestion");
});

elements[6].addEventListener("change", function() {
		photoConfirmedDescription.classList.toggle("subquestion");
});

elements[8].addEventListener("change", function() {
		elements[9].classList.toggle("subquestion");
		batchTestingLabel.classList.toggle("subquestion");
});

elements[9].addEventListener("change", function() {
		batchConfirmedDescription.classList.toggle("subquestion");
});

elements[11].addEventListener("change", function() {
		elements[12].classList.toggle("subquestion");
		retentionTestingLabel.classList.toggle("subquestion");
});

elements[12].addEventListener("change", function() {
		retentionConfirmedDescription.classList.toggle("subquestion");
});


resetButton.addEventListener("click", function() {
	resetForm();
}); 

