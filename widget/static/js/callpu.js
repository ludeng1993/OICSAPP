var app = {

	setMark: function (name) {
		sessionStorage.setItem("_parameters", name);

	},
	getMarkContent: function () {
		var params = sessionStorage.getItem("_parameters");


		if (typeof params == null) {
			params = "SPDB";
		}
		return params;
	},
	start: function (fontSize, lineheight) {
		$("body").append(app.getMark(fontSize, lineheight));
	}
	, getMark: function (fontSize, lineheight) {
		//var empid = sessionStorage.getItem("_empId") == null ? "" : sessionStorage.getItem("_empId");
		var cf = new Array(1000).join(app.getMarkContent() + "                              　　");
		var fontSizestr = '"font-size:';// 40px';
		if (typeof fontSize != 'undefined') {
			fontSizestr += fontSize + 'px;';
		}
		else {
			fontSizestr += '40px;';
		}
		var lineHeighstr = 'line-height: ';//50px';

		if (typeof lineheight != 'undefined') {
			lineHeighstr += lineheight + 'px;';
		}
		else {
			lineHeighstr += '50px;';
		}
		var p = '<p   class="pWaterMark" style="margin-right:40px">' + cf + '</p>';

		//var div='<div  style=\"'+fontSizestr+lineHeighstr+'\" class="divWaterMark">'+p+'</div>';
		var div = `<div  style=${fontSizestr + lineHeighstr}" class="divWaterMark">${p}</div>`;
		return div;
	}

}