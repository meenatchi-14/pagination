
const textConent=document.querySelector("p");
textConent.innerText =
  "Pagination is the method of separating digital content into different pages on a website. Users can navigate between these pages by clicking below Buttons.";
  
  let content_div=document.querySelector("div");
  let table_div=document.querySelector("div");
  let table_tag=document.querySelector("table");
  let table_body=document.querySelector("tbody");
  let table_head=document.querySelector("thead");
  let table_tr=document.querySelector("tr");
  let ul_list=document.querySelector("ul");
  let btn_pre=document.querySelector("btn-pre")
  let table_th1=document.querySelector("th.id");
  let table_th2=document.querySelector("th.Name");
  let table_th3=document.querySelector("th.Email");
  paginationData();
  async function paginationData(){
    let responsive=await fetch("data.json");
    let JsonFormat=await responsive.json();
 //console.log(JsonFormat);
  let idArr=[];
  let nameArr=[];
  let emailArr=[];
  for (let i=0;i<100;i++){
    let id=JsonFormat[i].id;
    idArr.push(id);
    // console.log(id);
    let name=JsonFormat[i].name;
    nameArr.push(name);
    // console.log(name);
    let mail=JsonFormat[i].email;
    emailArr.push(mail);
    // console.log(mail)
    
  }
//previous button initial value
let start_value=0;
let addEvent_pre=document.getElementById("event-btn-pre");
addEvent_pre.addEventListener("click",()=>{
if(start_value>0){
  start_value=start_value-10;
  display_contents(start_value);
}else{
  alert("You are already at the beginning of the First page!");
}
});

//frist button
let addEvent_1 = document.getElementById("event-btn-1");
    addEvent_1.addEventListener("click", () => {
      start_value = 0;
      display_contents(start_value);
    });
    //2nd button
    let addEvent_2nd = document.getElementById("event-btn-2");
    addEvent_2nd.addEventListener("click", () => {
      start_value = 10;
      display_contents(start_value);
    });
    
    // 3rd button
    let addEvent_3rd = document.getElementById("event-btn-3");
    addEvent_3rd.addEventListener("click", () => {
      start_value = 20;
      display_contents(start_value);
    });
    
    // 4th button
    let addEvent_4th = document.getElementById("event-btn-4");
    addEvent_4th.addEventListener("click", () => {
      start_value = 30;
      display_contents(start_value);
    });
   
    // 5th button
    let addEvent_5th = document.getElementById("event-btn-5");
    addEvent_5th.addEventListener("click", () => {
      start_value = 40;
      display_contents(start_value);
    });
    //6th button
    let addEvent_6th = document.getElementById("event-btn-6");
    addEvent_6th.addEventListener("click", () => {
      start_value = 50;
      display_contents(start_value);
    });
     // 7th button
     let addEvent_7th = document.getElementById("event-btn-7");
     addEvent_7th.addEventListener("click", () => {
       start_value = 60;
       display_contents(start_value);
     });
      // 8th button
    let addEvent_8th = document.getElementById("event-btn-8");
    addEvent_8th.addEventListener("click", () => {
      start_value = 70;
      display_contents(start_value);
    });
     // 9th button...
     let addEvent_9th = document.getElementById("event-btn-9");
     addEvent_9th.addEventListener("click", () => {
       start_value = 80;
       display_contents(start_value);
     });
    // 10th button...
    let addEvent_last = document.getElementById("event-btn-10");
    addEvent_last.addEventListener("click", () => {
      start_value = 90;
      display_contents(start_value);
    });
    // Next Button
let addEvent_next = document.getElementById("event-btn-next");
addEvent_next.addEventListener("click", () => {
  if (start_value < 100 && start_value >= 0) {
    start_value = start_value + 10;
    display_contents(start_value);
  } else {
    alert("You are already at the Last page!");
  }
});

    function display_contents(Number_of_items){
      let Table_body=document.getElementById("t-body");
      for(let i=Number_of_items;i<Number_of_items+10;i++){
        eventButtonFirst(`${idArr[i]}`, `${nameArr[i]}`,`${emailArr[i]}`);

        function eventButtonFirst(idData,nameData, emailData ) {
          let row = document.createElement("tr");
          let td1 = document.createElement("td");
          td1.innerHTML = `${idData}`;
          let td2 = document.createElement("td");
          td2.innerHTML = `${nameData}`;
          let td3 = document.createElement("td");
          td3.innerHTML = `${emailData}`;
          table_body.append(row);
          row.append(td1, td2, td3);
        }
      }
    }
    display_contents(start_value);
}

//appending
document.body.append(container);
container.append(maindiv);
maindiv.append(title, description, content_div, table_div);
content_div.append(navbar);
navbar.append(ul_list);
ul_list.append(
  list_pre,
  list_1,
  list_2,
  list_3,
  list_4,
  list_5,
  list_6,
  list_7,
  list_8,
  list_9,
  list_10,
  list_next,
);

//----------------------------------------------------------------

table_div.append(table_tag);
table_tag.append(table_head, table_body);
table_head.append(table_tr);
table_body.append(table_tr);

table_tr.append(table_th1, table_th2, table_th3);




  
  