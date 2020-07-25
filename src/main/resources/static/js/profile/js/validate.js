function FirstName(str, status) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);

	if (str.length>25) {
		status.innerHTML = '<span style="color: red;">first name max 25 char.</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		return false;
	}

	for (var i=0; i<str.length; i++) {
		if ((str.charAt(i)>='a' && str.charAt(i)<='z') || (str.charAt(i)>='A' && str.charAt(i)<='Z') || str.charAt(i)==' ') {
			status.innerHTML = '<span style="color: mediumseagreen;">first name is valid</span><span class="icon-check-square" style="margin-top: 7px; margin-left: 5px; color: mediumseagreen; float: right;"></span>';
		}
		else {
			status.innerHTML = '<span style="color: red;">first name is invalid</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
			return false;
		}
	}
}

function LastName(str, status) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);

	if (str.length>25) {
		status.innerHTML = '<span style="color: red;">last name max 25 char.</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		return false;
	}

	for (var i=0; i<str.length; i++) {
		if ((str.charAt(i)>='a' && str.charAt(i)<='z') || (str.charAt(i)>='A' && str.charAt(i)<='Z') || str.charAt(i)==' ') {
			status.innerHTML = '<span style="color: mediumseagreen;">last name is valid</span><span class="icon-check-square" style="margin-top: 7px; margin-left: 5px; color: mediumseagreen; float: right;"></span>';
		}
		else {
			status.innerHTML = '<span style="color: red;">last name is invalid</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
			return false;
		}
	}
}

function Email(str, status) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);
	if (str.length>64) {
		status.innerHTML = '<span style="color: red;">max 64 char.</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		document.getElementById("btn").disabled = true;
		return false;
	}

	if(str.trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) != null) {
		status.innerHTML = '<span style="color: mediumseagreen;">email is valid</span><span class="icon-check-square" style="margin-top: 7px; margin-left: 5px; color: mediumseagreen; float: right;"></span>';
		document.getElementById("btn").disabled = false;
	}
	else {
		status.innerHTML = '<span style="color: red;">email is invalid</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		document.getElementById("btn").disabled = true;
		return false;
	}
}

function Phone(str, status, logo) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);
	var logo = document.getElementById(logo);

	for (var i=0; i<str.length; i++) {
		if (str.charAt(i)>'9' || str.charAt(i)<'0') {
			status.innerHTML = '<span style="color: red;">phone no is invalid</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
			logo.innerHTML = '<p style="padding-top: 5.5px;">+88</p>';
			return false;
		}
	}

	if (str.length == 11 && str.charAt(0)=='0' && str.charAt(1)=='1' && (str.charAt(2)=='1' || str.charAt(2)=='3' || str.charAt(2)=='4' || str.charAt(2)=='5' || str.charAt(2)=='6' || str.charAt(2)=='7' || str.charAt(2)=='8' || str.charAt(2)=='9')) {
		status.innerHTML = '<span style="color: mediumseagreen;">phone no is valid</span><span class="icon-check-square" style="margin-top: 7px; margin-left: 5px; color: mediumseagreen; float: right;"></span>';
		if (str.charAt(2)=='3' || str.charAt(2)=='7') {
			logo.innerHTML = '<span class="icon-gp" style="margin-left: 0px; font-size: 25px;"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>';
		}
		if (str.charAt(2)=='4' || str.charAt(2)=='9') {
			logo.innerHTML = '<span class="icon-banglalink" style="margin-left: 0px; font-size: 25px;"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>';
		}
		if (str.charAt(2)=='5') {
			logo.innerHTML = '<span class="icon-teletalk" style="margin-left: 0px; font-size: 25px;"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>';
		}
		if (str.charAt(2)=='6') {
			logo.innerHTML = '<span class="icon-airtel" style="margin-left: 0px; font-size: 25px;"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>';
		}
		if (str.charAt(2)=='8') {
			logo.innerHTML = '<span class="icon-robi" style="margin-left: 0px; font-size: 25px;"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>';
		}
		if (str.charAt(2)=='1') {
			logo.innerHTML = '<span class="icon-citycell" style="margin-left: 0px; font-size: 25px;"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>';
		}
	}
	else {
		status.innerHTML = '<span style="color: red;">phone no is invalid</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		logo.innerHTML = '<p style="padding-top: 5.5px;">+88</p>';
		return false;
	}
}

function Sid(str, status) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);

	for (var i=0; i<str.length; i++) {
		if (str.charAt(i)>'9' || str.charAt(i)<'0') {
			status.innerHTML = '<span style="color: red;">student id is invalid</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
			return false;
		}
	}

	if (str.length == 5) {
		status.innerHTML = '<span style="color: mediumseagreen;">student id is valid</span><span class="icon-check-square" style="margin-top: 7px; margin-left: 5px; color: mediumseagreen; float: right;"></span>';
	}
	else {
		status.innerHTML = '<span style="color: red;">student id is invalid</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		return false;
	}
}

function Password(str, status1, status2, status3, status4, status5) {
	var str = document.getElementById(str).value;
	var status1 = document.getElementById(status1);
	var status2 = document.getElementById(status2);
	var status3 = document.getElementById(status3);
	var status4 = document.getElementById(status4);
	var status5 = document.getElementById(status5);

	var small = 0; var capital = 0; var number = 0; var special = 0;
	var specialChars = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

	for(var i=0; i<str.length; i++) {
		if (str.charAt(i)>='a' && str.charAt(i)<='z') {small++;}
		if (str.charAt(i)>='A' && str.charAt(i)<='Z') {capital++;}
		if (str.charAt(i)>='0' && str.charAt(i)<='9') {number++;}
		//if (specialChars.match('/@')) {special++;}
	}

	if (str.length>=8 && str.length<=30) {
		status1.innerHTML = '<span style="color: mediumseagreen;">password length should be 8 to 30 char</span><span class="icon-check-square" style="margin-top: 7px; margin-left: 5px; color: mediumseagreen; float: right;"></span>';
		if (capital) {
			status2.innerHTML = '<span style="color: mediumseagreen;">password should be at least one capital letter</span><span class="icon-check-square" style="margin-top: 7px; margin-left: 5px; color: mediumseagreen; float: right;"></span>';
		}
		else {
			status2.innerHTML = '<span style="color: red;">password should be at least one capital letter</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		}

		if (small) {
			status3.innerHTML = '<span style="color: mediumseagreen;">password should be at least one small letter</span><span class="icon-check-square" style="margin-top: 7px; margin-left: 5px; color: mediumseagreen; float: right;"></span>';
		}
		else {
			status3.innerHTML = '<span style="color: red;">password should be at least one small letter</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		}

		if (number) {
			status4.innerHTML = '<span style="color: mediumseagreen;">password should be at least one number</span><span class="icon-check-square" style="margin-top: 7px; margin-left: 5px; color: mediumseagreen; float: right;"></span>';
		}
		else {
			status4.innerHTML = '<span style="color: red;">password should be at least one number</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		}
		/*
                if (special) {
                    status5.innerHTML = '<span style="color: mediumseagreen;">password should be at least one special char</span><span class="icon-check-square" style="margin-top: 7px; margin-left: 5px; color: mediumseagreen; float: right;"></span>';
                }
                else {
                    status5.innerHTML = '<span style="color: red;">password should be at least one special char</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
                }
        */
	}
	else {
		status1.innerHTML = '<span style="color: red;">password length should be 8 to 30 char</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
	}
}

function ConfirmPassword(str1, str2, status) {
	var str1 = document.getElementById(str1).value;
	var str2 = document.getElementById(str2).value;
	var status = document.getElementById(status);

	if (str1 == str2) {
		status.innerHTML = '<span style="color: mediumseagreen;">password matched</span><span class="icon-check-square" style="margin-top: 7px; margin-left: 5px; color: mediumseagreen; float: right;"></span>';
	}
	else {
		status.innerHTML = '<span style="color: red;">password do not match</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		return false;
	}
}

//
function About(str, status) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);

	if (str.length>100 && str.length<=250) {
		status.innerHTML = "";
		document.getElementById("btn").disabled = false;
	}
	else {
		status.innerHTML = '<span style="color: red;">about should be 100 to 250 char.</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		document.getElementById("btn").disabled = true;
	}

}

function Message(str, status) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);

	if (str.length>100 && str.length<=250) {
		status.innerHTML = "";
		document.getElementById("btn").disabled = false;
	}
	else {
		status.innerHTML = '<span style="color: red;">message should be 100 to 250 char.</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		document.getElementById("btn").disabled = true;
	}

}

function PreAddress(str, status) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);

	if (str.length>=0 && str.length<=50) {
		status.innerHTML = "";
		document.getElementById("btn").disabled = false;
	}
	else {
		status.innerHTML = '<span style="color: red;">max 50 char.</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		document.getElementById("btn").disabled = true;
	}
}

function PerAddress(str, status) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);

	if (str.length>=0 && str.length<=50) {
		status.innerHTML = "";
		document.getElementById("btn").disabled = false;
	}
	else {
		status.innerHTML = '<span style="color: red;">max 50 char.</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		document.getElementById("btn").disabled = true;
	}
}

function Position(str, status) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);

	if (str.length>=0 && str.length<=30) {
		status.innerHTML = "";
		document.getElementById("btn").disabled = false;
	}
	else {
		status.innerHTML = '<span style="color: red;">max 30 char.</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		document.getElementById("btn").disabled = true;
	}

}

function Organization(str, status) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);

	if (str.length>=0 && str.length<=50) {
		status.innerHTML = "";
		document.getElementById("btn").disabled = false;
	}
	else {
		status.innerHTML = '<span style="color: red;">max 50 char.</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		document.getElementById("btn").disabled = true;
	}
}

function Location(str, status) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);

	if (str.length>=0 && str.length<=50) {
		status.innerHTML = "";
		document.getElementById("btn").disabled = false;
	}
	else {
		status.innerHTML = '<span style="color: red;">max 50 char.</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		document.getElementById("btn").disabled = true;
	}
}

function PhoneUpdate(str, status) {
	var str = document.getElementById(str).value;
	var status = document.getElementById(status);

	for (var i=0; i<str.length; i++) {
		if (str.charAt(i)>'9' || str.charAt(i)<'0') {
			status.innerHTML = '<span style="color: red;">phone no is invalid</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
			document.getElementById("btn").disabled = true;
			return false;
		}
	}

	if (str.length == 11 && str.charAt(0)=='0' && str.charAt(1)=='1' && (str.charAt(2)=='1' || str.charAt(2)=='3' || str.charAt(2)=='4' || str.charAt(2)=='5' || str.charAt(2)=='6' || str.charAt(2)=='7' || str.charAt(2)=='8' || str.charAt(2)=='9')) {
		status.innerHTML = '<span style="color: mediumseagreen;">phone no is valid</span><span class="icon-check-square" style="margin-top: 7px; margin-left: 5px; color: mediumseagreen; float: right;"></span>';
		document.getElementById("btn").disabled = false;
	}
	else {
		status.innerHTML = '<span style="color: red;">phone no is invalid</span><span class="icon-cancel" style="margin-top: 7px; margin-left: 5px; color: red; float: right;"></span>';
		document.getElementById("btn").disabled = true;
		return false;
	}
}