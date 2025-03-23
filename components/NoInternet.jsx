import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper';
import style from '@/assets/style/style.js'
import { reloadApp } from '@/func/allFunc';

export default function NoInternet() {
    return (
        <View style={style.NoInternetContainer}>
            <Text style={style.NoInternetText}>No Internet Connection</Text>
            <Button mode="contained" style={style.NoInternetBtn} onPress={reloadApp}>
                Try Again
            </Button>
        </View>
    )
}
