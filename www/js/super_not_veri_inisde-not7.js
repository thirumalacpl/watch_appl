		$(document).on('pageshow', '#pagedesign_not_veri', function(){  
alert("super_not_veri_inside");
$('#sda_not_veri').empty();
$('#lii_not_veri').empty();
$('.document_imag_inproone_notveria').empty();
 $('.document_imag_inproone_notverib').empty()
  $('.document_imag_inproone_notveric').empty()
   $('.document_imag_inproone_notverid').empty()
    $('.document_imag_inproone_notverie').empty()
     $('.document_imag_inproone_notverif').empty()

      $(document).off('click', '#new_verification_inside').on('click', '#new_verification_inside', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#dashboard_inside').on('click', '#dashboard_inside', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

        $(document).off('click', '#new_inside_inpro_not').on('click', '#new_inside_inpro_not', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

          $(document).off('click', '#new_inside_not_verified').on('click', '#new_inside_not_verified', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});
                    $(document).off('click', '#before_new_not_Veri_list').on('click', '#before_new_not_Veri_list', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#new_verification_inside_not').on('click', '#new_verification_inside_not', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

  $(document).off('click', '#super_view_inside_signout_not').on('click', '#super_view_inside_signout_not', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      //alert("success");
$('.document_imag').empty();
$('#percent').empty();
$('#select').empty();
//$('#name').empty();
assignValues();


 

function assignValues(){
  region_array = JSON.parse(sessionStorage.getItem("regionArray"));
      user_obja = JSON.parse(sessionStorage.getItem("currentobj"));
       //alert( user_obja.user_id + 'user_obja no');
       currentobja_addressid = JSON.parse(sessionStorage.getItem("currentobja_not_addressid"));
        //alert( currentobja_addressid.user_id + 'address no');
       currentobj_educational_records = JSON.parse(sessionStorage.getItem("currentobj_not_educational_records"));
       //alert( currentobj_educational_records.user_id+'education no');
        //currentobj_employment_records = JSON.parse(sessionStorage.getItem("currentobj_employment_records"));
         addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));

         currentobj_employment_records =  JSON.parse(sessionStorage.getItem("currentobj_not_employment_records"));
         //alert(currentobj_employment_records.user_id+'employment');

     employment_upload_array = JSON.parse(sessionStorage.getItem("multiple_documents_array"));

        superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));

       var qualification_id = user_obja.type;
       //alert(qualification_id);
       var verification_user_id = user_obja.verification_user_id;

     var city = user_obja.city_name;
       //alert(city);
       var state = user_obja.state;
         //alert(state);

var region_num=region_array.region;
//alert(region_array.region+'regionnnnnn');

for(a=0;a<superArray_array.length;a++){
      super_obja = superArray_array[a];
//alert(super_obja.First_Name);
//alert(super_obja.city_name);
$("#supervisor_name_newlistq").text(super_obja.First_Name);
$("#city_name_newlistq").text(super_obja.city_name);
    }


    
 var select='<div class="ui-select"><div id="status_val-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><div class="ui-select"><div id="status_val-button" class="ui-btn  ui-btn-icon-right ui-corner-all ui-shadow"><span>Select Status</span><select id="status_val"><option value="New">Select Status</option><option value="Inprogress">Inprogress</option> </select></div></div></div></div>' 
//var select=' <div class="ui-select"><div id="status_val-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><div class="ui-select"><div id="status_val-button" class=""><span>Select Status</span><select id="status_val"> <option value="New">Select Status</option><option value="Inprogress">Inprogress</option> </select></div></div></div></div>'
//var select=' <div class="ui-select"><div id="status_val-button" class="ui-btn ui-icon-carat-d ui-btn-icon-right ui-corner-all ui-shadow"><div class="ui-select"><div id="status_val-button"><select id="status_val"><option value="New">Select Status</option> <option value="Inprogress">Inprogress</option></select></div></div></div></div>'
$('#select').append(select);



 if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
alert('emplo inside');
var sd=' <div class="ui-block-a grid_text grid_right  waves-effect waves-button"><img src="images/from-to.png" alt="" class="img_new">   <span id="designation"></span></div><div class="ui-block-b grid_text grid_right waves-effect waves-button "><img src="images/check-in.png" alt="" class="img_new"><span id="from"></span> </div><div class="ui-block-c grid_text grid_right waves-effect waves-button "><img src="images/save.png" alt="" class="img_new"> <span id="percentage"></span></div> '
 $('#sda_not_veri').append(sd);
 var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo">512 Rd Oage Mill Rd Palo Alto, CA 94304</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/msg.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="address_inproo">Carterblane@gmail.com</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/institute.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;padding-left: 31px;" id="pincode_inproo">5012 Rd Oage Mill Rd Palo Alto, CA 94304</span></a> </li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo">'+city+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo"> '+state+'</span></a></li>'
$('#lii_not_veri').append(liii);


    var oneemploy = new Array(10);
k = -1;
for(a=0;a<employment_upload_array.length;a++){
  
      employimg_obj = employment_upload_array[a];
     
var empimgempl=employimg_obj.verification_type_id;
var empidempl=employimg_obj.verification_master_id;


if(empimgempl == qualification_id && empidempl == verification_user_id ){
 
//alert("if employimg_obj");
//alert(currentobj_educational_records.percentage+"if empimg after");
//alert(empid+"if empid after");
//alert(verification_user_id+"if verification_user_id after");
//var oneemploy=employimg_obj.document;


    k++;
    oneemploy[k]=employimg_obj.document;

 
if ( k == 0){
var one=oneemploy[k];
    alert(one+'one');
    $('.document_imag_inproone_notveric').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


}
if ( k == 1){
var oneo=oneemploy[k];
    alert(oneo+'two');
     $('.document_imag_inproone_notverib').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( k == 2){
var oneoo=oneemploy[k];
    alert(oneoo+'3');
     $('.document_imag_inproone_notveria').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneoo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( k == 3){
var oneooo=oneemploy[k];
    alert(oneooo+'4');
     $('.document_imag_inproone_notverid').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneooo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( k == 4){
var oner=oneemploy[k];
    alert(oner+'5');
     $('.document_imag_inproone_notverie').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

if ( k == 5){
var oner=oneemploy[k];
    alert(oner+'6');
     $('.document_imag_inproonet_notnewf').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

$('#from').html(' <p class="tabsss">From & To</p><p>'+currentobj_employment_records.working_from+'</p><p>'+currentobj_employment_records.working_to+'</p>');
   $('#designation').html('<p class="tabsss ">Company</p><p>'+currentobj_employment_records.employer_name+'</p>');
      $('#percentage').html('<p class="tabsss ">Salary</p><p>'+currentobj_employment_records.employee_final_salary+'</p>');
     // $('#year_of_passing').html('<p class="tabsss ">year_of_passing</p><p>'+currentobj_educational_records.year_of_passing+'</p>');
        $('#institute_inproo').text(user_obja.qualification_name);
         $('#address_inproo').text(currentobj_employment_records.employer_addressone);
          $('#pincode_inproo').text(currentobj_employment_records.employer_zipcode);

   $('#name').text(user_obja.name);
    $('#percent').text('SALARY'+currentobj_employment_records.employee_final_salary);
     //$('#address').text(currentobj_educational_records.address);
    $('#qualification_name').text(user_obja.qualification_name);
    $('#institute').text(currentobj_employment_records.employer_name);
    //$('#degree').text(currentobj_educational_records.degree_name);
    $('#location').text(user_obja.city_name);

 
    
    $('.document_imag').append('<img class="profile-thumbnail" src="http://115.118.113.83/watchguardlive/uploads/'+oneemp+'" style="width:150px;height:150px">&nbsp;');


      $('#pincode').text(currentobj_employment_records.employer_zipcode);

}

}
 
 }


if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
alert('if education');

var sd=' <div class="ui-block-a grid_text grid_right  waves-effect waves-button"><img src="images/from-to.png" alt="" class="img_new">   <span id="designation"></span></div><div class="ui-block-b grid_text grid_right waves-effect waves-button "><img src="images/check-in.png" alt="" class="img_new"><span id="from"></span> </div><div class="ui-block-c grid_text grid_right waves-effect waves-button "><img src="images/save.png" alt="" class="img_new"> <span id="percentage"></span></div> <div class="ui-block-d grid_text waves-effect waves-button "><img src="images/location.png" alt="" class="img_new"> <span id="year_of_passing"></span></div>'
 $('#sda_not_veri').append(sd);
 var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo">512 Rd Oage Mill Rd Palo Alto, CA 94304</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/msg.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="address_inproo">Carterblane@gmail.com</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/institute.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;padding-left: 31px;" id="pincode_inproo">5012 Rd Oage Mill Rd Palo Alto, CA 94304</span></a> </li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo">'+city+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo"> '+state+'</span></a></li>'
$('#lii_not_veri').append(liii);


var oneemp = new Array(10);
j = -1;
for(a=0;a<employment_upload_array.length;a++){

      employimg_obj = employment_upload_array[a];
       // alert(addressimg_obj.document_name);
var empimg=employimg_obj.verification_type_id;
var empid=employimg_obj.verification_master_id;
//alert(empimg+"oneimg bsfore if");
//alert(empid+'empid');
if(empimg == qualification_id && empid == verification_user_id ) {

//var oneemp=employimg_obj.document;
    j++;
    oneemp[j]=employimg_obj.document;
var arr_a=oneemp[0];
var arr_b=oneemp[1];
var arr_c=oneemp[2];
    alert(a+"a data");
     alert(arr_a+'0');
    alert(arr_b+'1');
     alert(arr_c+'2');
     
     if ( j == 0){
var one=oneemp[j];
    alert(one+'one');
    $('.document_imag_inproonet_notnewc').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


}
if ( j == 1){
var oneo=oneemp[j];
    alert(oneo+'two');
     $('.document_imag_inproonet_notnewb').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 2){
var oneoo=oneemp[j];
    alert(oneoo+'3');
     $('.document_imag_inproonet_notnewa').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneoo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 3){
var oneooo=oneemp[j];
    alert(oneooo+'4');
     $('.document_imag_inproonet_notnewd').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneooo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 4){
var oner=oneemp[k];
    alert(oner+'5');
     $('.document_imag_inproonet_notnewe').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

if ( j == 5){
var oner=oneemp[j];
    alert(oner+'6');
     $('.document_imag_inproonet_newf').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}



$('#from').html(' <p class="tabsss">From & To</p><p>'+currentobj_educational_records.from+'</p><p>'+currentobj_educational_records.to+'</p>');
   $('#designation').html('<p class="tabsss ">Qualification</p><p>'+user_obja.qualification_name+'</p>');
      $('#percentage').html('<p class="tabsss ">Percentage</p><p>'+currentobj_educational_records.percentage+'%</p>');
      $('#year_of_passing').html('<p class="tabsss ">year_of_passing</p><p>'+currentobj_educational_records.year_of_passing+'</p>');
        $('#institute_inproo').text(currentobj_educational_records.institute_name);
         $('#address_inproo').text(currentobj_educational_records.address);
          $('#pincode_inproo').text(currentobj_educational_records.pincode);
          

}

}


}

/*if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){

var sd=' <div class="ui-block-a grid_text grid_right  waves-effect waves-button"><img src="images/from-to.png" alt="" class="img_new">   <span id="designation"></span></div><div class="ui-block-b grid_text grid_right waves-effect waves-button "><img src="images/check-in.png" alt="" class="img_new"><span id="from"></span> </div><div class="ui-block-c grid_text grid_right waves-effect waves-button "><img src="images/save.png" alt="" class="img_new"> <span id="percentage"></span></div> <div class="ui-block-d grid_text waves-effect waves-button "><img src="images/location.png" alt="" class="img_new"> <span id="year_of_passing"></span></div>'
 $('#sda_not_veri').append(sd);
 var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo">512 Rd Oage Mill Rd Palo Alto, CA 94304</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/msg.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="address_inproo">Carterblane@gmail.com</span></a></li><li class="ui-li-has-icon ui-first-"> <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/institute.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;padding-left: 31px;" id="pincode_inproo">5012 Rd Oage Mill Rd Palo Alto, CA 94304</span></a> </li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo">'+city+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo"> '+state+'</span></a></li>'
$('#lii_not_veri').append(liii);

//alert("if educatio_obj");
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
   j++;
    oneemp[j]=employimg_obj.document;
     
if ( j == 0){
var one=oneemp[j];
    alert(one+'one');
    $('.document_imag_inproonet_notnewc').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


}
if ( j == 1){
var oneo=oneemp[j];
    alert(oneo+'two');
     $('.document_imag_inproonet_notnewb').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 2){
var oneoo=oneemp[j];
    alert(oneoo+'3');
     $('.document_imag_inproonet_notnewa').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneoo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 3){
var oneooo=oneemp[j];
    alert(oneooo+'4');
     $('.document_imag_inproonet_notnewd').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneooo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 4){
var oner=oneemp[k];
    alert(oner+'5');
     $('.document_imag_inproonet_notnewe').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

if ( j == 5){
var oner=oneemp[j];
    alert(oner+'6');
     $('.document_imag_inproonet_notnewf').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}



$('#from').html(' <p class="tabsss">From & To</p><p>'+currentobj_educational_records.from+'</p><p>'+currentobj_educational_records.to+'</p>');
   $('#designation').html('<p class="tabsss ">Qualification</p><p>'+user_obja.qualification_name+'</p>');
      $('#percentage').html('<p class="tabsss ">Percentage</p><p>'+currentobj_educational_records.percentage+'%</p>');
      $('#year_of_passing').html('<p class="tabsss ">year_of_passing</p><p>'+currentobj_educational_records.year_of_passing+'</p>');
        $('#institute_inproo').text(currentobj_educational_records.institute_name);
         $('#address_inproo').text(currentobj_educational_records.address);
          $('#pincode_inproo').text(currentobj_educational_records.pincode);
          


}

}
}
*/
if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
alert("if addressid");

 var liii='<li class="ui-li-has-icon ui-first- ui-first-child">  <a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;">  <img src="images/mobile/location.png" alt="USA" class="ui-li-icon profile t">  <span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="institute_inproo">512 Rd Oage Mill Rd Palo Alto, CA 94304</span></a></li><li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/world.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="city_inproo">'+city+'</span></a></li> <li class="ui-li-has-icon ui-first- ui-last-child"><a href="#" class="ui-btn ui-btn-icon- ui-icon- pad" style="background-color: #F0F0F0; border-color: #FFF;"><img src="images/mobile/state.png" alt="USA" class="ui-li-icon profile t"><span style="font-size: 15px; font-weight: 400;    padding-left: 31px;" id="state_inproo"> '+state+'</span></a></li>'
$('#lii_not_veri').append(liii);

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
  j++;
    oneaddress[j]=addressimg_obj.document_name;
     
if ( j == 0){
var one=oneemp[j];
    alert(one+'one');
    $('.document_imag_inproonet_notnewa').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+one+'" alt="Band"  class="rondell-item-image rondell-item-resizeable">');


}
if ( j == 1){
var oneo=oneemp[j];
    alert(oneo+'two');
     $('.document_imag_inproonet_notnewb').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 2){
var oneoo=oneemp[j];
    alert(oneoo+'3');
     $('.document_imag_inproonet_notnewc').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneoo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 3){
var oneooo=oneemp[j];
    alert(oneooo+'4');
     $('.document_imag_inproonet_notnewd').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oneooo+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}
if ( j == 4){
var oner=oneemp[k];
    alert(oner+'5');
     $('.document_imag_inproonet_notnewe').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}

if ( j == 5){
var oner=oneemp[j];
    alert(oner+'6');
     $('.document_imag_inproonet_newf').append('<img src="http://115.118.113.83/watchguardlive/uploads/'+oner+'" alt="Band" class="rondell-item-image rondell-item-resizeable">');

}


    $('#institute_inproo').text(user_obja.qualification_name);
        // $('#address_inproo').text(currentobj_educational_records.address);
         // $('#pincode_inproo').text(currentobj_educational_records.pincode);



}

}
 
 }

$(document).off('click', '#inprogress').on('click', '#inprogress', function() { 
   var status_val=document.getElementById('status_val').value;
    var remark=document.getElementById('remark').value;
    //alert(region_num);

$.ajax({url: "http://staging.eimpressive.com/slimrestapi-watch/supervisor_status_to_inprogress.php?status_val="+status_val+"&verification_user_id="+verification_user_id+"&remark="+remark+"&qualification_id="+qualification_id+"&region_num="+region_num,
    data:$('#update_to_inprogress').serialize(),
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


      
 




     
    