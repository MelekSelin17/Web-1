function Degistir(id1,id2){
    var abs=document.getElementById(id1).innerHTML;
    var ovr=document.getElementById(id2).innerHTML;
    document.getElementById(id1).innerHTML=ovr;
    // document.getElementById(id2).style.display="none";

}
function Kontrol(form){
    var ad = form.firstname.value;
    var soyad = form.lastname.value;
    var gend = form.gender.value;
    var age = form.yas.value;
    var phone = form.tel.value;
    var mail = form.email.value;
    //var msg = form.messeage.value;
    if(ad == null || ad =="" ){
        alert("Adınızı boş bırakmayınız..");
        return false;
    }
    else if(soyad== null || soyad==""){
        alert("Soyadınızı boş bırakmayınız..");
        return false;
    }
    else if(gend == null || gend==""){
        alert("Cinsiyeti boş bırakmayınız..");
        return false;
    }
    else if(age==null || age==0){
        alert("Yaşınızı boş bırakmayınız..");
        return false;
    }
    else if(phone==null||phone==""){
        alert("Telefon Numaranızı boş bırakmayınız..");
        return false;
    }
    else if(mail == null|| mail==""){
        alert("E-mailinizi boş bırakmayınız..");
        return false;
    }
    else{
        return true;
    }
}