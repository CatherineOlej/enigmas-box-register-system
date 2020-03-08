function updateThemesDropdown() {
    var options = [];

    function callback(tx, results) {
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            console.info("Id: " + row['id'] +
                " Name: " + row['name']);

            if (row['name'] == "Disney Escape") {
                $('#AddThemes').append($('<option>', {
                    value: row['id'],
                    text: row['name'],
                    selected: "selected"
                }));
            }
            else {
                $('#AddThemes').append($('<option>', {
                    value: row['id'],
                    text: row['name']
                }));
            }
        }
        $('#AddThemes').change();
    }
    Themes.COselectAll(options, callback);
}
function AddGuests() {
    if (frmAddGuest()) {
        var fullName = $("#AddFullName").val();
        var registerEmail = $("#AddEmail").val();
        var phone = $("#AddPhone").val();
        var themeId = $("#AddThemes").val();
        var hasFriend2 = ($("#add2").prop("checked")) ? '1' : '0'
        var hasFriend3 = ($("#add3").prop("checked")) ? '1' : '0'
        var hasFriend4 = ($("#add4").prop("checked")) ? '1' : '0'
        var hasFriend5 = ($("#add5").prop("checked")) ? '1' : '0'
        var hasFriend6 = ($("#add6").prop("checked")) ? '1' : '0'
        var registerDate = $("#AddDate").val();
        
        var hasFriend;

        if(hasFriend2 != '0'){
            hasFriend = '2';
        } else if (hasFriend3 != '0'){
            hasFriend = '3';
        } else if (hasFriend4 != '0'){
            hasFriend = '4';
        } else if (hasFriend5 != '0'){
            hasFriend = '5';
        }else {
            hasFriend = '6';
        }
        var options = [fullName, registerEmail, phone, themeId, hasFriend, registerDate];

        function callback() {
            console.info("Success: Record inserted successfully");
            alert("Guest has been added");
        }
        Register.COinsert(options, callback);
    } 
    else {
        console.error("Form is not valid")
    }
}

function UpdateGuests() {
    var id = localStorage.getItem("id");
    if (frmEditGuest()) {
        var fullName = $("#EditFullName").val();
        var registerEmail = $("#EditEmail").val();
        var phone = $("#EditPhone").val();
        var themeId = $("#EditThemes").val();
        var hasFriend2 = ($("#edit2").prop("checked")) ? '1' : '0'
        var hasFriend3 = ($("#edit3").prop("checked")) ? '1' : '0'
        var hasFriend4 = ($("#edit4").prop("checked")) ? '1' : '0'
        var hasFriend5 = ($("#edit5").prop("checked")) ? '1' : '0'
        var hasFriend6 = ($("#edit6").prop("checked")) ? '1' : '0'
        var registerDate = $("#EditDate").val();
        
        var hasFriend;

        if(hasFriend2 != '0'){
            hasFriend = '2';
        } else if (hasFriend3 != '0'){
            hasFriend = '3';
        } else if (hasFriend4 != '0'){
            hasFriend = '4';
        } else if (hasFriend5 != '0'){
            hasFriend = '5';
        }else {
            hasFriend = '6';
        }
        var options = [fullName, registerEmail, phone, themeId, hasFriend, registerDate, id];

        function callback() {
            console.info("Success: Record updated successfully");
            alert("Record Updated Successfully.");
            $(location).prop('href', '#COViewEventsPage');
        }
        Register.COupdate(options, callback);
    }
    else {
        console.error("Form is not valid")
    }
}
function showAllGuests() {
    var options = [];

    function callback(tx, results) {
        var htmlCode = "";
        for (var i = 0; i < results.rows.length; i++) {
            var row = results.rows[i];

            console.info("Id: " + row['id'] +
                'FullName: ' + row["fullName"] +
                'Email: ' + row["registerEmail"] +
                'Friends: ' + row['hasFriend']);

            htmlCode += "<li><a data-role='button' data-row-id=" + row['id'] + " href='#'>" +
                "<h2 style=color:#66FCF1;font-family:Monospace;>Registers Full Name: " + row['fullName'] + "</h2>" +
                "<p>Email: " + row['registerEmail'] + "<p>" +
                "<p>Friends: " + row['hasFriend'] + "<p>" +
                "</a></li>";
            
        }
        var lv = $("#COEventList");

        lv = lv.html(htmlCode);
        lv.listview("refresh");
        $("#COEventList a").on("click", clickHandler);

        function clickHandler() {
            localStorage.setItem("id", $(this).attr("data-row-id"));
            $(location).prop('href', '#COEditEventsPage');
        }
    }
    Register.COselectAll(options, callback);
}

function showCurrentGuest() {
    var id = localStorage.getItem("id");
    var options = [id];

    function callback(tx, results) {
        var row = results.rows[0];

        console.info("Id: " + row['id'] +
            'FullName: ' + row["fullName"] +
            'Email: ' + row["registerEmail"] +
            'Phone: ' + row['phone'] +
            'ThemeId: ' + row['themeId'] +
            'Friends: ' + row['hasFriend'] +
            'Date: ' + row['registerDate']);

        $("#EditFullName").val(row["fullName"]);
        $("#EditEmail").val(row["registerEmail"]);
        $("#EditPhone").val(row['phone']);
        $("#Themes").val(row['themeId']);

        if (row['hasFriend'] == 'true') {
            $("#add2").prop("checked", true);
        }

        else if (row['hasFriend'] == 'true') {
            $("#add3").prop("checked", true);
        }
        else if (row['hasFriend'] == 'true') {
            $("#add4").prop("checked", true);
        }
        else if (row['hasFriend'] == 'true') {
            $("#add5").prop("checked", true);
        }
        else {
            $("#add6").prop("checked", true);
        }
        $("#EditDate").val(row['registerDate']);
    }
    Register.COselect(options, callback);
}
//clear DB
function clearDatabase() {
    var result = confirm("Really want to clear database?");
    if (result) {
        try {
            DB.COdropTables();
            alert("Database cleared!");
        } catch (e) {
            alert(e);
        }
    }
}
// delete localstorage
function DeleteBooking() {
    var localId = localStorage.getItem("id");
    var options = [localId];

    function callback() {
        console.info("Booking Deleted Successfully");
        alert("Booking Deleted.")
        $(location).prop('href', '#COViewEventsPage');
    }
    Register.COdelete(options, callback);
}