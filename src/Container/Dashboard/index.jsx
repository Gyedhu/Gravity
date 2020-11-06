import React from 'react'
import { DashboardContainer, IconTextBox } from '../../components'

export default function Dashboard() {
    return (
        <DashboardContainer>
            <IconTextBox
                iconClass="ri-pen-nib-line"
                header="Write"
                text="Write and upload your questions, answer, ideas, thoughts"
            />
            <IconTextBox
                iconClass="ri-chat-3-line"
                header="Chat"
                text="Chat and share resources and discuss with your friends"
            />
            <IconTextBox
                iconClass="ri-search-2-line"
                header="Search"
                text="Search for questions, answers, ideas, and other resources"
            />
        </DashboardContainer>
    )
}
