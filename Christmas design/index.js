const text = "Merry Christmas !!!!!!!";
    const textOutput = document.getElementById('text-output');
    let index = 0;
  
    function typeLetterByLetter() {
      if (index < text.length) {
        textOutput.textContent += text[index];
        index++;
        setTimeout(typeLetterByLetter, 120);
      }
    }
  
    // Start typing effect
    typeLetterByLetter();
    


    setTimeout(() => {
        const image = document.getElementById('delayedImage');
        
        image.classList.add('visible');
        
      }, 5000);
      

      
    setTimeout(() => {
      
        const image2 = document.getElementById('delayedImage2');
        
        
        image2.classList.add('visible');
        
      }, 3000);
      




      const observer = new IntersectionObserver ((entries)=>{

        entries.forEach((entry) => {
    
            console.log(entry)
            
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
            // else{
            //     entry.target.classList.remove('show');
            // }
    
        });
    });
    
    
    
    
    
    const hiddenElemnt =document.querySelectorAll('.hidden');
    const hiddenElemnt2 =document.querySelectorAll('.hid');
    
    
    hiddenElemnt.forEach((el) => observer.observe(el));
    
    hiddenElemnt2.forEach((el) => observer.observe(el));
    