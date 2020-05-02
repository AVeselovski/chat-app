/* eslint-disable */
import consumer from './consumer'
import { scrollToBottom } from '../js/helpers'

consumer.subscriptions.create('ChatroomChannel', {
  connected () {
    // Called when the subscription is ready for use on the server
  },

  disconnected () {
    // Called when the subscription has been terminated by the server
  },

  received (data) {
    // Called when there's incoming data on the websocket for this channel
    const who = data.message.user_id == window.appUserId ? 'self' : 'them'
    const feed = $('#msg-feed')

    const msgPill = $(`<div class="msg-pill msg-pill--${who}"></div>`)
    if (who === 'them') {
      msgPill.append(`<small>${data.user}</small>`)
    }
    msgPill.append(data.message.body)
    msgPill.append(`<span class="msg-date">Just now...</span>`)
    feed.append(msgPill)

    scrollToBottom()
  }
})
