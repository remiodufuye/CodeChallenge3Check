        document.addEventListener('DOMContentLoaded', () => {
        console.log('%c DOM Content Loaded and Parsed!', 'color: magenta') 
        getform().addEventListener("submit" , processForm)
        let imageId = 4185 //Enter the id from the fetched image here
        const imageURL = `https://randopic.herokuapp.com/images/${imageId}`
        const likeURL = `https://randopic.herokuapp.com/likes/`
        const commentsURL = `https://randopic.herokuapp.com/comments/`

        function getImage() {
          fetch(`https://randopic.herokuapp.com/images/${imageId}`)
          .then(response => response.json())
          .then(data => renderImage(data))
        }   

        getImage()

      }) 
 
      function renderImage(image) {
        
          let imageCard  = document.getElementById('image_card')
          let imageEl = document.getElementById('image')
          imageEl.src = image.url
        
          let imageTitle = document.getElementById('name')
          imageTitle.innerText = image.name 

          let imageLikesP = document.getElementById('likes')
          imageLikesP.innerText = image.like_count

          let likeButton = document.getElementById('like_button')
     
          likeButton.addEventListener("click",() => increaseLikes(imageLikesP))

          console.log(image)

      } 


      function increaseLikes(imageLikesP) {
      console.log("Do You Like Me !!!")
      let likesCount = parseInt(imageLikesP.innerText)
      const configOptions = {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
           } ,
        body: JSON.stringify({image_id:4185})
        
      }
      fetch("https://randopic.herokuapp.com/likes/",configOptions)
    
      }   
     
      /* page is not being updated until refresh  .. review above later */ 


       function getform() {return document.getElementById("comment_form")}

       function processForm(e) { 

       

      }

