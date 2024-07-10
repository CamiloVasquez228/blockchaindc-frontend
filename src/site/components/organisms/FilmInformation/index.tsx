import List from 'site/components/molecules/List'
import { FilmInformationProps } from './FilmInformation'

const FilmInformation = ({ data }: FilmInformationProps) => (
  <article>
    <List
      items={[
        {
          title: 'ID episodio',
          text: `${data?.episode_id}`,
        },
        {
          title: 'Resumen',
          text: `${data?.opening_crawl}`,
        },
        {
          title: 'Director',
          text: `${data?.director}`,
        },
        {
          title: 'Productor',
          text: `${data?.producer}`,
        },
        {
          title: 'Fecha de lanzamiento',
          text: `${data?.release_date}`,
        },
      ]}
    />
  </article>
)

export default FilmInformation
