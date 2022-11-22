var mongoose = require("mongoose");
var dbURI = "mongodb://localhost/mekanbul"; 
mongoose.connect(dbURI);
function kapat(msg, callback) {
    mongoose.connection.close(function () {
        callback();
    });
}
process.on("SIGINT", function () {
    kapat("Uygulama kapatildi!", function () {
        process.exit(0);
    });
});
mongoose.connection.on("connected", function () {
    console.log(dbURI + "adresindeki veritabanina baglanildi!\n");
});
mongoose.connection.on("error", function () {
    console.log("Baglanti hatasi!\n");
});
mongoose.connection.on("disconnected", function () {
    console.log("Baglanti kesildi!\n");
});

require("./mekansema");