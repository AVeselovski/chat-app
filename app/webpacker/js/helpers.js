/* eslint-disable */
export function scrollToBottom () {
  const feed = $('#msg-feed')
  
  if (feed.length > 0) {
    feed.scrollTop(feed[0].scrollHeight)
  }
}
