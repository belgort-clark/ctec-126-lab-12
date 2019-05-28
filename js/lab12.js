// lab12.js

// comment goes here
$(document).ready(function(){
	// comment goes here
	$.ajax({
		url: "http://ideajam.net/ideajam/p/ij.nsf/jsonGetWhatsHot",
		method: "GET"
	})
	.done(function(data){
		data = displayResults(data);
		$('#ideas_container').html(data);
	})
	.fail(function(){
		alert('Rut roh! Something went wrong when calling the API');
	});
});

function displayResults(data){
	var output = '';
	var p = "<p>"; // paragraph tag
	var cp = "</p>"; // closing paragraph tag
	for (var i=0 ; i < data.result.length ; i++){
		output += "<div>";
		output += p + "Created By: " + data.result[i].createdby + cp;
		output += p + "Idea: " + 'YOUR CODE HERE' + cp;
		output += p + "IdeaSpace: " + 'YOUR CODE HERE' + cp;
		output += p + "Tags: ";
		// comment goes here
		for (var j = 0 ; j < data.result[i].tags.length ; j++){
			// comment goes here
			output += data.result[i].tags[j] + " ";
		}
		output += cp;
		// end tags stuff 
		output += p + "Body: " + 'YOUR CODE HERE' + cp;
		output += p + "IdeaID: " + 'YOUR CODE HERE' + cp;
		output += p + "URL: " + 'YOUR CODE HERE' + cp;
		output += p + "Votes: " + 'YOUR CODE HERE' + cp;
		output += p + "Status: " + 'YOUR CODE HERE' + cp;
		// linkedid array
		output += p + "Linked Idea(s): ";
		for (j=0 ; j < data.result[i].linkedideaid.length ; j++){
			output += 'YOUR CODE HERE' + " ";

		} // end linkeedid 
		output += p + "Additonal Long Text: " + 'YOUR CODE HERE' + cp;
		output += p + "Additonal Text " + 'YOUR CODE HERE' + cp;
		output += p + "Date Created: " + 'YOUR CODE HERE' + cp;
		output += p + "Implementation Manager: " + 'YOUR CODE HERE' + cp;
		output += p + "Implementation Plan: " + 'YOUR CODE HERE' + cp;
		// comments
		output += p + "Comment(s): " + cp;
		output += "<hr>";
		for (j = 0 ; j < data.result[i].comments.length ; j++){
			output += p + "Comment No. " + (j + 1) + ":" + cp;
			output += p + "Created By: " + 'YOUR CODE HERE' + cp;
			output += p + "Comment: " + 'YOUR CODE HERE' + cp;
			output += p + "Date Created: " + 'YOUR CODE HERE' + cp;
			output += "<hr>";
		}
		// comments
		output += "</div>";
		}
	return output;
}
