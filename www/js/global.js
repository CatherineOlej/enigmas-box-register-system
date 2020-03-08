
function btnSubmit_click() {
	AddGuests();
}
function btnClearDB_click() {
	clearDatabase();
}
function btnDelete_click() {
	DeleteBooking();
}
function COViewEventsPage_show(){
    showAllGuests();
}
function COSettingsPage_show() {
	$("#RegisterEmail").val(localStorage.getItem("DefaultEmail"));
}
function btnUpdate_click() {
	UpdateGuests();
}
function COEditEventsPage_show() {
    $("#EditEmail").val(localStorage.getItem("DefaultEmail"));
	showCurrentGuest();
}
function CORegisterPage_show(){
    $("#AddEmail").val(localStorage.getItem("DefaultEmail"));
	updateThemesDropdown();
}

function init(){
    $("#btnSubmit").on("click", btnSubmit_click);
	$("#btnClearDB").on("click", btnClearDB_click);
    $("#btnDelete").on("click", btnDelete_click);
    $("#btnUpdate").on("click", btnUpdate_click);

    $("#COEditEventsPage").on("pageshow", COEditEventsPage_show);
    $("#COViewEventsPage").on("pageshow", COViewEventsPage_show);
    $("#COSettingsPage").on("pageshow", COSettingsPage_show);
    $("#CORegisterPage").on("pageshow", CORegisterPage_show);
}
function initDB() {
	try {
		DB.COCreateDatabase();
		if (db) {
			console.info("Creating Tables...");
			DB.COCreatTables();
		}
		else {
			console.error("Error: Cannot create tables: Database does not exist!");
		}
	} catch (e) {
		console.error("Error: (Fatal) Error in initDB(). Can not proceed.");
	}
}

$(document).ready(function () {
	init();
	initDB();	
});