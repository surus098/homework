(function(){
    
    document.addEventListener('click', burgerInet)

    function burgerInet(e) {
        
        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (!document.body.classList.contains('body--opened-menu')){
            document.body.classList.add('body--opened-menu')
        }else{
            document.body.classList.remove('body--opened-menu')
        }
    }
})()