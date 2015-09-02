$(document).on('pageshow', '#supervisor_list_notveri', function(){  
//alert("supervisor_list_notveri one");
$('#lis_notveri').empty();
//alert("supervisor_list_view");

$(document).off('click', '#dashboardlistnew_q').on('click', '#dashboardlistnew_q', function() {
//alert("sdfsdaffasf");
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#inprogresslistnew_q').on('click', '#inprogresslistnew_q', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#verifiedlistnew_q').on('click', '#verifiedlistnew_q', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#verihg').on('click', '#verihg', function() {
//sessionStorage.getItem.clear;
//$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
$.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

$(document).off('click', '#listviewnew_signout_q').on('click', '#listviewnew_signout_q', function() {
  sessionStorage.clear(); 

  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
  return false;
});

not_veri_array =  JSON.parse(sessionStorage.getItem("not_veri_array"));

addressid_records_array =  JSON.parse(sessionStorage.getItem("addressid_records_array"));
employment_records_array =  JSON.parse(sessionStorage.getItem("employment_records_array"));
educational_records_array =  JSON.parse(sessionStorage.getItem("educational_records_array"));
//employment_upload_array =  JSON.parse(sessionStorage.getItem("employment_upload_array"));

var superempty=not_veri_array;

if(superempty == ""){
//alert(superempty+'No record Found');
$.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
}

//alert(not_veri_array);
for(a=0;a<not_veri_array.length;a++){
  super_obj = not_veri_array[a];
// alert(super_obj.verification_user_id+'superArray'+super_obj.qualification_id);

qualification_id=super_obj.type;
//alert(super_obj.qualification_id +'for');

var sup=super_obj.name;


if( typeof sup !== 'undefined'){
//alert(super_obj.city_name)
//var list='<div class="ui-grid-a" > <div class="ui-block-a grid_2" style="margin-top: 16px;"><h2 class="h2_text">Name:'+super_obj.name+'</h2> <p>'+super_obj.verification_for+'</p><p>'+super_obj.qualification_name+'</p></div> <div class="ui-block-b grid_3" style="margin-top: 25px;">  <a href="#pageview" class="ui-corner-all ui-shadow button" onclick="callnextp('+a+')">'+super_obj.verification_user_id+'View Details</a><br></div> </div><hr>'
//$('#listshow').append(list);

var lis='<li class="bottom-colour"><a href="#" onclick="callnextpnotveri('+a+')"><h2 class="">Name:'+super_obj.name+'</h2> <p class="paralimit">'+super_obj.verification_for+'</p><p class="paralimit">'+super_obj.qualification_name+'</p><p class="ui-li-aside"><strong><a href="#" class="ui-btn ui-corner-all ui-icon-carat-r ui-btn-icon-notext" >Carat-r Icon</a></strong></p></a></li>'
$('#lis_notveri').append(lis);
//var list_align='<li><a ><h2 style="color: rgb(84, 86, 107);">Name:'+super_obj.name+'</h2><p>'+super_obj.verification_for+'</p><p>'+super_obj.qualification_name+'</p><p></p><p class="ui-li-aside"> <a href="#pageview" class="ui-corner-all ui-shadow button" onclick="callnextpnew('+a+')">'+super_obj.verification_user_id+'View Details</a></p></a></li><hr>'
//$('#list_align').append(list_align);

}


}



/*  for(a=0;a<superArray_array.length;a++){
super_obja = superArray_array[a];
//alert(super_obja.First_Name);
//alert(super_obja.city_name);
$("#supervisor_name_newlist").text(super_obja.First_Name);
$("#city_name_newlist").text(super_obja.city_name);
}
*/

});



function callnextpnotveri(index){



  super_obj = not_veri_array[index];
  qualification_id =super_obj.type;

  //alert(qualification_id +'hw');

  if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('function address id 12 to 15');
for(a=0;a<addressid_records_array.length;a++){
  address_obj = addressid_records_array[a];

  super_obj = not_veri_array[index];
  h =address_obj.user_id;
  hadd=address_obj.proof_type_id;

  g =super_obj.verification_user_id;

  if( h == g && hadd == qualification_id){
    address_objag = addressid_records_array[a];
    //alert(address_objag.user_id+'addressid_records_array'+g);
  }

}
}

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('function eduction id 1 to 5');
for(a=0;a<educational_records_array.length;a++){
  eductional_obj = educational_records_array[a];

  super_obj = not_veri_array[index];
  h =eductional_obj.user_id;
  hedu=eductional_obj.education_type;
//alert(hedu+'hdeducompare'+qualification_id); 
g =super_obj.verification_user_id;
//alert(g+'gg');

if( h == g && hedu == qualification_id){
/*   alert(h+'inside');
alert(hedu);
alert(g);
alert(qualification_id);*/
eductional_objaa = educational_records_array[a];
//alert(hedu+'heducompare'+qualification_id); 
//alert(eductional_objaa+"inside eductional_objaa");
//alert(eductional_objaa.user_id+'educational_records_arrayeducationalttttttttttttt_records_array'+g);
}

}
}

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('function employmen id 7 to 11');
for(a=0;a<employment_records_array.length;a++){
  employment_obj = employment_records_array[a];

  super_obj = not_veri_array[index];
  hu =employment_obj.user_id;
  huemploy=employment_obj.employment_type;
  gu =super_obj.verification_user_id;
//alert(gu+'gg'+hu+'hu');
//alert(huemploy+qualification_id)
if( hu == gu && huemploy == qualification_id ){
  //alert(hu+'iiiiiiiiiiin'+gu);
  //alert(huemploy+'iiiiiiiiiiin'+qualification_id);
  employment_objad = employment_records_array[a];

  //alert(employment_objad.user_id+"emp----o"+employment_objad.employment_type)

}
}
}

var eductional_objaa=eductional_objaa;
var employment_objad=employment_objad;
var address_objag=address_objag;

if(qualification_id == '1' || qualification_id == '2' || qualification_id == '3' || qualification_id == '4' || qualification_id == '5'){
//alert('currentob education succes');
sessionStorage.setItem("currentobj_not_veri",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_not_educational_records",JSON.stringify(eductional_objaa));
$.mobile.changePage($('#pagedesign_not_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '12' || qualification_id == '13' || qualification_id == '14' || qualification_id == '15'){
//alert('currentob address succes');
sessionStorage.setItem("currentobj_not_veri",JSON.stringify(super_obj));
sessionStorage.setItem("currentobja_not_addressid",JSON.stringify(address_objag ));
$.mobile.changePage($('#pagedesign_not_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}

if(qualification_id == '7' || qualification_id == '8' || qualification_id == '9' || qualification_id == '10' || qualification_id == '11'){
//alert('currentob employment succes');
sessionStorage.setItem("currentobj_not_veri",JSON.stringify(super_obj));
sessionStorage.setItem("currentobj_not_employment_records",JSON.stringify(employment_objad));
$.mobile.changePage($('#pagedesign_not_veri'), { transition: "none", changeHash: true, reverse: false });
return false;
}


}
