import { View, Text, Image } from 'react-native'
import { RectButton } from './Button';
import { assets, COLORS, SIZES, SHADOWS, FONTS } from '../constants';


export const SubView = () => {
    return (
        <View style={{
            width: '100%',
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between',

        }}>
            <People />
            <EndDate />
        </View>
        
    )
}

export const EthPrice = ({price}) => {
    return (
        <View style={{
            margin: 10,
        }}>
            <Text>$ {price}</Text>
        </View>
    )
}

export const ImageCmp = ({imgUrl, index}) => {
    return (
        <Image
            source={imgUrl} 
            resizeMode= 'contain'
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font
            }}

            />
    )
}

export const People = () => {
    return (
        <View style={{
            flexDirection: 'row'
        }}>
            {[assets.person01, assets.person02, assets.person03, assets.person04].map(
                (imgUrl, index) => (
                    <ImageCmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
                ))}
        </View>
    )
}

export const EndDate = () => {
    return (
        <View style={{
            paddingHorizontal: SIZES.font,
            paddingRight: SIZES.base,
            backgroundColor: COLORS.white,
            justifyContent: 'center',
            alignItems: 'center',
            ...SHADOWS.light,
            elevation: 1,
            maxWidth: '50%',
        }}>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.small,
                color: COLORS.primary
            }}>EndDate</Text>
              <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.medium,
                color: COLORS.primary
            }}>12hr 30min</Text>
        </View>
    )
}

export const NEFTitle = ({titleName, subTitle}) => {
    return (
        <View>
            <Text>{titleName}</Text>
            <Text>{subTitle}</Text>
        </View>
    )
}
