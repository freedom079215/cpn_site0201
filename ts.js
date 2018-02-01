var $_GET = {};
document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {
function decode(s) {
return decodeURIComponent(s.split("+").join(" "));
}
$_GET[decode(arguments[1])] = decode(arguments[2]);
});

var cust_No = $_GET['utm_term'] ;
if (cust_No == undefined){var cust_No = null ;}
function cID(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}
var cidL = cID("_ga").split(".").length;
var TSB_ga_Cookie = cID("_ga").split(".")[cidL-2] + "." + cID("_ga").split(".")[cidL-1];

console.log(TSB_ga_Cookie);
alert(TSB_ga_Cookie);

if(cID("LisboaCSApersisted")!= null){
  var TSB_SAS_Cookie = cID("LisboaCSApersisted").split("_")[2];
} 





gtag('config', 'UA-58024657-5', {
    'user_id':cust_No,
    'cookie_expires':63072000,
    'dimension1': cust_No,
    'dimension2': TSB_ga_Cookie,
    'dimension3': TSB_SAS_Cookie  
    });