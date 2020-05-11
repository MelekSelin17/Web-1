<?php
$kadi=filter_input(INPUT_POST,'isim');
$pass=filter_input(INPUT_POST,'sifre');
if(!empty($kadi)){
	if(!empty($pass)){
$host="localhost";
$dbusername="root";
$dbpassword="";
$dbname="login";
	}
}
$conn =new mysqli($host,$dbusername,$dbpassword,$dbname);
if(mysqli_connect_error()){
	die('Connect Error ('.mysqli_connect_errno().')'.mysqli_connect_error());
}
else{
	$sql="INSERT INTO account(username,password)
values ('$kadi', 'pass')"
if($conn->query($sql))
{
echo="yhfdk";
}
else {
	echo="Error".$sql. "<br>". $conn->error;
}
$conn->close();
}
}
?>