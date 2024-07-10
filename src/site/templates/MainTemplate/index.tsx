import { Outlet } from 'react-router-dom'
import Title from 'site/components/atoms/Title'

const MainTemplate = () => (
  <section>
    <header className="py-3 z-10 shadow-lg fixed top-0 left-0 w-full bg-white">
      <Title text="Prueba Técnica desarrollador" />
    </header>

    <main className="mt-[52px]">
      <Outlet />
    </main>
  </section>
)

export default MainTemplate
