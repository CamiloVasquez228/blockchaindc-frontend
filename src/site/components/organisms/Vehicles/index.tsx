import List from 'site/components/molecules/List'
import useGetFilmItems from 'site/hooks/useGetFilmItems'
import { FilmItemsProps } from 'site/types/FilmItems'
import { Vehicle } from 'site/types/VehicleStarship'
import Card from '../Card'
import GridContent from '../GridContent'

const Vehicles = ({ items }: FilmItemsProps) => {
  const { data } = useGetFilmItems<Vehicle>(items ?? [])

  return (
    <GridContent>
      <>
        {data.map(
          ({
            name,
            model,
            manufacturer,
            cost_in_credits,
            length,
            max_atmosphering_speed,
            crew,
            passengers,
            cargo_capacity,
            consumables,
            vehicle_class,
          }) => (
            <Card key={name} className="w-full aspect-auto">
              <List
                items={[
                  { title: 'Nombre', text: name },
                  { title: 'Modelo', text: model },
                  { title: 'Fabricante', text: manufacturer },
                  { title: 'Costo en créditos', text: cost_in_credits },
                  { title: 'Longitud', text: length },
                  {
                    title: 'Velocidad máxima de atmósfera',
                    text: max_atmosphering_speed,
                  },
                  { title: 'Tripulación', text: crew },
                  { title: 'Pasajeros', text: passengers },
                  { title: 'Capacidad de carga', text: cargo_capacity },
                  { title: 'Consumibles', text: consumables },
                  { title: 'Clase de vehículo', text: vehicle_class },
                ]}
              />
            </Card>
          ),
        )}
      </>
    </GridContent>
  )
}

export default Vehicles
