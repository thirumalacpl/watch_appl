$(document).on('pageshow', '#updateactivitya', function(){  
//alert('updateactivitya 222');
$('#chat').empty();
assignValues();
      $(document).off('click', '#new_verification_inside_up').on('click', '#new_verification_inside_up', function() {

  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});

      $(document).off('click', '#dashboard_inpro_inside_up').on('click', '#dashboard_inpro_inside_up', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#dashboard'), { transition: "none", changeHash: true, reverse: false });
return false;
});
            $(document).off('click', '#before_inprosdf_up').on('click', '#before_inprosdf_up', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#pagedesign'), { transition: "none", changeHash: true, reverse: false });
return false;
});

        $(document).off('click', '#inproveri_inside_up').on('click', '#inproveri_inside_up', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
            $(document).off('click', '#inproveri_inside_neww_up').on('click', '#inproveri_inside_neww_up', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_view'), { transition: "none", changeHash: true, reverse: false });
return false;
});
                        $(document).off('click', '#before_inpro_up').on('click', '#before_inpro_up', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});


          $(document).off('click', '#verified_inpro_inside_up').on('click', '#verified_inpro_inside_up', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_verified_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});
                $(document).off('click', '#verified_inpro_inside_up_n').on('click', '#verified_inpro_inside_up_n', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_list_notveri'), { transition: "none", changeHash: true, reverse: false });
return false;
});
                              $(document).off('click', '#cancelbacktoinprolist').on('click', '#cancelbacktoinprolist', function() {
  //sessionStorage.getItem.clear;
  //$.mobile.changePage("index.html", { transition: "none", changeHash: true, reverse: false }); 
  $.mobile.changePage($('#supervisor_inprogress_list'), { transition: "none", changeHash: true, reverse: false });
return false;
});


     $(document).off('click', '#listviewnew_signout_up').on('click', '#listviewnew_signout_up', function() {
  sessionStorage.clear(); 
   
  $.mobile.changePage($('#pageone'), { transition: "none", changeHash: true, reverse: false });
return false;
});

});

$('#chat').empty();




function assignValues(){
   region_array = JSON.parse(sessionStorage.getItem("regionArray"));
    superArray_array =  JSON.parse(sessionStorage.getItem("supervisor_view_new_veri_array"));
      user_obja = JSON.parse(sessionStorage.getItem("currentobj_inpro"));
       activity_log_details_array = JSON.parse(sessionStorage.getItem("activity_log_details_array"));

       currentobj_log_inpro =  JSON.parse(sessionStorage.getItem("currentobj_log_inpro"));

       var coordinator_id = user_obja.type;
  
       var verification_user_id = user_obja.verification_user_id;

        var qualification_id=user_obja.type;

var region_num=region_array.region;

var current_log=currentobj_log_inpro;
for(a=0;a<superArray_array.length;a++){
  super_obja = superArray_array[a];

  $("#supervisor_name_inprolistinside_olo").text(super_obja.First_Name);
  $("#city_name_inprolistinside_olo").text(super_obja.city_name);
//alert(super_obja.First_Name);
//alert(super_obja.city_name);

}

if(current_log !== null){
for(a=0;a<activity_log_details_array.length;a++){
  
      activity_lo_obj = activity_log_details_array[a];
log_ver=activity_lo_obj.verification_id;
ver=currentobj_log_inpro.verification_id;

typ =activity_lo_obj.type;
//alert(typ+'tyy')
      if( log_ver == ver && typ == coordinator_id){
        activity_lok_obj = activity_log_details_array[a];
     lognotempty=activity_lok_obj.activity_log;

        if(lognotempty !== ''){
var chat='<div class="card-title has-avatar"> <h5 class="card-subtitle">'+activity_lok_obj.activity_log+'</h5></div> <h6 class="card-subtitle"><span style="font-size: 11px;float: right; color: #8e8e8e; padding-right: 10px;">'+activity_lok_obj.log_date+'</span></h6>'
$('#chat').append(chat);
}
}

    }
}
else{
  var logapp='<li><a href="#"><p style="text-align:center">No Previous Log Found</p></li>'
$('#logapp').append(logapp);
}



$("#msgheadera").text(user_obja.name);
$("#msgheaderb").text(user_obja.qualification_name);




function onSuccess(data, status)
        {
            //data = $.trim(data);
            //$("#chat").text(data);

       
         sessionStorage.setItem("currentobj_log_inpro",JSON.stringify(data));

        currentobj_log_inpro =  JSON.parse(sessionStorage.getItem("currentobj_log_inpro"));

//alert(currentobj_log_inpro.activity_log);
     
$('#chat').empty();

for(a=0;a<currentobj_log_inpro.length;a++){

        activity_lok_obj = currentobj_log_inpro[a];
        lognotempty=activity_lok_obj.activity_log;

        if(lognotempty !== ''){

var chat='<div class="card-title has-avatar"> <h5 class="card-subtitle">'+activity_lok_obj.activity_log+'</h5></div> <h6 class="card-subtitle"><span style="font-size: 11px;float: right; color: #8e8e8e; padding-right: 10px;">'+activity_lok_obj.log_date+'</span></h6>'
$('#chat').append(chat);
}

}

        }
  
        function onError(data, status)
        {
            // handle an error
        }        
  
       $(document).off('click', '#chatSendButton').on('click', '#chatSendButton', function() { 
            
 var loginistant=document.getElementById('messageText').value;
document.getElementById('messageText').value = "";
   // alert(loginistant +'chat msg');
 //alert(verification_user_id);
  //alert(coordinator_id);
  if(loginistant !== '[object HTMLTextAreaElement]' && loginistant !== ''){

                var formData = $("#callAjaxForm").serialize();
  
                $.ajax({
                    type: "POST",
                    url: "http://staging.eimpressive.com/slimrestapi-watch/chat.php?loginistant="+loginistant+"&verification_user_id="+verification_user_id+"&coordinator_id="+coordinator_id,
                    
                    data: formData,
                    success: onSuccess,
                    async: 'true',
                    crossDomain: true,
                   dataType: 'json',
                    error: onError
                });
  }
                return false;
            });
      



$(document).off('click', '#savetoveriornot').on('click', '#savetoveriornot', function() { 
   
     var status_val_inpro = $('input:radio[name=radio-choice-a]:checked').val();

      var sdocument=$('input[type=file]').val().split('\\').pop();
   alert(status_val_inpro);
    alert(sdocument);
 alert(verification_user_id);
  alert(coordinator_id);
$.ajaxPrefilter(function( options, originalOptions, jqXHR ) {
    options.async = true;
});
$.ajax({url: "http://staging.eimpressive.com/slimrestapi-watch/supervisor_status_to_verified.php?status_val_inpro="+status_val_inpro+"&verification_user_id="+verification_user_id+"&coordinator_id="+coordinator_id+"&region_num="+region_num+"&sdocument="+sdocument,
    data:$('#radioupload').serialize(),
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
          sessionStorage.setItem("not_veri_count_array",JSON.stringify(result[3]));
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
