import { useParams } from 'react-router-dom'
import Accordion from 'site/components/organisms/Accordion'
import Characters from 'site/components/organisms/Characters'
import FilmInformation from 'site/components/organisms/FilmInformation'
import Species from 'site/components/organisms/Species'
import Starships from 'site/components/organisms/Starships'
import Tabs from 'site/components/organisms/Tabs'
import Vehicles from 'site/components/organisms/Vehicles'
import useBreakpoint from 'site/hooks/useBreakpoint'
import useGetFilm from 'site/hooks/useGetFilm'
import ContentTemplate from 'site/templates/ContentTemplate'

const Film = () => {
  const { id = '' } = useParams()

  const { data } = useGetFilm(id)

  const { isMobile } = useBreakpoint()

  const items = [
    {
      title: 'Información',
      content: <FilmInformation data={data} />,
    },
    {
      title: 'Personajes',
      content: <Characters items={data?.characters} />,
    },
    {
      title: 'Naves estelares',
      content: <Starships items={data?.starships} />,
    },
    {
      title: 'Vehículos',
      content: <Vehicles items={data?.vehicles} />,
    },
    {
      title: 'Especies',
      content: <Species items={data?.species} />,
    },
  ]

  return (
    <ContentTemplate title={data?.title ?? ''}>
      {isMobile ? <Accordion items={items} /> : <Tabs items={items} />}
    </ContentTemplate>
  )
}

export default Film
