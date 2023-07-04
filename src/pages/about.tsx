import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
 
import { montserratAlternates } from '../app/utils/fonts';

import { Button } from '../app/components/Button/Button';
import Hero from '../app/components/Hero/Hero';

const pageContent = <>
  <h1>Your Daily <span className="block red">Podcast</span></h1>
  <p>We cover all kinds of categories and
a weekly special guest.</p>
  <Button><span>Subscribe</span></Button>
</>

const About: NextPageWithLayout = () => {
  return <Hero>{pageContent}</Hero>
}
 
About.getLayout = function getLayout(page: ReactElement) {
  return (
    <main className={montserratAlternates.className}>{page}</main>
  )
}
 
export default About