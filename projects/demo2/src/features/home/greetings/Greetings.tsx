import { Card } from "@core/components/card/Card"

type Props = {
  readonly username?: string;
}

export const Greetings: React.FC<Props> = ({ username }) => {
  username = 'Bitxoooooooooooo'
  return (
    <Card >
      {
        username
          ? <h3>Hello {username}</h3>
          : <h3>Hello Capuyo</h3>
      }
    </Card>
  )
}
