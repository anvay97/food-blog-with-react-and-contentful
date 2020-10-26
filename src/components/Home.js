import React from 'react'

const Home = () => {
    return (
        <div>
            <div className="container wrapper post" style={{ marginTop: '5%' }}>
                <h4 className="center">React and Contentful</h4>
                <p>Contentful is a powerful, highly extensible headless Content Management Software (CMS). It is distributed as a cloud based solution under proprietary license. Pricing are subscription based but you have a fairly reasonable free-tier.</p>
                <p>An headless CMS is a CMS that is only delivering data as a JSON (or any other kind of data) payload. It doesn’t serve any kind of frontend code such as HTML page nor CSS. It only delivers small chunks of data that are used to build the view later, that’s the principe of separation of concern over the network.</p>
                <p>Contentful provides a content infrastructure that comprises REST and GraphQL APIs for working with your content. Each of these APIs serve a different purpose, so which one to use depends on what you want to do</p>
                <p>The Content Delivery API (CDA), available at cdn.contentful.com, is a read-only API for delivering content from Contentful to apps, websites and other media. Content is delivered as JSON data, and images, videos and other media as files.</p>
                <p>The Content Management API (CMA), available at api.contentful.com, is a read-write API for managing content. Unlike the Content Delivery API, the management API requires you to authenticate as a Contentful user. You could use the CMA for several use cases</p>
                <p>The Content Preview API, available at preview.contentful.com, is a variant of the CDA for previewing your content before delivering it to your customers. You use the Content Preview API in combination with a "preview" deployment of your website (or a "preview" build of your mobile app) that allows content managers and authors to view their work in-context, as if it were published, using a "preview" access token as though it were delivered by the CDA.</p>
                <p>The Images API, available at images.ctfassets.net, allows you to resize and crop images, change their background color and convert them to different formats. Using our API for these transformations lets you upload high-quality assets, deliver exactly what your app needs, and still get all the benefits of our caching CDN.</p>
                <p>The GraphQL Content API, available at graphql.contentful.com, provides each space in Contentful with a GraphQL schema based on its content types. The schema gets regenerated every time these content types are updated.</p>
            </div>
        </div>
    )
}

export default Home