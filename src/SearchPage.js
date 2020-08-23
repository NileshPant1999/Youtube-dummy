import React from 'react'
import "./SearchPage.css"
import ChannelRow from "./ChannelRow.js"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import VideoRow from "./VideoRow.js"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://yt3.ggpht.com/a-/AOh14GgwaiCp63JOClbTXswJ4u8x9IXpD_qDn3tt3g=s68-c-k-c0x00ffffff-no-rj-mo"
                channel="Nilesh Pant"
                verified
                subs="999k"
                noOfVideos={124}
                description="you can find awesome programming lessons here> Also, except programming tips and tricks that will take your coding to the mext level"
            />

            <hr />
            <VideoRow
                description="A little bit about me, I’m a 21yo developer from Tunisia (North Africa) with no special superpowers. The only superpower I have is my passion for coding and helping others."
                image="https://images.indianexpress.com/2019/11/ms-dhoni-1200.jpg"
                views="2.2M Views"
                subs="567k"
                timestamp="1 days ago"
                title="Legecy of MS Dhoni"
                channel="ICC"
            />
            <VideoRow
                description="A little bit about me, I’m a 21yo developer from Tunisia (North Africa) with no special superpowers. The only superpower I have is my passion for coding and helping others."
                image="https://images.indianexpress.com/2019/11/ms-dhoni-1200.jpg"
                views="2.2M Views"
                subs="567k"
                timestamp="1 days ago"
                title="Legecy of MS Dhoni"
                channel="ICC"
            />
            <VideoRow
                description="A little bit about me, I’m a 21yo developer from Tunisia (North Africa) with no special superpowers. The only superpower I have is my passion for coding and helping others."
                image="https://images.indianexpress.com/2019/11/ms-dhoni-1200.jpg"
                views="2.2M Views"
                subs="567k"
                timestamp="1 days ago"
                title="Legecy of MS Dhoni"
                channel="ICC"
            />
            <VideoRow
                description="A little bit about me, I’m a 21yo developer from Tunisia (North Africa) with no special superpowers. The only superpower I have is my passion for coding and helping others."
                image="https://images.indianexpress.com/2019/11/ms-dhoni-1200.jpg"
                views="2.2M Views"
                subs="567k"
                timestamp="1 days ago"
                title="Legecy of MS Dhoni"
                channel="ICC"
            />
            <VideoRow
                description="A little bit about me, I’m a 21yo developer from Tunisia (North Africa) with no special superpowers. The only superpower I have is my passion for coding and helping others."
                image="https://images.indianexpress.com/2019/11/ms-dhoni-1200.jpg"
                views="2.2M Views"
                subs="567k"
                timestamp="1 days ago"
                title="Legecy of MS Dhoni"
                channel="ICC"
            />
            <VideoRow
                description="A little bit about me, I’m a 21yo developer from Tunisia (North Africa) with no special superpowers. The only superpower I have is my passion for coding and helping others."
                image="https://images.indianexpress.com/2019/11/ms-dhoni-1200.jpg"
                views="2.2M Views"
                subs="567k"
                timestamp="1 days ago"
                title="Legecy of MS Dhoni"
                channel="ICC"
            />
            <VideoRow
                description="A little bit about me, I’m a 21yo developer from Tunisia (North Africa) with no special superpowers. The only superpower I have is my passion for coding and helping others."
                image="https://images.indianexpress.com/2019/11/ms-dhoni-1200.jpg"
                views="2.2M Views"
                subs="567k"
                timestamp="1 days ago"
                title="Legecy of MS Dhoni"
                channel="ICC"
            />
        </div>
    )
}

export default SearchPage
