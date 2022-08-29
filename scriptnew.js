// var list1=[];
// var list2=[];
// var list3=[];
// var list4=[];
// var list5=[];
// var list6=[];
// var list7=[];
// var list8=[];
// var list9=[];
// var list10=[];
// var rIndex;

// function sum(){
//    var mat,eng,sci,tel,hin,soc,tot,gr;
//    mat=parseInt(document.getElementById("maths").value);
//    eng=parseInt(document.getElementById("eng").value);
//    sci=parseInt(document.getElementById("sci").value);
//    soc=parseInt(document.getElementById("soc").value);
//    tel=parseInt(document.getElementById("tel").value);
//    hin=parseInt(document.getElementById("hindi").value);
//    tot=document.getElementById("total");
//    tot.value=mat+eng+sci+soc+tel+hin;
//    gr=document.getElementById("grade");
//    if(tot.value>540){
//        gr.value="A+"

//    }
//    else if(tot.value>480){
//        gr.value="A"

//    }
//    else if(tot.value>440){
//        gr.value="B"

//    }
//    else if(tot.value>380){
//        gr.value="C"

//    }
//    else if(tot.value>320){
//        gr.value="D"

//    }
//    else if(tot.value>250){
//        gr.value="E"

//    }
//    else {
//        gr.value="FAIL"

//    }
// }
function reset(){
// if(confirm("Are you sure to reset?(entire data is lost)")){
//    location.reload();
document.getElementById('id').value='';
document.getElementById('name').value='';
document.getElementById('maths').value='';
document.getElementById('soc').value='';
document.getElementById('eng').value='';
document.getElementById('tel').value='';
document.getElementById('sci').value='';
document.getElementById('hindi').value='';
document.getElementById('total').value='';
document.getElementById('grade').value='';
 selectrow();
}
// var c=0;
// var n=1;
// function addrow(){
//     var a,i;
//     a=document.getElementById('id').value;
    

// var x=0;
// var addrown=document.getElementById('show');
// var NewRow=addrown.insertRow(n);
// var aa=0;

// for(i=0;i<n;i++){
//      if (n>=1){ 
//         rIndex=this.rowIndex;
        
//         if( a==addrown.rows[i].cells[0].innerHTML){
//               aa=1;
//                if(confirm("A record already exist Do you want to replace it?")){
// list1[i]=document.getElementById('id').value;
// list2[i]=document.getElementById('name').value;
// list3[i]=document.getElementById('maths').value;
// list4[i]=document.getElementById('soc').value;
// list5[i]=document.getElementById('eng').value;
// list6[i]=document.getElementById('tel').value;
// list7[i]=document.getElementById('sci').value;
// list8[i]=document.getElementById('hindi').value;
// list9[i]=document.getElementById('total').value;
// list10[i]=document.getElementById('grade').value;


// addrown.rows[i].cells[0].innerHTML=document.getElementById('id').value;;
// addrown.rows[i].cells[1].innerHTML=list2[i];
// addrown.rows[i].cells[2].innerHTML=list3[i];
// addrown.rows[i].cells[3].innerHTML=list4[i];
// addrown.rows[i].cells[4].innerHTML=list5[i];
// addrown.rows[i].cells[5].innerHTML=list6[i];
// addrown.rows[i].cells[6].innerHTML=list7[i];
// addrown.rows[i].cells[7].innerHTML=list8[i];
// addrown.rows[i].cells[8].innerHTML=list9[i];
// addrown.rows[i].cells[9].innerHTML=list10[i];





// }




//     }}}
// if(aa==0) {
// list1[x]=document.getElementById('id').value;
//  list2[x]=document.getElementById('name').value;
// list3[x]=document.getElementById('maths').value;
//  list4[x]=document.getElementById('soc').value;
//  list5[x]=document.getElementById('eng').value;
//  list6[x]=document.getElementById('tel').value;
//  list7[x]=document.getElementById('sci').value;
//  list8[x]=document.getElementById('hindi').value;
//  list9[x]=document.getElementById('total').value;
//  list10[x]=document.getElementById('grade').value;
//  var cel1 = NewRow.insertCell(0);
// var cel2 = NewRow.insertCell(1);
// var cel3 = NewRow.insertCell(2);
// var cel4 = NewRow.insertCell(3);
// var cel5 = NewRow.insertCell(4);
// var cel6 = NewRow.insertCell(5);
// var cel7 = NewRow.insertCell(6);
// var cel8 = NewRow.insertCell(7);
// var cel9 = NewRow.insertCell(8);
// var cel10 = NewRow.insertCell(9);



// cel1.innerHTML = list1[x];
// cel2.innerHTML = list2[x];
// cel3.innerHTML = list3[x];
// cel4.innerHTML = list4[x];
// cel5.innerHTML = list5[x];
// cel6.innerHTML = list6[x];
// cel7.innerHTML = list7[x];
// cel8.innerHTML = list8[x];
// cel9.innerHTML = list9[x];
// cel10.innerHTML = list10[x];


// c=n;
// n++;
// x++;


// }
// selectrow();}
// var u;
// function modify(){
// var a,i;
// a=document.getElementById('id').value;
// for(i=0;i<n;i++){
//     if(a==list1[i]){
//         u=i;
//     }
// }

//  document.getElementById('name').value=list2[u];
//  document.getElementById('maths').value=list3[u];
//  document.getElementById('soc').value=list4[u];
//  document.getElementById('eng').value=list5[u];
//  document.getElementById('tel').value=list6[u];
//  document.getElementById('sci').value =list7[u];
//  document.getElementById('hindi').value=list8[u];

// }

 function selectrow(){
    var addrown=document.getElementById('show');
    
for(var i = 1; i < addrown.rows.length; i++)
{
    addrown.rows[i].onclick = function()
    {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("id").value = this.cells[0].innerHTML;
      document.getElementById("name").value = this.cells[1].innerHTML;
      document.getElementById("maths").value = this.cells[2].innerHTML;
      document.getElementById("soc").value = this.cells[3].innerHTML;
      document.getElementById("eng").value = this.cells[4].innerHTML;
      document.getElementById("tel").value = this.cells[5].innerHTML;
      document.getElementById("sci").value = this.cells[6].innerHTML;
      document.getElementById("hindi").value = this.cells[7].innerHTML;
      document.getElementById("total").value = this.cells[8].innerHTML;
      document.getElementById("grade").value = this.cells[9].innerHTML;

    }
}
            
                // if(confirm("The selected row is deleted To confirm click yes")){
                //     addrown.selectrow(rIndex);
                // // clear input text
             
                // }
          
 }
//  selectrow();
 function deleterow(){
   
     var addrown=document.getElementById('show');
     var av=document.getElementById('id').value;
     selectrow();
     if(rIndex>0)
     {
     if(confirm("Details of id "+av+" will be deleted?") ){

        addrown.deleteRow(rIndex);}
     
    
     

    reset();
    count=count-1;
    c=n;
}
    else{
        alert("No row is selected");
    }
 }
//END
//THE BELOW PART IS NOT NEEDED JUST A TRAIL
//  function getall(){
//     var addrown=document.getElementById('show');
    
//     alert(addrown.rows);
//  }
// function sum(){
//     var formData=readFormData();
//     formData["total"]=formData.maths+formData.soc+formData.eng+formData.tel+formData.sci+formData.hindi;
//     document.getElementById("total").value= formData["total"];
//     formData["grade"]=document.getElementById('id');
// }   

// function readFormData(){
//     var formData={};
//     formData["id"]=parseInt(document.getElementById("id").value);
//     formData["name"]=parseInt(document.getElementById("name").value);
//     formData["maths"]=parseInt(document.getElementById("maths").value);
//     formData["soc"]=parseInt(document.getElementById("soc").value);
//     formData["eng"]=parseInt(document.getElementById("eng").value);
//     formData["tel"]=parseInt(document.getElementById("tel").value);
//     formData["sci"]=parseInt(document.getElementById("sci").value);
//     formData["hindi"]=parseInt(document.getElementById("hindi").value);
//     formData["total"]="";
//     formData["grade"]="";
//     return(formData);
    
// }
var arr=[];
var x=0;
var count=1;
var addrown=document.getElementById('show');
var id=document.getElementById('id').value;
var name=document.getElementById('name').value;
// var maths=parseInt(document.getElementById('maths').value);
// var soc=parseInt(document.getElementById('soc').value);
// var eng=parseInt(document.getElementById('eng').value);
// var tel=parseInt(document.getElementById('tel').value);
// var sci=parseInt(dparseIntocument.getElementById('sci').value);
// var hindi=parseInt(document.getElementById('hindi').value);


function classA(id,name,maths,soc,eng,tel,sci,hindi,total,grade){
    this.id=id;
    this.name=name;
    this.maths=maths;
    this.eng=eng;
    this.tel=tel;
    this.sci=sci;
    this.hindi=hindi;
    this.total=total;
    this.soc=soc;
    this.grade=grade;
    
}
function sum()
{
    var mat,eng,sci,tel,hin,soc,tot,gr;
       mat=parseInt(document.getElementById("maths").value);
       eng=parseInt(document.getElementById("eng").value);
       sci=parseInt(document.getElementById("sci").value);
       soc=parseInt(document.getElementById("soc").value);
       tel=parseInt(document.getElementById("tel").value);
       hin=parseInt(document.getElementById("hindi").value);
       tot=document.getElementById("total");
       tot.value=mat+eng+sci+soc+tel+hin;
       gr=document.getElementById("grade");
       if(tot.value>540){
           gr.value="A+"
    
       }
       else if(tot.value>480){
           gr.value="A"
    
       }
       else if(tot.value>440){
           gr.value="B"
    
       }
       else if(tot.value>380){
           gr.value="C"
    
       }
       else if(tot.value>320){
           gr.value="D"
    
       }
       else if(tot.value>250){
           gr.value="E"
    
       }
       else {
           gr.value="FAIL"
    
       }
    }
var x=0;
function addrow(){
var a=document.getElementById('id').value;
var addrown=document.getElementById('show');
var NewRow=addrown.insertRow(count);
var aa=0;

for(var i=1;i<count;i++){
     if (count>=1){ 
        rIndex=this.rowIndex;
        
        if( a==addrown.rows[i].cells[0].innerHTML){
              aa=1;
               if(confirm("A record already exist Do you want to replace it?")){
arr[i-1].id=document.getElementById('id').value;
arr[i-1].name=document.getElementById('name').value;
arr[i-1].maths=document.getElementById('maths').value;
arr[i-1].soc=document.getElementById('soc').value;
arr[i-1].eng=document.getElementById('eng').value;
arr[i-1].tel=document.getElementById('tel').value;
arr[i-1].sci=document.getElementById('sci').value;
arr[i-1].hindi=document.getElementById('hindi').value;
arr[i-1].total=document.getElementById('total').value;
arr[i-1].grade=document.getElementById('grade').value;


addrown.rows[i].cells[0].innerHTML=arr[i-1].id;
addrown.rows[i].cells[1].innerHTML=arr[i-1].name;
addrown.rows[i].cells[2].innerHTML=arr[i-1].maths;
addrown.rows[i].cells[3].innerHTML=arr[i-1].soc;
addrown.rows[i].cells[4].innerHTML=arr[i-1].eng;
addrown.rows[i].cells[5].innerHTML=arr[i-1].tel;
addrown.rows[i].cells[6].innerHTML=arr[i-1].sci;
addrown.rows[i].cells[7].innerHTML=arr[i-1].hindi;
addrown.rows[i].cells[8].innerHTML=arr[i-1].total;
addrown.rows[i].cells[9].innerHTML=arr[i-1].grade;






}




    }}}

 if(aa==0){
    
 
    arr.push(new classA(document.getElementById('id').value,
    document.getElementById('name').value,
   parseInt(document.getElementById("maths").value),
   parseInt(document.getElementById("eng").value),
    parseInt(document.getElementById("sci").value),
    parseInt(document.getElementById("soc").value),
    parseInt(document.getElementById("tel").value),
    parseInt(document.getElementById("hindi").value),
    document.getElementById("total").value,
    document.getElementById("grade").value,
    ));
    
     var cel1 = NewRow.insertCell(0);
var cel2 = NewRow.insertCell(1);
var cel3 = NewRow.insertCell(2);
var cel4 = NewRow.insertCell(3);
var cel5 = NewRow.insertCell(4);
var cel6 = NewRow.insertCell(5);
var cel7 = NewRow.insertCell(6);
var cel8 = NewRow.insertCell(7);
var cel9 = NewRow.insertCell(8);
var cel10 = NewRow.insertCell(9);



cel1.innerHTML = arr[x].id;
cel2.innerHTML = arr[x].name;
cel3.innerHTML = arr[x].maths;
cel4.innerHTML = arr[x].soc;
cel5.innerHTML = arr[x].eng;
cel6.innerHTML = arr[x].tel;
cel7.innerHTML = arr[x].sci;
cel8.innerHTML = arr[x].hindi;
cel9.innerHTML = arr[x].total;
cel10.innerHTML = arr[x].grade;
count=count+1;
x++;
    }
    selectedrow();
}