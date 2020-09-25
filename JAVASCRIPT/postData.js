var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fname"] = document.getElementById("fname").value;
    formData["email"] = document.getElementById("email").value;
    formData["pass"] = document.getElementById("pass").value;
    formData["cpass"] = document.getElementById("cpass").value;
    formData["age"] = document.getElementById("age").value;
    formData["number"] = document.getElementById("number").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.pass;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.cpass;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.age;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.number;

    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fname").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pass").value = "";
    document.getElementById("cpass").value = "";
    document.getElementById("age").value = "";
    document.getElementById("num").value = "";

    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fname").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("pass").value = selectedRow.cells[2].innerHTML;
    document.getElementById("cpass").value = selectedRow.cells[3].innerHTML;
    document.getElementById("age").value = selectedRow.cells[4].innerHTML;
    document.getElementById("num").value = selectedRow.cells[5].innerHTML;
  
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fname;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.pass;
    selectedRow.cells[3].innerHTML = formData.cpass;
    selectedRow.cells[4].innerHTML = formData.age;
    selectedRow.cells[5].innerHTML = formData.number;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate(){ 
    var fname = document.getElementById("fname").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    var age = document.getElementById("age").value;
    var num = document.getElementById("num").value;

    if(!isNaN(fname)){
        document.getElementById('firstName').innerHTML = "Please enter Only Characters.....Number Not Allowed"
        return false;
    }
    
    if((fname.length <= 2) || (fname.length > 20)){
        document.getElementById('firstName').innerHTML = "Length must be between 3 to 20 characters"
        return false;
    }

    if(email.indexOf("@") <= 0 ){
      document.getElementById('emailID').innerHTML = "Email Id is not Valid"
        return false;
    }
  


    if((pass.length < 8) || (pass.length > 20)){
        document.getElementById('password').innerHTML = "password should be mimimum 8 Character"
        return false;
    }
    if(pass != cpass){
      document.getElementById('password').innerHTML = "Password does not match.....please check once again"
        return false;
    }

    if(num.length < 10){
      document.getElementById('number').innerHTML = "Mobile Number must be 10 Digit"
        return false;
    }
  }