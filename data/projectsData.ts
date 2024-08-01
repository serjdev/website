interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Dr Servizi',
    description: `This project involved creating a simple presentation website for a local business. The primary goal was to showcase the various services offered by the business and to attract new clients.`,
    imgSrc: '/static/images/dr-servizi.png',
    href: 'https://servizidr.it',
  },
  {
    title: 'Gio Pitture',
    description: `This project involved integrating a Design with content from CMS. This way the site owner can always add new photos or services and edit old ones. To achieve this I used DatoCms with next.js`,
    imgSrc: '/static/images/gio-pitture.png',
    href: 'https://giopitture.it',
  },
]

export default projectsData
