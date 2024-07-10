import Card from 'site/components/organisms/Card'
import useGetFilms from 'site/hooks/useGetFilms'
import ContentTemplate from 'site/templates/ContentTemplate'

const PartOne = () => {
  const { data } = useGetFilms()

  return (
    <ContentTemplate title="The Star Wars API">
      <article className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center m-auto w-4/5">
        {data?.map(({ title, id }) => (
          <Card
            linkTo={`film/${id}`}
            key={title}
            className="w-full"
            text={title}
          />
        ))}
      </article>
    </ContentTemplate>
  )
}

export default PartOne
