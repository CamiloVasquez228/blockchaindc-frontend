interface BaseProps {
  name: string
  model: string
  manufacturer: string
  cost_in_credits: string
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
}

export interface Starship extends BaseProps {
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
}

export interface Vehicle extends BaseProps {
  vehicle_class: string
}
