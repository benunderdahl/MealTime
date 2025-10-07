import { View, Text } from 'react-native'
import Details from '../components/Details'

function DetailScreen({ route }) {
    const id = route.params.id
    return <Details id={id} />
}

export default DetailScreen