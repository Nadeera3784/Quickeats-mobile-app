import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, Button, Platform} from 'react-native';
import CustomTextInput from '../../components/CustomTextInput';
import colors from '../../constants/colors';
import { ScrollView } from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';

const SearchScreen = props =>{
    const [input, setInput] = useState('');
    const onExplorePress = () =>{
        props.navigation.navigate("Explore")
    }
    const onSearchSubmit = (input) =>{
        if(input.length <= 0) return;
        props.navigation.navigate('SearchResults', {
            searchQuery: input
        })
    }
    
    return(
        <SafeAreaView style = {styles.screen}>
            <View style = {styles.textInputContainer}>
                <CustomTextInput
                    placeholder = 'Search meals by title or categories' 
                    onSubmit = {onSearchSubmit} 
                    inputStyle = {styles.textInput}
                    cancelTextStyle = {{color: 'black'}}
                />
            </View>
            <ScrollView contentContainerStyle = {styles.contentContainer}>
                <Image resizeMode = "contain" style = {styles.image} source = {require('../../assets/images/searchScreenImage.png')}/>
                <Text style = {styles.textInstruction}>Try discovering new meals with search or explore meals based on parameters carefully selected by us.</Text>
                <CustomButton onPress = {onExplorePress}>Explore</CustomButton>
            </ScrollView>
        </SafeAreaView>
    )
}

SearchScreen.navigationOptions = navData =>{
    return({
        headerShown: false
    })
}

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: Platform.OS === 'android' ? 20 : 0
    },
    textInputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: colors.primaryShade1,
    },
    textInput: {
        backgroundColor: colors.primaryShade1
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 30
    },
    textInstruction: {
        fontSize: 14,
        marginVertical: 25,
        color: 'grey'
    },
    image:{
        maxHeight: '50%',
        width: '90%',
    }
})

export default SearchScreen;