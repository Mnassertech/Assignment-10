var siteName=document.getElementById("siteName");
var siteURL=document.getElementById("siteURL");
var tableNames=[];
var tableURLs=[];
function addDataToTable(){
    var siteNameVar=siteName.value;
    var siteURLVar=siteURL.value;
    if(siteNameVar&&siteURLVar){
        if((siteNameVar.length>3||regex(siteURLVar))&&sameName(siteNameVar)){
            tableNames.push(siteNameVar)
            tableURLs.push(siteURLVar)
            displayTable();
         }
        else{
            errorAppear();
        }
    }
    else{
        errorAppear();
    }
        siteName.value="";
        siteURL.value="";
}

function sameName(newName){
    for(var i=0;i<tableNames.length;i++){
        if(newName==tableNames[i]){
            var flag=1;
        }
        else{
            flag=0;
        }
    }
    if(flag==1){
        return false;
    }
    else{
        return true;
    }
}

function regex(compare){
    var regex = /^(?:www\.)?(?:[a-z0-9-]+(?:\.[a-z0-9-]+)+)\.(com|net|io|org|edu|gov|info|biz|co|me|us)$/i;
    return regex.test(compare);
}

function displayTable(){
    var cartona=``;
    for(var i=0;i<tableNames.length;i++){
        cartona+=`
        <tr>
            <td>${i+1}</td>
            <td>${tableNames[i]}</td>
            <td><a href="https://${tableURLs[i]}" class="btn1" ><i class="fa-solid fa-eye"></i>Visit</a></td>
            <td><button class="btn2"onclick="deleteRow(${i})"><i class="fa-solid fa-trash"></i>Delete</button></td>
        </tr>
        `
    }
    document.getElementById("tableContent").innerHTML=cartona;
}
function deleteRow(deleteindex){
    tableNames.splice(deleteindex,1);
    tableURLs.splice(deleteindex,1);
    displayTable();
}
function errorAppear(){
    document.getElementById("errorMod").classList.remove("d-none"); 
    document.getElementById("errorMod").classList.add("d-block");
}
function closeWarning(){
    document.getElementById("errorMod").classList.remove("d-block"); 
    document.getElementById("errorMod").classList.add("d-none");
}