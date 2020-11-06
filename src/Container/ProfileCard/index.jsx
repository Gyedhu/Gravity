import React from 'react'
import { connect } from 'react-redux'
import { ProfileCardContainer, ProfileImage, UserInfo } from '../../components'

export const ProfileCard = () => {
    return (
        <div>
            <ProfileCardContainer>
                <ProfileImage />
                <UserInfo />
            </ProfileCardContainer>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileCard)
