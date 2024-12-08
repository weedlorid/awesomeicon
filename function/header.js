function showheader(){
    document.getElementById("header-container").innerHTML=`
     <div class="header-item"><img src="./img/SK_Telecom_T1_logo.png" alt="" style="height: 80px;"></div>
        <div class="header-item"><h1 >Awesome Icons</h1></div>
        <div class="header-item ">
            <div class="sub-header-item"><p>About</p></div>
            <div class="sub-header-item"><p>Contact</p></div>
        </div>
    `
}
document.onload=showheader()