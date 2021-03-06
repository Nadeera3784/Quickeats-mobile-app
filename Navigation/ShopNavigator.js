import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import CategoriesScreen from '../screens/Home/CategoriesScreen';
import CategoryMealsScreen from '../screens/Home/CategoryMealsScreen';
import MealDetailsScreen from '../screens/Home/MealDetailsScreen';
import SearchScreen from '../screens/Search/SearchScreen';
import ExploreScreen from '../screens/Search/ExploreScreen';
import SearchResultScreen from '../screens/Search/SearchResultScreen';
import FavoritesScreen from '../screens/Favorites/FavoritesScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import colors from '../constants/colors';
import { HomeTabIcon, SearchTabIcon, OrderTabIcon, FavoriteTabIcon, ProfileTabIcon, CartTabIcon } from '../components/TabBarIcons';
import CartScreen from '../screens/Cart/CartScreen';
import OrdersOverviewScreen from '../screens/Orders/OrdersOverviewScreen';
import TrackOrderScreen from '../screens/Orders/TrackOrderScreen';
import AuthIntroScreen from '../screens/Auth/AuthIntroScreen';
import AuthMainScreen from '../screens/Auth/AuthMainScreen';
import StartUpScreen from '../screens/StartUpScreen';
import GetLocationMapScreen from '../screens/Profile/GetLocationMapScreen';
import {OnboardingScreen1, OnboardingScreen2, OnboardingScreen3} from '../screens/Onboarding/OnboardingScreens';

const defaultStackNavOptions = {
    headerTintColor: 'black',
    headerStyle: {
        backgroundColor: colors.primaryShade1
    },
    headerBackTitle: 'Back',
}

const HomeNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailsScreen
},{
    defaultNavigationOptions: defaultStackNavOptions,
    navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => <HomeTabIcon focused = {focused} tintColor = {tintColor}/>
        
    }
})

const SearchNavigator = createStackNavigator({
    Search: SearchScreen,
    Explore: ExploreScreen,
    SearchResults: SearchResultScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailsScreen
},{
    defaultNavigationOptions: defaultStackNavOptions,
    navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => <SearchTabIcon focused = {focused} tintColor = {tintColor}/>
        
    }
})

const CartNavigator = createStackNavigator({
    Cart: CartScreen
},{
    defaultNavigationOptions: defaultStackNavOptions,
    navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => <CartTabIcon focused = {focused} tintColor = {tintColor}/>,
    }
})


const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailsScreen
},{
    defaultNavigationOptions: defaultStackNavOptions,
    navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => <FavoriteTabIcon focused = {focused} tintColor = {tintColor}/>
    }
})

const ProfileNavigator = createStackNavigator({
    Profile: ProfileScreen,
    Order: OrdersOverviewScreen,
    TrackOrder: TrackOrderScreen,
    Location: GetLocationMapScreen
},{
    defaultNavigationOptions: defaultStackNavOptions,
    navigationOptions: {
        tabBarIcon: ({focused, tintColor}) => <ProfileTabIcon focused = {focused} tintColor = {tintColor}/>
    }
})

const TabNavigator = createBottomTabNavigator({
    Home: HomeNavigator,
    Search: SearchNavigator,
    Cart: CartNavigator,
    Favorites: FavoritesNavigator,
    Profile: ProfileNavigator
},{
    tabBarOptions: {
        showLabel: false,
        activeTintColor: '#302F2F',
        inactiveTintColor: '#A9A6A6',
        style:{
            backgroundColor: colors.primaryShade1,
            height: 60,
            borderTopWidth: 0,
            paddingVertical: 25,
        }
    }
})

const AuthNavigator = createStackNavigator({
    AuthIntro: AuthIntroScreen,
    AuthMain: AuthMainScreen
}, {
    defaultNavigationOptions: {
        headerShown: false
    }
})

const OnboardingNavigator = createSwitchNavigator({
    Onboarding1: OnboardingScreen1,
    Onboarding2: OnboardingScreen2,
    Onboarding3: OnboardingScreen3
})

const MainNavigator = createSwitchNavigator({
    StartUp: StartUpScreen,
    Onboarding: OnboardingNavigator,
    Auth: AuthNavigator,
    Shop: TabNavigator
})



export default createAppContainer(MainNavigator)