$(document).on('pageshow', '#pagedesign', function(){  
//alert('supervisor_inprogress_inside');
$('#logapp').empty();
$('.document_imag_inprooneqa').empty();
$('.document_imag_inprooneqb').empty();
$('.document_imag_inprooneqc').empty();
$('.document_imag_inprooneqd').empty();
$('.document_imag_inprooneqe').empty();
$('.document_imag_inprooneqf').empty();
$('#year_of_passing').empty();
$('#sda').empty();
$('#lii').empty();
$('#city_inproo').empty();
$('#state_inproo').empty();
$(document).off('click', '#new_verification_inside_op').on('click', '#new_verification_inside_op', function() {

//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#dashboard_inpro_inside_op').on('click', '#dashboard_inpro_inside_op', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});
$(document).off('click', '#inprogressnextb').on('click', '#inprogressnextb', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#updateactivitya'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inproveri_inside_op').on('click', '#inproveri_inside_op', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
$(document).off('click', '#inproveri_inside_neww_op').on('click', '#inproveri_inside_neww_op', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
$(document).off('click', '#before_inpro').on('click', '#before_inpro', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});


$(document).off('click', '#verified_inpro_inside').on('click', '#verified_inpro_inside', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
$(document).off('click', '#verified_inpro_inside_inpro_op').on('click', '#verified_inpro_inside_inpro_op', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});


$(document).off('click', '#listviewnew_signout_op').on('click', '#listviewnew_signout_op', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

//alert("success");
$('.document_imag_inpro').empty();
$('#select_inpro').empty();

assignValues();




function assignValues(){
  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
  superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
  user_obja = JSON.parse(sessionStorage.getItem("currentobj_inpro"));
  activity_log_details_array = JSON.parse(sessionStorage.getItem("activity_log_details_array"));

  currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_addressid_inpro"));

//alert("inside inprogress addressid" +currentobja_addressid.user_id+currentobja_addressid.proof_type_id );

currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_educational_inpro"));

education_array = JSON.parse(sessionStorage.getItem("education_array"));
employment_array = JSON.parse(sessionStorage.getItem("employment_array"));
address_array = JSON.parse(sessionStorage.getItem("address_array"));


//alert("inside inprogress educat" +currentobj_educational_records.user_id+currentobj_educational_records.education_type );

currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobj_employment_records_inpo"));

//alert("inside inprogress employ" +currentobj_employment_records.user_id+currentobj_employment_records.employment_type );

addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));

currentobj_log_inpro =  JSON.parse(sessionStorage.getItem("currentobj_log_inpro"));



employment_upload_array = JSON.parse(sessionStorage.getItem("multiple_documents_array"));

var coordinator_id = user_obja.type;
// alert(coordinator_id+'qualification_idcoordinator_id');
// var proof_type_id =currentobja_addressid.proof_type_id;
// alert(proof_type_id+'proof_type_id');
var verification_user_id = user_obja.verification_user_id;

var qualification_id=user_obja.type;
var city=user_obja.city_name;
var state=user_obja.state;
//alert(qualification_id);
// alert(user_obja.qualification_name+'qqq name')
//alert(user_obja.qualification_id+'qqq id')
//alert(verification_user_id+'verification_user_id id')

var region_num=region_array.region;

//alert(currentobj_log_inpro);
var current_log=currentobj_log_inpro;







var select='<div class="ui-select"><div id="status_val_inpro-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><div class="ui-select"><div id="status_val_inpro-button" class="ui-btn  ui-btn-icon-right ui-corner-all ui-shadow"><span>Select Status</span><select id="status_val_inpro"> <option value="Inprogress">Select Status</option><option value="Inprogress">Inprogress</option><option value="Verified">Verified</option></select></div></div></div></div>'
$('#select_inpro').append(select);

if(current_log !== null){
  for(a=0;a<activity_log_details_array.length;a++){

    activity_lo_obj = activity_log_details_array[a];
    log_ver=activity_lo_obj.verification_id;
    ver=currentobj_log_inpro.verification_id;

    typ =activity_lo_obj.type;
//alert(typ+'tyy')
if( log_ver == ver && typ == coordinator_id){
  activity_lok_obj = activity_log_details_array[a];

  var logapp='<li><a href="#"><h2></h2><p>'+activity_lok_obj.activity_log+'</p></a><p class="ui-li-asidea"><br><strong></strong></p></li>'
  $('#logapp').append(logapp);

}

}
}
else{
  var logapp='<li><a href="#"><p style="text-align:center">No Previous Log Found</p></li>'
  $('#logapp').append(logapp);
}

for(a=0;a<superArray_array.length;a++){
  super_obja = superArray_array[a];

  $("#supervisor_name_inprolistinside_o").text(super_obja.First_Name);
  $("#city_name_inprolistinside_o").text(super_obja.city_name);
//alert(super_obja.First_Name);
//alert(super_obja.city_name);

}



if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('employment');

var sd=' <div class="ui-block-a grid_text grid_right  waves-effect waves-button"><img src="images/from-to.png" alt="" class="img_new">   <span id="designation_inpro_employ"></span></div><div class="ui-block-b grid_text grid_right waves-effect waves-button "><img src="images/check-in.png" alt="" class="img_new"><span id="from_inpro_employ"></span> </div><div class="ui-block-c grid_text grid_right waves-effect waves-button "><img src="images/save.png" alt="" class="img_new"> <span id="percentage_inpro_employ"></span></div><div class="ui-block-d grid_text waves-effect waves-button "><img src="images/location.png" alt="" class="img_new"> <span id="year_of_passing_iou"></span></div> '
$('#sda').append(sd);
var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inpro_employ">512 Rd Oage Mill Rd Palo Alto, CA 94304</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/msg.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="address_inpro_employ">Carterblane@gmail.com</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/institute.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;padding-left: 31px;" id="pincode_inpro_employ">5012 Rd Oage Mill Rd Palo Alto, CA 94304</span></a> </li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo">'+city+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo"> '+state+'</span></a></li>'
$('#lii').append(liii);

/* for(a=0;a<employment_array.length;a++){

employment_array_obj = employment_array[a];
alert(employment_array_obj);
$('#city_inproo').text(employment_array_obj.city_name);
$('#state_inproo').text(employment_array_obj.state);

}*/

var oneemploy = new Array(10);
k = -1;

for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");

if(empimg == coordinator_id && empid == verification_user_id ){
//alert("if employimg_obj");
//alert(currentobj_educational_records.percentage+"if empimg after");
//alert(empid+"if empid after");
//alert(verification_user_id+"if verification_user_id after");

//var oneemploy=employimg_obj.document;

//alert(oneemploy);

k++;
oneemploy[k]=employimg_obj.document;
// alert(a);
if (k == 0 ){
  var one=oneemploy[k];
//alert(one+'oneemp');
$('.document_imag_inprooneqc').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+one+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');


}
if (k == 1 ){
  var oneo=oneemploy[k];
//alert(oneo+'two');
$('.document_imag_inprooneqd').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (k == 2 ){
  var oneo=oneemploy[k];
//alert(oneo+'two');
$('.document_imag_inprooneqb').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (k == 3 ){
  var oneo=oneemploy[k];
//alert(oneo+'two');
$('.document_imag_inprooneqa').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (k == 4 ){
  var oneo=oneemploy[k];
//alert(oneo+'two');
$('.document_imag_inprooneqe').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (k == 5 ){
  var oneo=oneemploy[k];
//alert(oneo+'two');
$('.document_imag_inprooneqf').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}

/*$('#from_inpro_employ').html(' <p class="tabsss">From & To</p><p>'+currentobj_employment_records.working_from+'</p><p>'+currentobj_employment_records.working_to+'</p>');
$('#designation_inpro_employ').html('<p class="tabsss ">Company</p><p>'+currentobj_employment_records.employer_name+'</p>');
$('#percentage_inpro_employ').html('<p class="tabsss ">Salary</p><p>'+currentobj_employment_records.employee_final_salary+'</p>');
$('#year_of_passing_iou').html('<p class="tabsss ">Location</p><p>'+currentobj_employment_records.employer_addressone+'</p>');
$('#institute_inpro_employ').text(user_obja.qualification_name);
$('#address_inpro_employ').text(currentobj_employment_records.employer_addressone);
$('#pincode_inpro_employ').text(currentobj_employment_records.employer_zipcode);
*/
$('#from_inpro_employ').html(' <h1 class="sdah1">From-To</h1><p class="sdap">'+currentobj_employment_records.working_from+'</p><p class="sdap">'+currentobj_employment_records.working_to+'</p>');
$('#designation_inpro_employ').html('<h1 class="sdah1">Company</h1><p class="sdap">'+currentobj_employment_records.employer_name+'</p>');
$('#percentage_inpro_employ').html('<h1 class="sdah1">Salary</h1><p class="sdap">'+currentobj_employment_records.employee_final_salary+'</p>');
$('#year_of_passing_iou').html('<h1 class="sdah1">location</h1><p class="sdap">'+currentobj_employment_records.employer_addressone+'</p>');
$('#institute_inpro_employ').text(user_obja.qualification_name);
$('#address_inpro_employ').text(currentobj_employment_records.employer_addressone);
$('#pincode_inpro_employ').text(currentobj_employment_records.employer_zipcode);


}

}

}

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('if education');

var sd=' <div class="ui-block-a grid_text grid_right  waves-effect waves-button"><img src="images/from-to.png" alt="" class="img_new">   <span id="designation_o"></span></div><div class="ui-block-b grid_text grid_right waves-effect waves-button "><img src="images/check-in.png" alt="" class="img_new"><span id="from_o"></span> </div><div class="ui-block-c grid_text grid_right waves-effect waves-button "><img src="images/save.png" alt="" class="img_new"> <span id="percentage_o"></span></div> <div class="ui-block-d grid_text waves-effect waves-button "><img src="images/location.png" alt="" class="img_new"> <span id="year_of_passing_o"></span></div>'
$('#sda').append(sd);
var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo_o">512 Rd Oage Mill Rd Palo Alto, CA 94304</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/msg.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="address_inproo_o">Carterblane@gmail.com</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/institute.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;padding-left: 31px;" id="pincode_inproo_o">5012 Rd Oage Mill Rd Palo Alto, CA 94304</span></a> </li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo_o">'+city+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo_o">'+state+'</span></a></li>'
$('#lii').append(liii);



var oneemp = new Array(10);
j = -1;
for(a=0;a<employment_upload_array.length;a++){

  employimg_obj = employment_upload_array[a];
// alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");
//alert(empid+'empid');
if(empimg == coordinator_id && empid == verification_user_id ) {

//var oneemp=employimg_obj.document;
j++;
oneemp[j]=employimg_obj.document;

if (j == 0 ){
  var one=oneemp[j];
  //alert(one+'oneemp');
  $('.document_imag_inprooneqc').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+one+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');


}
if (j == 1 ){
  var oneo=oneemp[j];
 // alert(oneo+'two');
  $('.document_imag_inprooneqd').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 2 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  $('.document_imag_inprooneqb').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 3 ){
  var oneo=oneemp[j];
 // alert(oneo+'two');
  $('.document_imag_inprooneqa').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 4 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  $('.document_imag_inprooneqe').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 5 ){
  var oneo=oneemp[j];
  //alert(oneo+'two');
  $('.document_imag_inprooneqf').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}

//alert(currentobj_educational_records.from);

$('#from_o').html(' <h1 class="sdah1">From-To</h1><p class="sdap">'+currentobj_educational_records.from+'</p><p class="sdap">'+currentobj_educational_records.to+'</p>');
$('#designation_o').html('<h1 class="sdah1">Qualification</h1><p class="sdap">'+user_obja.qualification_name+'</p>');
$('#percentage_o').html('<h1 class="sdah1">Percentage</h1><p class="sdap">'+currentobj_educational_records.percentage+'%</p>');
$('#year_of_passing_o').html('<h1 class="sdah1">year_of_passing</h1><p class="sdap">'+currentobj_educational_records.year_of_passing+'</p>');
$('#institute_inproo_o').text(currentobj_educational_records.institute_name);
$('#address_inproo_o').text(currentobj_educational_records.address);
$('#pincode_inproo_o').text(currentobj_educational_records.pincode);

/*$('#from_o').html(' <p class="tabsss">From & To</p><p>'+currentobj_educational_records.from+'</p><p>'+currentobj_educational_records.to+'</p>');
$('#designation_o').html('<p class="tabsss ">Qualification</p><p>'+user_obja.qualification_name+'</p>');
$('#percentage_o').html('<p class="tabsss ">Percentage</p><p>'+currentobj_educational_records.percentage+'%</p>');
$('#year_of_passing_o').html('<p class="tabsss ">year_of_passing</p><p>'+currentobj_educational_records.year_of_passing+'</p>');
$('#institute_inproo_o').text(currentobj_educational_records.institute_name);
$('#address_inproo_o').text(currentobj_educational_records.address);
$('#pincode_inproo_o').text(currentobj_educational_records.pincode);
*/

}

}


}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){


  var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo_ratio"></span></a></li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo">'+city+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo"> '+state+'</span></a></li>'
  $('#lii').append(liii);

/* for(a=0;a<address_array.length;a++){

address_array_obj = address_array[a];
alert(address_array_obj);
$('#city_inproo').text(address_array_obj.city_name);
$('#state_inproo').text(address_array_obj.state);


}*/

var oneaddress = new Array(10);
j = -1;
//alert('if address id');
for(a=0;a<addressid_records_array.length;a++){
//alert("addressid for");

addressimg_obj = addressid_records_array[a];
// alert(addressimg_obj.document_name);
var oneimg=addressimg_obj.proof_type_id;
var oneid=addressimg_obj.user_id;

//alert(oneimg +'equal to'+ proof_type_id);
//alert(oneid +'equal to'+ verification_user_id);
if(oneimg == coordinator_id && oneid == verification_user_id ){
//alert("oneimg ======inside coordinator_id");
//alert("oneid ======inside verification_user_id");
//var oneproof=addressimg_obj.document_name;

j++;
oneaddress[j]=addressimg_obj.document_name;

if (j == 0 ){
  var one=oneaddress[j];
//alert(one+'oneemp');
$('.document_imag_inprooneqc').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+one+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');


}
if (j == 1 ){
  var oneo=oneaddress[j];
//alert(oneo+'two');
$('.document_imag_inprooneqd').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 2 ){
  var oneo=oneaddress[j];
// alert(oneo+'two');
$('.document_imag_inprooneqb').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 3 ){
  var oneo=oneaddress[j];
// alert(oneo+'two');
$('.document_imag_inprooneqa').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 4 ){
  var oneo=oneaddress[j];
// alert(oneo+'two');
$('.document_imag_inprooneqe').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}
if (j == 5 ){
  var oneo=oneaddress[j];
// alert(oneo+'two');
$('.document_imag_inprooneqf').append('<img src="http://115.118.113.83/watchguardlive/documents/addressid/'+oneo+'" alt="Band" title="My favourite band" class="rondell-item-image rondell-item-resizeable">');

}


$('#institute_inproo_ratio').text(user_obja.qualification_name);
//   $('#address_inproo').text(currentobj_educational_records.address);
//$('#pincode_inproo').text(currentobj_educational_records.pincode);


}

}

}

$(document).off('click', '#inpro_to_verified').on('click', '#inpro_to_verified', function() { 
  var status_val_inpro=document.getElementById('status_val_inpro').value;
  var remark_inpro=document.getElementById('remark_inpro').value;
  var activity_log=document.getElementById('activity_log').value;
// var sdocument=document.getElementById('pgAddBookBookImage').value;
var sdocument=$('input[type=file]').val().split('\\').pop();
// var a = 'The Three Musketeers';
//b= a.substring(4, 9); 
//alert(b);
//alert(sdocument);


$.ajax({url: "http://staging.eimpressive.com/slimrestapi-watch/supervisor_status_to_verified.php?status_val_inpro="+status_val_inpro+"&verification_user_id="+verification_user_id+"&remark_inpro="+remark_inpro+"&coordinator_id="+coordinator_id+"&region_num="+region_num+"&activity_log="+activity_log+"&sdocument="+sdocument,
  data:$('#update_to_verified_inpro').serialize(),
  type: 'post',                   
  async: 'true',
  crossDomain: true,
  dataType: 'json',
  beforeSend: function() {

  },
  complete: function() {
  },
  success: function (result) {
    console.log('searchlpa' +result);
    if(result[0]){
      $("#popupsearchmade").popup("open");
      sessionStorage.setItem("new_verification_count_array",JSON.stringify(result[0]));
      sessionStorage.setItem("supervisor_inprogress_count_array",JSON.stringify(result[1]));
      sessionStorage.setItem("supervisor_verified_count_array",JSON.stringify(result[2]));
      $.mobile.loading().hide();
      $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
//$.mobile.changePage("dashboard",{ transition: "none", changeHash: true, reverse: false }); 
}else {
  alert('No Data Found for the search record'); 
}

return false;
},
error: function (request,error) {    
  console.log(request);
  console.log(error);  
  $("#Network").popup("open");         
  alert('Network error has occurred please try again!');
}
});

});





}






});