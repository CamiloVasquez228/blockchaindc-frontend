import { ChangeEvent, useState } from 'react'
import Button from 'site/components/atoms/Button'
import Input from 'site/components/atoms/Input'
import usePost from 'site/hooks/usePost'
import ContentTemplate from 'site/templates/ContentTemplate'
import { VITE_API_BASE_URL_PARTE_2 } from 'site/utils/constants/environments.constants'

interface LoginData {
  email: string
  password: string
}

const PartTwo = () => {
  const [user, setUser] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const { mutate } = usePost<LoginData, string>({
    mutationKey: ['Login'],
    route: `${VITE_API_BASE_URL_PARTE_2}/auth/login`,
  })

  const handleSubmit = () => {
    if (!user || !password) {
      setError('Los campos son obligatorios')

      return
    }

    fetch(`${VITE_API_BASE_URL_PARTE_2}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: user, password }),
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err))

    mutate({ email: user, password })
  }

  const handleChange = (
    event: ChangeEvent<HTMLInputElement>,
    type: 'user' | 'password',
  ) => {
    setError('')

    const value = event.target.value

    type === 'user' ? setUser(value) : setPassword(value)
  }

  return (
    <ContentTemplate title="Iniciar sesión">
      <>
        <form className="w-80 m-auto flex flex-col gap-5">
          <Input
            type="text"
            placeholder="Ingrese el usuario"
            value={user}
            onChange={(e) => handleChange(e, 'user')}
          />

          <Input
            type="password"
            placeholder="Ingrese la contraseña"
            value={password}
            onChange={(e) => handleChange(e, 'password')}
          />

          <Button type="button" onClick={handleSubmit}>
            Iniciar sesión
          </Button>
        </form>

        <p className="text-center text-red-600 font-semibold mt-2">{error}</p>
      </>
    </ContentTemplate>
  )
}

export default PartTwo
