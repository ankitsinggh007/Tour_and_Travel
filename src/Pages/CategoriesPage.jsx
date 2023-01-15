import React from 'react'
import classes from "./CategoriesPage"
function CategoriesPage() {
  const Old_Banglore=[
        {
          "name": "Tipu Sultan's Summer Palace",
          "description": "An 18th-century palace built by the Mysore ruler Tipu Sultan, known for its intricate carvings and beautiful gardens.",
          "image_link": "https://en.wikipedia.org/wiki/Tipu_Sultan%27s_Summer_Palace#/media/File:Tipu_Sultan%E2%80%99s_Summer_Palace,_Srirangapatna,_Karnataka.jpg"
        },
        {
          "name": "Bangalore Fort",
          "description": "A 16th-century fort built by Kempegowda, the founder of Bangalore. It offers a glimpse into the city's rich history and culture.",
          "image_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Old_Bangalore_Fort%2C_Inside_View.JPG/1920px-Old_Bangalore_Fort%2C_Inside_View.JPG"
        },
        {
          "name": "Bull Temple",
          "description": "A 16th-century temple dedicated to the Hindu god Nandi. It is known for its huge monolithic bull statue, which is carved out of a single rock.",
          "image_link": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bugle_Rock_Kahale.jpg"
        },
        {
          "name": "Gavi Gangadeshwara Cave Temple",
          "description": "An 8th-century cave temple known for its intricate carvings and beautiful architecture.",
          "image_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/A_trident_outside_Gavigangadareswara_temple_in_Bangalore.jpg/800px-A_trident_outside_Gavigangadareswara_temple_in_Bangalore.jpg"
        },
        {
          "name": "Kempegowda Museum",
          "description": "A museum dedicated to the founder of Bangalore, Kempegowda, showcasing the city's history and culture through its exhibits and artifacts.",
          "image_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mayo_hall_cour_complex.jpg/1920px-Mayo_hall_cour_complex.jpg"
        },
        {
          "name": "St. Mary's Basilica",
          "description": "A 19th-century church known for its beautiful architecture and rich history.",
          "image_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/St.Mary%27s_Basilica.jpg/800px-St.Mary%27s_Basilica.jpg"
        },
        {
          "name": "ISKCON Temple",
          "description": "A modern temple dedicated to Lord Krishna and Radharani, known for its beautiful architecture and spiritual atmosphere.",
          "image_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/ISKCON_Banglaore_Temple.jpg/1920px-ISKCON_Banglaore_Temple.jpg"
        },
        {
          "name": "Bugle Rock",
          "description": "A massive rock said to have been used as a watchtower during the 16th century, offering a panoramic view of the city.",
          "image_link": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bugle_Rock_Kahale.jpg"
        },
        {
          "name": "The Heritage Centre & Aerospace Museum",
          "description": "A museum showcasing the history of the Indian aerospace industry and military aviation.",
          "image_link": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/HAL_heritage_centre_and_aerospace_museum_bangalore_7641.JPG/1920px-HAL_heritage_centre_and_aerospace_museum_bangalore_7641.JPG"
        },
    
      
  ];
  
    return (

    <div>

        <div className={classes.container}>

        {
            Old_Banglore.map(()=>{
                return (
                    <div className={classes.Card}>
                        <img src={}/>
                        <span className={classes.icon}></span>
                        <span className={classes.Price}></span>
                        <span className={classes.Addrress}></span>
                        <span className={classes.BookNow}></span>
                    </div>
                )

            })
        }

        </div>



    </div>
  )
}

export default CategoriesPage