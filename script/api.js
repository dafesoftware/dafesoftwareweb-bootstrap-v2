

let blogInfo=[];
let user=''
function mediumApi() {
const baseUrl="dafeosftware.medium.com";
const headers= new Headers();
const token="";

headers.append('Authorization','Bearer '+token)
headers.append('Content-Type','application/json')

    fetch(baseUrl,{ method:"GET",headers })
    .then((res)=>{
      populateBlog(res.data);
    }).catch(err=>{
        console.log(err)
    })
}


function populateBlog(data=[]){
    const blogDiv=document.querySelector('#blog');

const content=''
data.forEach(blogInfo=>{
  blogContent +=`<div class="col-lg-3 col-md-8 col-10 m-auto">
    <picture class="col-12">
        <img src="${blogInfo.imgUrl}" class="col-12" alt="">
    </picture>
    <div class="grey p-2">
        <p class="rounded-pill  light-grey2  p-1  d-flex justify-content-center col-lg-8  text-blue">
           ${data.name}
    </p>
    <strong class="fs-6">
    IT Outsourcing Services and Reasons  to 
    choose Them
    </strong>
    <p>
${data.discription}
    </p>
    <div class="d-flex text-blue justify-content-between">
    <p>By Sonia Oghenetega</p>
    <p> Aug,8 2023</p>
    </div>
    
    </div>
    </div>`
})

blogDiv.innerHTML=content;


}

mediumApi();