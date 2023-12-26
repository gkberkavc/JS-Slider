//arabaların bilgilerini models adlı array da tutuyorum
let models = [
{
   name:"bmw",
   image : "images/bmw.jpg",
   link :"#"
},
{
    name:"mercedes",
    image : "images/mercedes.jpg",
    link :"#"
 },
 {
    name:"astonmartin",
    image : "images/astonmartin.jpg",
    link :"#"
 },
 {
    name:"ford",
    image : "images/ford.jpg",
    link :"#"
 },
 {
    name:"nissan",
    image : "images/nissan.jpg",
    link :"#"
 }
]

// models içindeki arabaların index sayısı
let index = 0;

//models array ının uzunluğu
let slideCount = models.length;

// slaytın ayarlarını tutuyor. örneğin kaç saniyede bir yeni resme geçiceği gibi
let settings = {duration :"2500", random : false}

// daha sonra kullanmak için globalde tanımladık
let interval;

// program çalıştığında init fonksiyonu settings bilgilerini alarak çalışacak
init(settings);

//program çalıştığında çalışacak fonksiyonun içeriği
function init (settings)
{
    // bir önceki resimin aynısı random olarak gelmesin diye prev tanımladık
    let prev;

    //setInterval bir zamanlayıcı fonksiyon
    interval = setInterval(function()
    {
         if(settings.random)
         {
            do{
                index = Math.floor(Math.random() * slideCount);
            }while(index == prev)
            prev = index;
         }else
         {
           if(slideCount == index + 1)
           {
             index = -1;
           }
           showSlide(index);
           index++;
         }
         showSlide(index);
    },settings.duration)
}

//slayt fonksiyonu
function showSlide(i)
{
    index = i;
    if(i<0){
        index = slideCount -1 ;
    }
    if(i>=slideCount){
        index = 0;
    }

    //classlara değer atıyoruz
    document.querySelector(".card-link").setAttribute("href",models[index].link);
    document.querySelector(".card-title").textContent = models[index].name;
    document.querySelector(".card-img-top").setAttribute("src",models[index].image);
}


// sol oka bastığında bir önceki resme geçer
document.querySelector('.fa-solid.fa-arrow-left').addEventListener("click",function(){
    
    index--;
    showSlide(index);
    
});

// sağ oka bastığında bir sonraki resme geçer
document.querySelector('.fa-solid.fa-arrow-right').addEventListener("click",function(){
    
    index++;
    showSlide(index);
    
});

//mouse ile okların üstüne geldiğimizde zamanlayıcıyı durduruyor yani slayttaki resimler değişmiyor
document.querySelectorAll(".fa-solid").forEach(function(item){
    item.addEventListener("mouseenter",function(){
        clearInterval(interval)
    })
})

//mouse ile okların üstünden ayrıldığımızda init fonksiyonunu tekrar çalıştırıyor resimler değişmeye devam ediyor
document.querySelectorAll(".fa-solid").forEach(function(item){
    item.addEventListener("mouseleave",function(){
        init(settings);
    })
})





