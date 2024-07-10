import Card from 'site/components/organisms/Card'

const Home = () => (
  <section className="fixed sm:relative sm:top-0 sm:py-10 sm:min-h-[calc(100vh-52px)] top-[52px] left-0 bottom-0 right-0 gap-10 flex-col flexCenter sm:flex-row">
    <Card linkTo="/parte-1" text="Parte 1" />

    <Card linkTo="/parte-2" text="Parte 2" />
  </section>
)

export default Home
