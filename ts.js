

document.write("<script async src='https://www.googletagmanager.com/gtag/js?id=UA-109454817-1'></script>");

var $_GET = {};

document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function () {

function decode(s) {

return decodeURIComponent(s.split("+").join(" "));

}

$_GET[decode(arguments[1])] = decode(arguments[2]);

});



 

 





  window.dataLayer = window.dataLayer || [];

  function gtag(){dataLayer.push(arguments);}

  gtag('js', new Date());



 

 



var cust_No = $_GET['utm_term'] ;

if (cust_No == undefined){var cust_No = null ;}

function cID(name) {

  var value = "; " + document.cookie;

  var parts = value.split("; " + name + "=");

  if (parts.length == 2) return parts.pop().split(";").shift();

}



 


  if(cID("LisboaCSApersisted")!= null){

    var TSB_SAS_Cookie = cID("LisboaCSApersisted").split("_")[2];

  }

  var cidL = cID("_ga");

  if(cidL != undefined){

  var cidL = cidL.split(".").length;

  var TSB_ga_Cookie = cID("_ga").split(".")[cidL-2] + "." + cID("_ga").split(".")[cidL-1];

  gtag('config', 'UA-109454817-1', {

      'user_id':cust_No,

      'cookie_expires':63072000,

      'dimension1': cust_No,

      'dimension2': TSB_ga_Cookie,

      'dimension3': TSB_SAS_Cookie

      });

  var threhold = 1;

  }

  else

  {
    console.log('no_ga');
    gtag('config', 'UA-109454817-1', {

        'user_id':cust_No,

        'cookie_expires':63072000,

        'dimension1': cust_No,

        'dimension3': TSB_SAS_Cookie,

        'send_page_view' : false

        });

  }


 

 


  window.onload = function(){

    if(threhold!= 1)

    {
    console.log("there is ga")
    get_cookie();

    }

  }

  function cID(name) {

    var value = "; " + document.cookie;

    var parts = value.split("; " + name + "=");

    if (parts.length == 2) return parts.pop().split(";").shift();

  }

 function get_cookie() {

    var cidL = cID("_ga");

    var cidL = cidL.split(".").length;

    var TSB_ga_Cookie = cID("_ga").split(".")[cidL-2] + "." + cID("_ga").split(".")[cidL-1];

    gtag('event', 'page_view', {

        'dimension2': TSB_ga_Cookie

        });

   }

