let mobilebtn = document.getElementById('mobile_btn')
let previmgbtn = document.getElementById('prev_img')
let nextimgbtn = document.getElementById('next_img')
let currentimg = 1
let imgs_data = {
    img1: {project: 'Lean Product Roadmap' , date: '2019 project' , desc:'Brand naming & guidelines'},
    img2: {project: 'New Majestic Hotel' , date: '2018 Project' , desc:'Brand identity & merchandise'},
    img3: {project: 'Crypto Dashboard' , date: '2016 Project' , desc:'Brand identity & web design'}
}

mobilebtn.addEventListener('click',togglemenu)
previmgbtn.addEventListener('click',prev)
nextimgbtn.addEventListener('click',next)

function togglemenu(){
    let navmenu = document.getElementById('nav_container')
    mobilebtn.classList.toggle('opened_menu_icon')
    navmenu.classList.toggle('active')
}
// falta remover as classes adicionadas quando a tela aumentar para tablet
function next(){
    if(currentimg == 1){
        updateimg(imgs_data.img2,'img_2')
        currentimg = 2
        return
    }
    if(currentimg == 2){
        updateimg(imgs_data.img3,'img_3')
        currentimg = 3
        return
    }
    if(currentimg == 3){
        updateimg(imgs_data.img1,'img_1')
        currentimg = 1
        return
    }

}
function prev(){
    if(currentimg == 1){
        updateimg(imgs_data.img3,'img_3')
        currentimg = 3
        return
    }
    if(currentimg == 2){
        updateimg(imgs_data.img1,'img_1')
        currentimg = 1
        return
    }
    if(currentimg == 3){
        updateimg(imgs_data.img2,'img_2')
        currentimg = 2
        return
    }
    
}
function updateimg(img,imgclass){
    let imgcontainer = document.getElementById('slide_img')
    let imgname = document.getElementById('project_name')
    let imgdate = document.getElementById('project_date')
    let imgdesc = document.getElementById('project_desc')
    imgcontainer.className = imgclass
    imgname.innerHTML = img.project
    imgdate.innerHTML = img.date
    imgdesc.innerHTML = img.desc
}




