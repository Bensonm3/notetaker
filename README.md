# hw10
Note Taking App

AS A user, I want to be able to write and save notes
I WANT to be able to delete notes I've written before
SO THAT I can organize my thoughts and keep track of tasks I need to complete

This Application allows a user to write and store notes in a live server and also allows 
for retrieval and editing of previously saved notes.

Instructions
Run node server.js
If the message "app listening on port 4000" message appears, the user can access the app
in their web browser via the following URL:
	http://localhost:4000/ - takes the user to the homepage
From there, the user can click the "Get Started" button to be taken to the note writing 
page, or the user can visit this page at the following URL:
	http://localhost:4000/notes - takes the user to the note entering page
	The user can either choose from the list of saved notes on the left hand column, or
	write a new note providing a title and and body text
	Once the new note information has been entered a save icon will appear at the top right,
	once this is clicked the note will be saved and its' title will display in the saved notes
	column.
	Saved notes can be deleted by click the red trash can icon to the right of the note.
	If the user wants to view all the notes simultaneously, they can visit the below url
	which displays the data as a string:
	http://localhost:4000/api/notes - displays all saved notes as a string
	
	