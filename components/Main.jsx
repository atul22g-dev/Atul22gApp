import React from 'react'
import style from '@/assets/style/style.js'
import { ScrollView, Text } from 'react-native'
import { Paragraph, Avatar } from 'react-native-paper';
import Projects from '@/components/Projects';
import SmoothScrollView from '@/components/SmoothScrollView';

const Main = () => {
    return (
        <SmoothScrollView>
            <ScrollView style={{ backgroundColor: "white" }}>
                {/* Avatar */}
                <Avatar.Image style={style.avatar} size={100} source={require('@/assets/images/icon.png')} />
                {/* Heading */}
                <Text style={style.heading}>atul22g</Text>
                {/* SubHeading */}
                <Text style={style.subheading}>This is All My Things</Text>
                {/* Paragrap */}
                <Paragraph style={style.paragrap}>Most Of The Projects I Made In My Fun Times.</Paragraph>
                <Paragraph style={[style.paragrap, style.spacebottom]}>I you like these projects give it a Star on Github</Paragraph>
                {/* Projects */}
                <Projects API="Projects/index.json" bg="#f2f5fd" title="Projects" demo="Live" />
                {/* Appliction */}
                <Projects API="App/index.json" bg="#e0e0e0" title="Application" demo="Download" />
                {/* Mini - Projects */}
                <Projects API="Mini-Projects/index.json" bg="#ebebeb" title="Mini - Projects" demo="Live" />
                {/* Backend */}
                <Projects API="backend/index.json" bg="#f2f5fd" title="Backend" demo="Live" />
                {/* Libaries */}
                <Projects API="Js_Libaries/index.json" bg="#cdd5cd" title="Libaries" demo="Live" />
                {/* Repositories */}
                <Projects API="Repositories/index.json" bg="#e8e8e8" title="Repositories" demo="Live" />
            </ScrollView>
        </SmoothScrollView>
    )
}

export default Main