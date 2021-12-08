import { useEffect, useState } from 'react'

const FoodBlogCart = () => {
  const [imagesMap, setImagesMap] = useState<{pizzaImg: string | null, userImg: string | null}>({ pizzaImg: null, userImg: null })

  useEffect(() => {
    const fetchImages = async () => {
      await new Promise(r => setTimeout(r, 3000))

      setImagesMap({
        pizzaImg: "https://images.unsplash.com/photo-1594398028856-f253a046f417?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
        userImg: "https://i.ibb.co/JzNYHV9/image-1.jpg"
      })
    }

    fetchImages()
  }, [])

  return (
    <div className={imagesMap.pizzaImg ? 'card' : 'card card--skeleton'}>
      <div className="img-cont">
        {imagesMap.pizzaImg ? <img
          className="img"
          src={imagesMap.pizzaImg}
          alt="food"
        /> : null}
      </div>
      <div className="user-info">
        <div className="user-avatar-cont">
          {imagesMap.userImg ? <img
            src={imagesMap.userImg}
            alt="user"
            className="user-avatar-img"
          /> : null}
        </div>
        <div className="user-details">
          <div className="user-name"><span>Natalia Rodrigues</span></div>
          <div className="user-profession card--skeleton"><span>Food Blogger</span></div>
        </div>
      </div>
    </div>
  )
}

export default FoodBlogCart