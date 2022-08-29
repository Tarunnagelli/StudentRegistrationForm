
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


var arr=[];
var x=0;
var count=1;
var addrown=document.getElementById('show');
var id=document.getElementById('id').value;
var name=document.getElementById('name').value;



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
