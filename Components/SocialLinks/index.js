import React from 'react'
import { ShareButtons, ShareCounts, generateShareIcon } from 'react-share'

const { VKShareButton, OKShareButton, FacebookShareButton } = ShareButtons
const { VKShareCount, OKShareCount, FacebookShareCount } = ShareCounts

const VKIcon = generateShareIcon('vk')
const OKIcon = generateShareIcon('ok')
const FBIcon = generateShareIcon('facebook')

const myUrl = 'http://google.com'

const SocialLinks = props => (
    <div>
        {/* <VKShareButton url="http://localhost">
            <VKIcon size={24} />
            <VKShareCount url="http://localhost" />
        </VKShareButton>

        <OKShareButton url="http://localhost">
            <OKIcon size={24} />
            <OKShareCount url="http://localhost" />
        </OKShareButton> */}

        <FacebookShareButton url={myUrl}>
            <FBIcon size={24} />
            <FacebookShareCount url={myUrl} />
        </FacebookShareButton>
    </div>
)

export default SocialLinks
