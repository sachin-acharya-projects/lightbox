function lightbox_init(type, settings){
    const singleImages = document.querySelectorAll('[data-single=true]');
    const lightbox_dim = document.createElement('div');
    if(type == 'single' || type == undefined){
        lightbox_dim.classList.add('lightbox_dim');
        lightbox_dim.classList.add('light-single');
    }else{
        lightbox_dim.classList.add('lightbox_dim');
        lightbox_dim.classList.add('light-multi');
    }
    document.body.appendChild(lightbox_dim);
    const lightbox_preview = document.createElement('div');
    lightbox_preview.classList.add('lightbox_preview');
    lightbox_dim.appendChild(lightbox_preview);
    const lightbox_img = document.createElement('img');
    lightbox_img.classList.add('lightbox_img');
    lightbox_preview.appendChild(lightbox_img);

    singleImages.forEach(img=>{
        img.addEventListener('click', ()=>{
            lightbox_dim.classList.add('lightbox_dim_open');
            lightbox_preview.classList.add('lightbox_preview_open');
            lightbox_img.src = img.src;
        })
    })


    //Disable Appearance
    const lightbox_div = document.querySelector('.lightbox_dim');
    const lightbox_img_div = document.querySelector('.lightbox_preview');
    lightbox_div.addEventListener('click', (e)=>{
        if(!e.target.classList.contains('lightbox_img')){
            lightbox_div.classList.remove('lightbox_dim_open');
            lightbox_img_div.classList.remove('lightbox_preview_open');
        }
    })
}