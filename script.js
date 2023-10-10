var inc = 1;
function addform(type) {
    let output;
    switch (type) {

        case 'name': {
            output = ('<div id="my-input-form' + inc + '" class="card"> <div class="card-header "> <h3 class="card-title" id="main-text-changer' + inc + '">Full Name</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="open_side_nav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_input(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group row"> <div class="col-6"> <input type="text" class="form-control" id="InputEmail1" placeholder="First Name"> </div> <div class="col-6"> <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Last Name"> </div> </div> </div><div id="mySidebar-2' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="close_side_nav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute_change(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"></div></div> </div> ');

            break;
        }
        case 'textarea': {
            output = ('<div id="my-input-form' + inc + '" class="card"> <div class="card-header "> <span id="hidefa-' + inc + '" class="hide" >*</span> <h3 class="card-title" id="main-text-changer' + inc + '">Textarea</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="open_side_nav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_input(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group"> <textarea class="form-control"> </textarea> </div> </div> <div id="mySidebar-2' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="close_side_nav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute_change(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"> </div></div> </div>');

            break;
        }
        case 'email': {
            output = ('<div id="my-input-form' + inc + '" class="card"> <div class="card-header ">    <span id="hidefa-' + inc + '" class="hide" >*</span><h3 class="card-title" id="main-text-changer' + inc + '" >Email Address  </h3><div class="card-tools"> <button  class="btn btn-tool btn-sm" onclick="open_side_nav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button  onclick="remove_input(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div></div><div class="card-body table-responsive "> <div class="form-group"> <input type="email" class="form-control" id="InputEmailq-' + inc + '" placeholder="Enter email"> </div>add@email.com</div></div><div id="mySidebar-2' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="close_side_nav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute_change(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"> </div></div>   </div>');

            break;
        }

        case 'phone': {
            output = ('<div id="my-input-form' + inc + '" class="card"> <div class="card-header "> <span id="hidefa-' + inc + '" class="hide" >*</span> <h3 class="card-title" id="main-text-changer' + inc + '">Phone Number</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="open_side_nav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_input(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group"> <input type="number" class="form-control" placeholder="(000)000-0000)"> </div> Please enter a valid phone number. </div> </div> <div id="mySidebar-2' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="close_side_nav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute_change(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"> </div></div> </div>');

            break;
        }
        case 'dropdown': {
            output = (' <div id="my-input-form' + inc + '" class="card"> <div class="card-header "> <span id="hidefa-' + inc + '" class="hide" >*</span> <h3 class="card-title" id="main-text-changer' + inc + '">Type a question</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="open_side_nav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_input(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group"  > <label>Please Select</label> <select class="custom-select" id="dropdown-group-' + inc + '"> <option>option 1</option> <option>option 2</option> <option>option 3</option> <option>option 4</option> <option>option 5</option> </select> </div> </div> </div> <div id="mySidebar-2' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="close_side_nav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute_change(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"></div><label for="labeltext_area">Options</label> <textarea onchange="get_textarea_val(' + inc + ',this.value)" id="options_' + inc + '" name="options" class="textBox" onkeyup="update_dropdown(' + inc + ',this.value)" type="textarea" rows="5" data-testid="textarea">Type option 1  \nType option 2 \nType option 3 \nType option 4</textarea></div></div></div> </div>');

            break;
        }
        case 'checkbox': {
            output = ('<div id="my-input-form' + inc + '" class="card"> <div class="card-header "> <span id="hidefa-' + inc + '" class="hide" >*</span> <h3 class="card-title"  id="main-text-changer' + inc + '">Type a question</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="open_side_nav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_input(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group"  id="checkbox-group-' + inc + '"> <div class="form-check"> <input class="form-check-input" type="checkbox" checked=""> <label class="form-check-label">Type option 1</label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox" > <label class="form-check-label">Type option 2</label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox"> <label class="form-check-label">Type option 3</label> </div> <div class="form-check"> <input class="form-check-input" type="checkbox"> <label class="form-check-label">Type option 4</label> </div> </div> </div> </div> <div id="mySidebar-2' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="close_side_nav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute_change(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"></div><label for="labeltext_area">Options</label> <textarea onchange="get_textarea_val(' + inc + ',this.value)" id="options_' + inc + '" name="options" class="textBox" onkeyup="update_checkbox(' + inc + ',this.value)" type="textarea" rows="5" data-testid="textarea">Type option 1  \nType option 2 \nType option 3 \nType option 4</textarea></div></div></div>');

            break;
        }
        case 'radiobutton': {
            output = ('<div id="my-input-form' + inc + '" class="card"> <div class="card-header "> <span id="hidefa-' + inc + '" class="hide" >*</span> <h3 class="card-title" id="main-text-changer' + inc + '">Type a question</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="open_side_nav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_input(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group" id="option-group-' + inc + '"> <div class="form-check"> <input class="form-check-input" type="radio" name="radio-' + inc + '"  checked=""> <label class="form-check-label">Type option 1</label> </div> <div class="form-check"> <input class="form-check-input" type="radio" name="radio-' + inc + '"> <label class="form-check-label">Type option 2</label> </div> <div class="form-check"> <input class="form-check-input" name="radio-' + inc + '"  type="radio"> <label class="form-check-label">Type option 3</label> </div> <div class="form-check"> <input name="radio-' + inc + '" class="form-check-input" type="radio"> <label class="form-check-label">Type option 4</label> </div> </div> </div> </div> <div id="mySidebar-2' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="close_side_nav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute_change(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"></div> <label for="labeltext_area">Options</label> <textarea onchange="get_textarea_val(' + inc + ',this.value)" id="options_' + inc + '" name="options" class="textBox" onkeyup="update_option(' + inc + ',this.value)" type="textarea" rows="5" data-testid="textarea">Type option 1  \nType option 2 \nType option 3 \nType option 4</textarea></div> </div>');

            break;
        }

        case 'image': {
            output = ('<div id="my-input-form' + inc + '" class="card"> <div class="card-header "> <h3 class="card-title" id="main-text-changer' + inc + '">Attach a file</h3> <div class="card-tools"> <button class="btn btn-tool btn-sm" onclick="open_side_nav(' + inc + ')"> <i class="fas fa-edit"></i> </button> <button onclick="remove_input(' + inc + ')" class="btn btn-tool btn-sm"> <i class="fas fa-trash"></i> </button> </div> </div> <div class="card-body table-responsive "> <div class="form-group row"> <div class="col-6"> <input type="file" placeholder="select-image"/> </div> </div> </div><div id="mySidebar-2' + inc + '" class="sidebar_panel"> <a href="javascript:void(0)" class="closebtn" onclick="close_side_nav(' + inc + ')">×</a> <div class="form-group input_fromlay"> <label for="exampleInputEmail1">Feild Label</label> <input type="text" class="form-control input_textlay" id="emailinput-' + inc + '" onkeyup="inpute_change(' + inc + ', this.value)" placeholder="Name"> <div class="form-check padd"></div></div> </div> ');

        }

    }
    inc++;


    $(output).hide().appendTo("#element_wrapper").slideDown("slow");
    // $('#element_wrapper').slideDown("slow").append(output);


}


function remove_input(i) {
    let getinputid = document.getElementById('my-input-form' + i);
    getinputid.remove();
    alert('are you sure you want to delete');
}


function open_side_nav(i) {
    document.getElementById("mySidebar-2" + i).style.width = "250px";
}


function close_side_nav(i) {
    document.getElementById("mySidebar-2" + i).style.width = "0";
}


// for email changing value of feild
function inpute_change(id, value) {
    document.getElementById("main-text-changer" + id).innerHTML = value;
}


// for radiobutton 
function update_option(id, val) {
    var checked = "";
    var retrunOption = "";
    var radio_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {
            retrunOption += '<div class="form-check"> <input disabled="" class="form-check-input" type="radio" name="radio-' + id + '"  value="' + name + '"> <label class="form-check-label">' + name + '</label> </div>';
        }
    })
    $("#option-group-" + id).html(retrunOption);
}

function get_textarea_val(id, val) {
    var someArray = [];
    var radio_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {
            someArray.push(name);
        }
    })
    for (var i = 0; i < someArray.length; inc++) {
        radio_text += someArray[i];
        radio_text += "\r\n";
    }
    $("#options_" + id).val(radio_text);
}


// for checkbox feild
function update_checkbox(id, val) {
    var checked = "";
    var retrunOption = "";
    var checkbox_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {
            retrunOption += '<div class="form-check"> <input disabled="" class="form-check-input" type="checkbox" name="checkbox-' + id + '"  value="' + name + '"> <label class="form-check-label">' + name + '</label> </div>';

        }
    })
    $("#checkbox-group-" + id).html(retrunOption);
}

function get_textarea_val(id, val) {
    var someArray = [];
    var checkbox_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {
            someArray.push(name);
        }
    })
    for (var i = 0; i < someArray.length; i++) {
        checkbox_text += someArray[i];
        checkbox_text += "\r\n";
    }
    $("#options_" + id).val(checkbox_text);
}

// for dropdown feild
function update_dropdown(id, val) {
    var checked = "";
    var retrunOption = "";
    var checkbox_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {
            retrunOption += ' <div class="form-group"><select name="dropdown-' + id + '"  value="' + name + '"class="custom-select"> <option> ' + name + '</option></div>';

        }

    })
    $("#dropdown-group-" + id).html(retrunOption);
}

function get_textarea_val(id, val) {
    var someArray = [];
    var checkbox_text = "";
    $.each(val.split(/\n/), function (i, name) {
        // empty string check
        if (name != "") {
            someArray.push(name);
        }
    })
    for (var i = 0; i < someArray.length; i++) {
        checkbox_text += someArray[i];
        checkbox_text += "\r\n";
    }
    $("#options_" + id).val(checkbox_text);
}