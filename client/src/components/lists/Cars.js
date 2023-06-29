import { useQuery } from '@apollo/client'
import { GET_CARS } from '../../queries'
import { List } from 'antd'
import Car from '../listItems/Car'

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const Cars = () => {
  const styles = getStyles()

  const { loading, error, data } = useQuery(GET_CARS)
  if (loading) return 'Loading...'
  if (error) return `Error! ${error.message}`

  console.log('data', data)

  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.cars.map(({ id, year, model }) => (
        <List.Item key={id}>
          <Car id={id} firstName={year} lastName={model} />
        </List.Item>
      ))}
    </List>
  )
}

export default Cars
