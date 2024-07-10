import List from 'site/components/molecules/List'
import useGetFilmItems from 'site/hooks/useGetFilmItems'
import { FilmItemsProps } from 'site/types/FilmItems'
import { Specie } from 'site/types/Specie'
import Card from '../Card'
import GridContent from '../GridContent'

const Species = ({ items }: FilmItemsProps) => {
  const { data } = useGetFilmItems<Specie>(items ?? [])

  return (
    <GridContent>
      <>
        {data.map(
          ({
            name,
            classification,
            designation,
            average_height,
            skin_colors,
            hair_colors,
            eye_colors,
            average_lifespan,
            language,
          }) => (
            <Card key={name} className="w-full aspect-auto">
              <List
                items={[
                  { title: 'Nombre', text: name },
                  { title: 'Clasificación', text: classification },
                  { title: 'Designación', text: designation },
                  { title: 'Altura media', text: average_height },
                  { title: 'Colores de la piel', text: skin_colors },
                  { title: 'Colores del cabello', text: hair_colors },
                  { title: 'Colores de los ojos', text: eye_colors },
                  { title: 'Promedio de vida', text: average_lifespan },
                  { title: 'Idioma', text: language },
                ]}
              />
            </Card>
          ),
        )}
      </>
    </GridContent>
  )
}

export default Species
