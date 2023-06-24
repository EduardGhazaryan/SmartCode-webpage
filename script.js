let si = document.querySelector('.sign-in')
let bg = document.querySelector('.bg')
let x = document.querySelector('.faxm')
let arka=document.querySelector('.arka')
let onl = document.querySelector('.online')
let body = document.querySelector('body')
let bar =document.querySelector('.bar')
let aside=document.querySelector('.asidemenu')

function funcs(){
    
    bg.style.top =` ${this.scrollY}px`
    body.style.overflow = 'hidden'
    
}
x.addEventListener('click',function(){
    bg.style.top = '-1001px'
    body.style.overflow = ''
    
})
// window.addEventListener('scroll', () => {
//     document.body.style.setProperty('--scroll-y', `${window.scrollY}px`);
    
//   });
window.addEventListener('scroll',e=>{
    document.body.style += `--scrollTop: ${this.scrollY}px`
})
let menux = document.querySelector('.menux')
bar.addEventListener('click',function(){
    bar.classList.add('menux')
    menux.style.display='inline-block'
    aside.style.marginRight = '0px'
})
menux.addEventListener('click',function(){
    bar.classList.remove('menux')
    menux.style.display='none'
    aside.style.marginRight = '-1000px'
})
let xx=document.querySelector
arka.addEventListener('click',function(){
    arka.classList.add('active')
    onl.classList.remove('active')
    
})
onl.addEventListener('click',function(){
    onl.classList.add('active')
    arka.classList.remove('active')
})
let act1 = document.querySelector('.act1')
let act2 = document.querySelector('.act2')
let act3 = document.querySelector('.act3')
let ltwo=document.querySelector('.listtwo')
let lone=document.querySelector('.listone')
let lthree=document.querySelector('.listthree')
act1.addEventListener('click',function(){
    act1.style.backgroundColor = '#f3b01b'
    act2.style.backgroundColor = ''
    act3.style.backgroundColor = ''
    lone.style.display = 'flex'
    ltwo.style.display = 'none'
    lthree.style.display = 'none'
})
act2.addEventListener('click',function(){
    act1.style.backgroundColor = 'white'
    act2.style.backgroundColor = '#f3b01b'
    act3.style.backgroundColor = ''
    lone.style.display = 'none'
    ltwo.style.display = 'flex'
    lthree.style.display = 'none'
})
act3.addEventListener('click',function(){
    act1.style.backgroundColor = 'white'
    act2.style.backgroundColor = ''
    act3.style.backgroundColor = '#f3b01b'
    lone.style.display = 'none'
    ltwo.style.display = 'none'
    lthree.style.display = 'flex'
})

window.onscroll  =function(){myFunction()}

function myFunction(){
    if(document.documentElement.scrollTop > 1){
        document.getElementById('myP').style.boxShadow = '0px 6px 17px gray'
    }
    else{
        document.getElementById('myP').style.boxShadow = ''
    }
}
let video = document.querySelector('.video')
let videodiv=document.querySelector('.videodiv')
let vid=document.querySelector('video')
let vidx=document.querySelector('.xfam')
video.addEventListener('click',function(){
    videodiv.style.top = '0'
    body.style.overflow = 'hidden'
})
vidx.addEventListener('click',function(){
    videodiv.style.top = '-1000px'
    body.style.overflow = ''
})


let card=document.querySelector('.card')
let footer =document.querySelector('footer')
let payx = document.querySelector('.payx')
payx.addEventListener('click',function(){
    card.style.top ='-5000px'
    body.style.overflow = ''
})
function idramFunc(){
    card.style.top =` ${this.scrollY}px`
    body.style.overflow = 'hidden'
}



let infop =document.querySelectorAll('.infop')
let infotext = document.querySelectorAll('.infotext')

infop.forEach((item)=>{
    item.addEventListener('click',function(){
        let activeinfop = item
        let infoid=activeinfop.getAttribute('data-tab')
        let ret=document.querySelector(infoid)
        if(! activeinfop.classList.contains('activeinf')){
            infop.forEach((items)=>{
                items.classList.remove('activeinf')
            })
    
            infotext.forEach((e)=>{
                e.classList.remove('infotextsec')
            })
    
            activeinfop.classList.add('activeinf');
            ret.classList.add('infotextsec')
        }else{
            infop.forEach((items)=>{
                items.classList.remove('activeinf')
            })
    
            infotext.forEach((e)=>{
                e.classList.remove('infotextsec')
            })
        }
        
    })
})