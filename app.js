console.log("welcome to web notes.this is js page")
//if user add a note add it to locall storage
showNotes();

let addbtn = document.getElementById('addbtn');
addbtn.addEventListener("click", function(e){
    let addtxt = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");

    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addtxt.value = "";
   // console.log(notesObj);
    showNotes();

})

function showNotes(){
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element,index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
             <div class="card-body">
                      <h5 class="card-title">Note ${index + 1}</h5>
                      <p class="card-text"> ${element}</p>
                      <button id="${index}"  onclick="deleteNote(this.id)" class="btn btn-primary">Delete Notes</button>
             </div>
        </div>`;

        
    }); 
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0){
        notesElm.innerHTML = html;
    } 
    else{
        notesElm = notes.innerHTML = 'Nothing to show! use "Add a Note " Section above to add note. '
    }
}
function deleteNote(index){
    //console.log('I am deleting', index);
    let notes = localStorage.getItem("notes");
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}
let search = document.getElementById('searchtxt');
search.addEventListener("input", function(){


    let inputVal = search.value.toLowerCase();
    //console.log('input event fired!' , inputVal);
    let noteCards = document.getElementsByClassName('noteCard');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        
        }
        
       // console.log(cardtxt)
    })

})