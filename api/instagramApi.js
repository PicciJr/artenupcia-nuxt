import axios from 'axios'

const BASE_URL = 'https://www.instagram.com/begonia.ilustracion/'

const apiClient = axios.create({
  baseURL: BASE_URL,
  withCredentials: false
})

export default {
  getUserMedia() {
    let jsonObject = null
    const postsArray = []
    apiClient.get(BASE_URL).then(res => {
      jsonObject = res.data
        .match(
          /<script type="text\/javascript">window\._sharedData = (.*)<\/script>/
        )[1]
        .slice(0, -1)
      const userInfo = JSON.parse(jsonObject)
      console.log('el user info ' + JSON.stringify(userInfo.entry_data))

      // Retrieve only the first 10 results
      const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
        0,
        10
      )
      for (let media of mediaArray) {
        const node = media.node
        // Process only if is an image
        if (node.__typename && node.__typename !== 'GraphImage') {
          continue
        }

        // Push the thumbnail src and the public URL to redirect if user clicks in the array
        let newPost = {
          imgUrl: node.thumbnail_src,
          shortCode: node.shortcode
        }
        console.log('nuevo post' + newPost)
        postsArray.push(newPost)
      }
    })
    return postsArray
  }
}
