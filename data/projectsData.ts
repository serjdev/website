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
]

export default projectsData
