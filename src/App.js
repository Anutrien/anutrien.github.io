import React from 'react'
import Helmet from 'react-helmet'
import data from './data.json'
import 'normalize.css/normalize.css'
import './Styles/app.styl'

import Header from './Header'

import Hero from './Sections/Hero'
import AboutUs from './Sections/AboutUs'
import Services from './Sections/Services'
import Testimonials from './Sections/Testimonials'
import Social from './Sections/Social'

function App(){
  return (
    <section>
      <Helmet
        title={data.title}
        meta={[
          { name: 'description', content: data.description },
          { name: 'keywords', content: data.keywords },
          { name: 'author', content: data.author },

          { itemprop: 'name', content: data.nameGoogle },
          { itemprop: 'description', content: data.descriptionGoogle },
          { itemprop: 'image', content: data.imageGoogle },

          { name: 'twitter:card', content: data.cardTwitter },
          { name: 'twitter:site', content: data.siteTwitter },
          { name: 'twitter:creator', content: data.creatorTwitter },
          { name: 'twitter:title', content: data.titleTwitter },
          { name: 'twitter:description', content: data.descriptionTwitter },
          { name: 'twitter:image', content: data.imageTwitter },

          { property: 'og:title', content: data.titleFacebook },
          { property: 'og:site_name', content: data.site_nameFacebook },
          { property: 'og:type', content: data.typeFacebook },
          { property: 'og:url', content: data.urlFacebook },
          { property: 'og:description', content: data.descriptionFacebook },
          { property: 'og:image', content: data.imageFacebook },
          { property: 'og:site_name', content: data.site_nameFacebook },
          { property: 'og:app_id', content: data.app_idFacebook },

          { name: 'viewport', content: 'width=device-width, maximum-scale=1' },
          { name: 'apple-itunes-app', content: 'app-id=885856031' },
        ]}
        link={[
          { href: 'https://fonts.googleapis.com/css?family=Work+Sans:300,400', rel: 'stylesheet' },
          { href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css', rel: 'stylesheet'}
        ]}
      />

      <Header/>
      <Hero {...data} />
      <AboutUs {...data} />
      <Services {...data} />
      <Testimonials {...data} />
      <Social {...data} />
    </section>
  )
}

export default App;
