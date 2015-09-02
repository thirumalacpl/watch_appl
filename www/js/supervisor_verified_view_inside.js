$(document).on('pageshow', '#pagedesign_veri', function(){  

//alert('supervisor_verified_view_inside');
$('#sda_veri').empty();
$('#lii_veri').empty();
$('.document_imag_inproone_veria').empty();
$('.document_imag_inproone_verib').empty();
$('.document_imag_inproone_veric').empty();
$('.document_imag_inproone_verid').empty();
$('.document_imag_inproone_verie').empty();
$('.document_imag_inproone_verif').empty();
$(document).off('click', '#dashboardlis_veri').on('click', '#dashboardlis_veri', function() {
//alert("sdfsdaffasf");
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#verils_veiring').on('click', '#verils_veiring', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#before_verified_in').on('click', '#before_verified_in', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inproveria_oi').on('click', '#inproveria_oi', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#new_verilistfromverifieda_oo').on('click', '#new_verilistfromverifieda_oo', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});
$(document).off('click', '#verified_inpro_inside_upo_n').on('click', '#verified_inpro_inside_upo_n', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#siha_p').on('click', '#siha_p', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

//alert("success");
$('.document_imag_veri').empty();
$('#percent_veri').empty();
//$('#name').empty();
assignValues();

superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));

supervisor_view_verified_array =  JSON.parse(sessionStorage.getItem("supervisor_view_verified_array"));
for(a=0;a<supervisor_view_verified_array.length;a++){
  super_obja = supervisor_view_verified_array[a];


  city=super_obja.city_name;
  state=super_obja.state;
//alert(city+''+state);
}
for(a=0;a<superArray_array.length;a++){
  super_obja = superArray_array[a];

  $("#supervisor_name_verilista").text(super_obja.First_Name);
  $("#city_name_verilista").text(super_obja.city_name);

}



function assignValues(){
  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
  user_obja = JSON.parse(sessionStorage.getItem("currentobj_veri"));

  currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_addressid_veri"));

//alert( currentobja_addressid.document_name);
currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_educational_records_veri"));
// alert( currentobj_educational_records.user_id+'education');
currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobja_emnployment_veri"));

addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));

employment_upload_array = JSON.parse(sessionStorage.getItem("multiple_documents_array"));

var qualification_id = user_obja.type;
//alert(qualification_id+'qqqqqqqqqq');
//alert(user_obja.type+'type');
var verification_user_id = user_obja.verification_user_id;
//alert(verification_user_id );
var city = user_obja.city_name;
//alert(city);
var state = user_obja.state;
//alert(state);

var region_num=region_array.region;
//alert(region_array.region+'regionnnnnn');

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
  //alert('emplo inside');
  var sd=' <div class="ui-block-a grid_text grid_right  waves-effect waves-button"><img src="images/from-to.png" alt="" class="img_new">   <span id="designation_qwe"></span></div><div class="ui-block-b grid_text grid_right waves-effect waves-button "><img src="images/check-in.png" alt="" class="img_new"><span id="from_qwe"></span> </div><div class="ui-block-c grid_text grid_right waves-effect waves-button "><img src="images/save.png" alt="" class="img_new"> <span id="percentage_qwe"></span></div><div class="ui-block-d grid_text waves-effect waves-button "><img src="images/location.png" alt="" class="img_new"> <span id="year_of_passing_veriiio_qwe"></span></div> '
  $('#sda_veri').append(sd);
  var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo_qwe">512 Rd Oage Mill Rd Palo Alto, CA 94304</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/msg.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="address_inproo_qwe">Carterblane@gmail.com</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/institute.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;padding-left: 31px;" id="pincode_inproo_qwe">5012 Rd Oage Mill Rd Palo Alto, CA 94304</span></a> </li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo">'+city+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo"> '+ state+'</span></a></li>'
  $('#lii_veri').append(liii);

  var oneemploy = new Array(10);
  k = -1;
  for(a=0;a<employment_upload_array.length;a++){

    employimg_obj = employment_upload_array[a];

    var empimgempl=employimg_obj.verification_type_id;
    var empidempl=employimg_obj.verification_master_id;


    if(empimgempl == qualification_id && empidempl == verification_user_id ){

     // alert(a);
      k++;
      oneemploy[k]=employimg_obj.document;

      if (k == 0 ){
        var one=oneemploy[k];
       // alert(one+'oneempeeeducation');
        $('.document_imag_inproone_veric').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


      }
      if (k == 1 ){
        var oneo=oneemploy[k];
        //alert(oneo+'two');
        $('.document_imag_inproone_verid').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

      }
      if (k == 2 ){
        var oneo=oneemploy[k];
        //alert(oneo+'two');
        $('.document_imag_inproone_verib').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

      }
      if (k == 3 ){
        var oneo=oneemploy[k];
        //alert(oneo+'two');
        $('.document_imag_inproone_veria').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

      }
      if (k == 4 ){
        var oneo=oneemploy[k];
        //alert(oneo+'two');
        $('.document_imag_inproone_verie').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

      }
      if (k == 5 ){
        var oneo=oneemploy[k];
       // alert(oneo+'two');
        $('.document_imag_inproone_verif').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

      }
 /*     $('#from').html(' <p class="tabsss">From & To</p><p>'+currentobj_employment_records.working_from+'</p><p>'+currentobj_employment_records.working_to+'</p>');
      $('#designation').html('<p class="tabsss ">Company</p><p>'+currentobj_employment_records.employer_name+'</p>');
      $('#percentage').html('<p class="tabsss ">Salary</p><p>'+currentobj_employment_records.employee_final_salary+'</p>');
      $('#year_of_passing_veriiio').html('<p class="tabsss ">location</p><p>'+currentobj_employment_records.employer_addressone+'</p>');
      $('#institute_inproo').text(user_obja.qualification_name);
      $('#address_inproo').text(currentobj_employment_records.employer_addressone);
      $('#pincode_inproo').text(currentobj_employment_records.employer_zipcode);
*/
$('#from_qwe').html(' <h1 class="sdah1">From-To</h1><p class="sdap">'+currentobj_employment_records.working_from+'</p><p class="sdap">'+currentobj_employment_records.working_to+'</p>');
$('#designation_qwe').html('<h1 class="sdah1">Company</h1><p class="sdap">'+currentobj_employment_records.employer_name+'</p>');
$('#percentage_qwe').html('<h1 class="sdah1">Salary</h1><p class="sdap">'+currentobj_employment_records.employee_final_salary+'</p>');
$('#year_of_passing_veriiio_qwe').html('<h1 class="sdah1">location</h1><p class="sdap">'+currentobj_employment_records.employer_addressone+'</p>');
$('#institute_inproo_qwe').text(user_obja.qualification_name);
$('#address_inproo_qwe').text(currentobj_employment_records.employer_addressone);
$('#pincode_inproo_qwe').text(currentobj_employment_records.employer_zipcode);


    }

  }

}


if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
  //alert('education if');
  var sd=' <div class="ui-block-a grid_text grid_right  waves-effect waves-button"><img src="images/from-to.png" alt="" class="img_new">   <span id="designation_verii"></span></div><div class="ui-block-b grid_text grid_right waves-effect waves-button "><img src="images/check-in.png" alt="" class="img_new"><span id="from_verii"></span> </div><div class="ui-block-c grid_text grid_right waves-effect waves-button "><img src="images/save.png" alt="" class="img_new"> <span id="percentage_verii"></span></div><div class="ui-block-d grid_text waves-effect waves-button "><img src="images/location.png" alt="" class="img_new"> <span id="year_of_passing_verii"></span></div> '
  $('#sda_veri').append(sd);
  var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo_verii">512 Rd Oage Mill Rd Palo Alto, CA 94304</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/msg.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="address_inproo_verii">Carterblane@gmail.com</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/institute.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;padding-left: 31px;" id="pincode_inproo_verii">5012 Rd Oage Mill Rd Palo Alto, CA 94304</span></a> </li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo_verii">'+city+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo_verii">'+state+'</span></a></li>'
  $('#lii_veri').append(liii);

  var oneemp = new Array(10);
  j = -1;
  for(a=0;a<employment_upload_array.length;a++){

    employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");

if(empimg == qualification_id && empid == verification_user_id ){
//alert("if employimg_obj");
//alert(currentobj_educational_records.percentage+"if empimg after");
//alert(empid+"if empid after");
//alert(verification_user_id+"if verification_user_id after");
//var oneemp=employimg_obj.document;

j++;
oneemp[j]=employimg_obj.document;

if (j == 0 ){
  var one=oneemp[j];
  //alert(one+'oneempemmmmmplooooyy');
  $('.document_imag_inproone_veric').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


}
if (j == 1 ){
  var oneo=oneemp[j];
 // alert(oneo+'two');
  $('.document_imag_inproone_verib').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');

}
if (j == 2 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_veria').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');

}
if (j == 3 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_verid').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');

}
if (j == 4 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_verie').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');

}

if (j == 5 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_verif').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');

}

//alert(currentobj_educational_records.from);
//alert(currentobj_educational_records.to);
//alert(user_obja.qualification_name);

/*$('#from_verii').html(' <p class="tabsss">From & To</p><p>'+currentobj_educational_records.from+'</p><p>'+currentobj_educational_records.to+'</p>');
$('#designation_verii').html('<p class="tabsss ">Qualification</p><p>'+user_obja.qualification_name+'</p>');
$('#percentage_verii').html('<p class="tabsss ">Percentage</p><p>'+currentobj_educational_records.percentage+'%</p>');
$('#year_of_passing_verii').html('<p class="tabsss ">year_of_passing</p><p>'+currentobj_educational_records.year_of_passing+'</p>');
$('#institute_inproo_verii').text(currentobj_educational_records.institute_name);
$('#address_inproo_verii').text(currentobj_educational_records.address);
$('#pincode_inproo_verii').text(currentobj_educational_records.pincode);
*/

$('#from_verii').html(' <h1 class="sdah1">From-To</h1><p class="sdap">'+currentobj_educational_records.from+'</p><p class="sdap">'+currentobj_educational_records.to+'</p>');
$('#designation_verii').html('<h1 class="sdah1">Qualification</h1><p class="sdap">'+user_obja.qualification_name+'</p>');
$('#percentage_verii').html('<h1 class="sdah1">Percentage</h1><p class="sdap">'+currentobj_educational_records.percentage+'%</p>');
$('#year_of_passing_verii').html('<h1 class="sdah1">year_of_passing</h1><p class="sdap">'+currentobj_educational_records.year_of_passing+'</p>');
$('#institute_inproo_verii').text(currentobj_educational_records.institute_name);
$('#address_inproo_verii').text(currentobj_educational_records.address);
$('#pincode_inproo_verii').text(currentobj_educational_records.pincode);



//  $('.document_imag_veri').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/uploads/'+oneemp+'" style="width:150px;height:150px">&nbsp;');


$('#pincode_veri').text(currentobj_educational_records.pincode);



}

}

}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){

  var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo_veriii">512 Rd Oage Mill Rd Palo Alto, CA 94304</span></a></li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo">'+city+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo">'+state+'</span></a></li>'
  $('#lii_veri').append(liii);

  var oneaddress = new Array(10);
  j = -1;
  for(a=0;a<addressid_records_array.length;a++){
//alert("addressid for");
addressimg_obj = addressid_records_array[a];
// alert(addressimg_obj.document_name);
var oneimg=addressimg_obj.proof_type_id;
var oneid=addressimg_obj.user_id;
//alert(qualification_id+"oneimg");

if(oneimg == qualification_id && oneid == verification_user_id ){
//alert("if address proof");
//var oneproof=addressimg_obj.document_name;


j++;
oneaddress[j]=addressimg_obj.document_name;

if (j == 0 ){
  var one=oneaddress[j];
  //alert(one+'aaaaaaadddddressss');
  $('.document_imag_inproone_veric').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+one+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');


}
if (j == 1 ){
  var oneo=oneaddress[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_verid').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 2 ){
  var oneo=oneaddress[j];
 // alert(oneo+'two');
  $('.document_imag_inproone_verib').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}

if (j == 3 ){
  var oneo=oneaddress[j];
 // alert(oneo+'two');
  $('.document_imag_inproone_veria').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}

if (j == 4 ){
  var oneo=oneaddress[j];
 // alert(oneo+'two');
  $('.document_imag_inproone_verie').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 5 ){
  var oneo=oneaddress[j];
  //alert(oneo+'two');
  $('.document_imag_inproone_verie').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}


$('#institute_inproo_veriii').text(user_obja.qualification_name);
//$('#address_inproo').text(currentobj_educational_records.address);
//  $('#pincode_inproo').text(currentobj_educational_records.pincode);


//alert(oneproof+"oneimg after if proof"+oneimg);
//alert(user_obja.name+'name name name oneimg after if proo');
$('#name_veri').text(user_obja.name);
$('#qualification_name_veri').text(user_obja.qualification_name);
// $('#address').text(currentobj_educational_records.address);
// $('#percent').text(currentobj_educational_records.percentage);
// $('#institute').text(currentobj_educational_records.institute_name);
//$('#degree').text(currentobj_educational_records.degree_name);
$('#location_veri').text(user_obja.city_name);
// $('#year').text(currentobj_educational_records.year_of_passing);

//$('.document_imag_veri').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneproof+'" style="width:150px;height:150px">&nbsp');


//$('#pincode').text(currentobj_educational_records.pincode);



}

}


}

}






});









