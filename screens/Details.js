import { Text, View } from "react-native";

const Details = ({route}) => {
  
  return (
    <View>
      <Text>{route.params.data.name}</Text>
    </View>
  );

 
}

export default Details

