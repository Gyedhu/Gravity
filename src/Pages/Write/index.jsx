import React from 'react'
import { Navigation, Search } from '../../Container'
import {
    WriteHeader,
    ScrollView,
    UploadList
} from '../../components'

export default function Write() {
    return (
        <>
            <Navigation />
            <ScrollView>
                <WriteHeader />
                <Search />
                <UploadList
                    currentList="questions"
                />
            </ScrollView>
        </>
    )
}
