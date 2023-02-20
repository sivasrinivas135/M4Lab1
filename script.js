var $ = function(id){
    "use strict";
    return window.document.getElementById(id);
};
var form = $("addForm");
var empTable = $("employees");

var c = 0;


form.addEventListener('submit', (e) => {

     e.preventDefault();

    var id = $("id").value;
    var nam = $("name").value;
    var ext = $("extension").value;
    var email = $("email").value;
    var depart = $("department").value;

     let row = empTable.insertRow();

    let cId = row.insertCell(0);
    let cName = row.insertCell(1);
    let cExt = row.insertCell(2);
    let cEmail = row.insertCell(3);
    let cDept = row.insertCell(4);
    let cDelete = row.insertCell(5);

    let TextNID = document.createTextNode(id);
    cId.appendChild(TextNID);

    let TextNName = document.createTextNode(nam);
    cName.appendChild(TextNName);

    let TextNExt = document.createTextNode(ext);
    cExt.appendChild(TextNExt);

    let TextNEmail = document.createTextNode(email);
    cEmail.appendChild(TextNEmail);

    let TextNDept = document.createTextNode(depart);
    cDept.appendChild(TextNDept);


    let deleteButton = document.createElement("button");
    deleteButton.className = "btn btn-danger btn-sm  del";
    let textNDelete = document.createTextNode("X");
    deleteButton.appendChild(textNDelete);
    cDelete.appendChild(deleteButton);

    form.reset();

    $("id").focus();
    $("empCount").innerHTML = "(" + ++c + ")";


});

empTable.addEventListener("click", (e) => {
    if (e.target.classList.contains('del')){
        if(confirm("Do you want to delete this employee detail?")) {
            empTable.deleteRow(e.target.parentNode.parentNode.rowIndex);
            $("empCount").innerHTML = "(" + --c + ")";
            $('id').focus();
        };
    }
});