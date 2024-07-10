import List from 'site/components/molecules/List'
import useGetFilmItems from 'site/hooks/useGetFilmItems'
import { Character } from 'site/types/Character'
import { FilmItemsProps } from 'site/types/FilmItems'
import Card from '../Card'
import GridContent from '../GridContent'

const Characters = ({ items }: FilmItemsProps) => {
  const { data } = useGetFilmItems<Character>(items ?? [])

  return (
    <GridContent>
      <>
        {data.map(
          ({
            name,
            height,
            mass,
            hair_color,
            skin_color,
            eye_color,
            birth_year,
            gender,
          }) => (
            <Card key={name} className="w-full aspect-auto">
              <List
                items={[
                  { title: 'Nombre', text: name },
                  { title: 'Altura', text: height },
                  { title: 'Masa', text: mass },
                  { title: 'Color de cabello', text: hair_color },
                  { title: 'Color de piel', text: skin_color },
                  { title: 'Color de los ojos', text: eye_color },
                  { title: 'Año de nacimiento', text: birth_year },
                  { title: 'Género', text: gender },
                ]}
              />
            </Card>
          ),
        )}
      </>
    </GridContent>
  )
}

export default Characters
