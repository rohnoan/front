import React from 'react'

function Card({username='aryans',job='crying'}) {

    //console.log(props);

  return (
    <>
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full" src="https://media.licdn.com/dms/image/v2/D5603AQHjfQV9UeDsBw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728656856223?e=1739404800&v=beta&t=4j-hBiWPHvqsn9DqRHtYvsVT4XZLyo17FQwQkFJbfyE" alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
            <blockquote>
            <p className="text-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit, ab.
            </p>
            </blockquote>
            <figcaption>
            <div>
                {username}
            </div>
            <div>
                {job}
            </div>
            </figcaption>
        </div>
        </figure>
    </>
  )
}

export default Card

