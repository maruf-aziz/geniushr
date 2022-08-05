/**
 * function for get new data from redis with socket.io
 */
var i = 0;
let text = "";
let title = "";
let time_status = "";
let convert_time = "";
window.Echo.channel("user-channel").listen(".UserEvent", (data) => {
    i++;
    if (data.data.created_by == localStorage.getItem("company_id") && data.data.type == 'presence') {
        if (data.data.status_qr == "Invalid") {
            inOutError(data.data.title);
        } else {
            if (data.data.status == "Multiple") {
                inOutMultiple(data.data.title);
            } else {
                document.getElementById("name").innerHTML = data.data.name;
                document.getElementById("emp_id").innerHTML = data.data.emp_id;
                document.getElementById("position").innerHTML = data.data.position;
                document.getElementById("clock_in").innerHTML = data.data.start;
                document.getElementById("clock_out").innerHTML = data.data.end;

                if (data.data.title == "In") {
                    // in
                    if (data.data.status == "Ontime") {
                        time_status = "Presensi Tepat Waktu";
                    } else {
                        if (data.data.hours > 0) {
                            convert_time =
                                data.data.hours +
                                " Jam " +
                                data.data.minutes +
                                " Menit";
                        } else {
                            convert_time = data.data.minutes + " Menit";
                        }
                        time_status = "Presensi Terlambat " + convert_time;
                    }
                } else {
                    // else
                    // if (data.data.status == "Early") {
                    if (data.data.status == "Late") {
                        if (Math.abs(data.data.hours) > 0) {
                            convert_time =
                                Math.abs(data.data.hours) +
                                " Jam " +
                                Math.abs(data.data.minutes) +
                                " Menit";
                        } else {
                            convert_time =
                                Math.abs(data.data.minutes) + " Menit";
                        }
                        time_status =
                            // "Presensi Pulang Lebih Awal " + convert_time;
                            "Presensi Terlambat " + convert_time;
                    } else {
                        // time_status = "Presensi Pulang Tepat Waktu";
                        time_status = "Presensi On Time";
                    }
                }

                $("#images").attr("src", data.data.profile);

                if (data.data.title == "In") {
                    title = "Masuk";
                } else {
                    title = "Keluar";
                }
                document.getElementById("time_status").innerHTML = time_status;

                swal({
                    title: "Presensi " + title + " Berhasil",
                    text: text,
                    icon: "success",
                    timer: 5000,
                });

                reloadUserPresence();
            }
        }
        console.log(data.data);
    }
});

function inOutSuccess(title, status, hours, minutes) {
    if (title == "In") {
        title = "Masuk";
        if (status == "Ontime") {
            text = "Anda Presensi Masuk Tepat Waktu";
        } else {
            text =
                "Anda Presensi Masuk Terlambat " +
                hours +
                " Jam " +
                minutes +
                " Menit";
        }
    } else {
        title = "Keluar";

        if (status == "Early") {
            text =
                "Anda Presensi Keluar Lebih Awal " +
                Math.abs(hours) +
                " Jam " +
                Math.abs(minutes) +
                " Menit";
        } else {
            text = "Anda Presensi Keluar Tepat Waktu";
        }
    }

    swal({
        title: "Presensi " + title + " Berhasil",
        text: text,
        icon: "success",
        timer: 5000,
    });
}

function inOutError(title) {
    if (title == "In") {
        title = "Masuk";
    } else {
        title = "Keluar";
    }
    swal({
        title: "Presensi " + title + " Gagal",
        text: "QR Code Invalid",
        icon: "error",
        timer: 5000,
    });
}

function inOutMultiple(title) {
    if (title == "In") {
        title = "Masuk";
    } else {
        title = "Keluar";
    }
    swal({
        title: "Presensi " + title + " Gagal",
        text: "Anda Sudah Melakukan Presensi " + title,
        icon: "error",
        timer: 5000,
    });
}

/**
 * function for generate QR
 */
let getsize = document.getElementById("qr").offsetWidth;
$(document).ready(function () {
    $.get(
        host + "/qrtoken?created_by=" + localStorage.getItem("company_id"),
        function (data) {
            $("#qr").empty();
            jQuery("#qr").qrcode({
                render: "canvas",
                size: getsize - 50,
                minVersion: 4,
                maxVersion: 40,
                ecLevel: "H",
                radius: 0.3,
                quiet: 2,
                text: data["token"],
                mode: 2,
                label: "Genius HR",
                fontname: "sans",
                fontcolor: "#2390D7",
            });
        }
    );
});

/**
 * set interval function generate QR
 */
window.setInterval(function () {
    $.get(
        host + "/qrtoken?created_by=" + localStorage.getItem("company_id"),
        function (data) {
            $("#qr").empty();
            jQuery("#qr").qrcode({
                render: "canvas",
                size: getsize - 50,
                minVersion: 4,
                maxVersion: 40,
                ecLevel: "H",
                radius: 0.3,
                quiet: 2,
                text: data["token"],
                mode: 2,
                label: "Genius HR",
                fontname: "sans",
                fontcolor: "#2390D7",
            });

            // $("#pict").attr("src", data["image"]);
        }
    );
}, interval);

function reloadUserPresence() {
    $.ajax({
        url:
            host +
            "/today_presence?created_by=" +
            localStorage.getItem("company_id"),

        dataType: "json",

        success: function (data) {
            var content = "";

            for (i in data.data) {
                // content +=
                //     "<div class='owl-item'><div class='item flex items-center justify-center m-1'><img src='http://localhost74/web-rsu-darmayu/storage/uploads/avatar/okta_1643386638.png' alt='...' /></div><div class='m-1'><center><p class='font-sm md:font-lg xl:font-lg font-inter'>maruf</p></center></div></div>";

                content += data.data[i].item;
            }
            owl.trigger("insertContent.owl", content);
            console.log(data.today);
        },
    });
}
