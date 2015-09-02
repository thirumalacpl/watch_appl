<?php


include('dbConnect.inc.php');


   $user_ida = $_REQUEST['user_ida'];

	
	$qualification_id = $_REQUEST['qualification_id'];



	
	


$collectionArray = array();

$education_array =array();
$employment_array=array();
$address_array =array();



	

$new_verification_count = mysql_query("select er.institute_name,er.year_of_passing,er.percentage,er.from as lfrom,er.to as lto,er.address,er.pincode,st.state,ct.city_name,qu.qualification_id, ia.id, ia.name, ia.status, qu.qualification_name, ia.document_name from insert_assigned_users as ia inner join qualifications as qu on ia.qualification_name=qu.qualification_name inner join educational_records er on er.education_type=qu.qualification_id Inner Join states st on st.id=er.state Inner join cities ct on ct.city_id=er.city where ia.verification_user_id='$user_ida' and qu.qualification_id='$qualification_id' and er.user_id='$user_ida'"); 

	 while($r6 = mysql_fetch_array($new_verification_count)) {

	// 	$supervisor_view_new_veri_array['data2'][] = $r2;

	array_push($education_array,$r6);

}

$new_verification_counta = mysql_query("select evc.employer_name as institute_name,evc.employee_final_salary as percentage,evc.employer_addressone as address,evc.employer_zipcode as  pincode,st.state,ct.city_name,em.employment as qualification_name,evc.working_from as lfrom,evc.working_to as lto,ia.id from insert_assigned_users as ia inner join emp_verification_cumulative evc on evc.user_id =ia.verification_user_id Inner join employment em on em.empid=evc.employment_type Inner Join states st on st.id=evc.employer_state_id  Inner join cities ct on ct.city_id=evc.employer_city_id where ia.verification_user_id='$user_ida' and ia.type='$qualification_id' and evc.user_id='$user_ida'"); 

	 while($r7 = mysql_fetch_array($new_verification_counta)) {

	// 	$supervisor_view_new_veri_array['data2'][] = $r2;

	array_push($employment_array,$r7);

}

$new_verification_countaa = mysql_query("select ct.city_name,st.state,at.address_name as qualification_name,ia.id from insert_assigned_users as ia inner join cities as ct on ct.city_id=ia.location inner join states as st on st.id=ia.state inner join address_type as at on at.id=ia.type where verification_user_id='$user_ida' and type='$qualification_id'"); 

	 while($r8 = mysql_fetch_array($new_verification_countaa)) {

	// 	$supervisor_view_new_veri_array['data2'][] = $r2;

	array_push($address_array,$r8);

}

	







array_push($collectionArray,$education_array);
array_push($collectionArray,$employment_array);
array_push($collectionArray,$address_array);

	


print json_encode($collectionArray, JSON_NUMERIC_CHECK);





?>
