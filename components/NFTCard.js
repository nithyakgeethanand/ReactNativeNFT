import { View, Image, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { COLORS, SIZES, SHADOWS, assets } from "../constants";
import { RectButton, CircleButton } from './Button';
import { EthPrice, NEFTitle, SubView } from './SubView';

const NFTCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <View style={{
      backgroundColor: COLORS.white,
      borderRadius: SIZES.font,
      marginBottom: SIZES.extraLarge,
      margin: SIZES.base,
      ...SHADOWS.dark
    }}>
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode='cover'
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={assets.heart} top={10} right={10} />
      </View>
      <SubView />
      <View style={{ width: "100%", padding: SIZES.font }}>
        <NEFTitle titleName={data.name} subTitle = {data.creator}/>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
          <EthPrice price={data.price}/>
          <RectButton handlePress={() => navigation.navigate('Details',{data})}/>
        </View>
      </View>
      
      


    </View>
  )
}

export default NFTCard