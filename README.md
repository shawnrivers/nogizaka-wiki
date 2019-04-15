# Nogizaka Wiki

Nogizaka Wiki is a Node.js LINE Bot to help you search for information about [Nogizaka46](http://www.nogizaka46.com/).

## Copyrights

Profile images and CD artworks © 乃木坂LLC.

## Usage

Just scan the QR code below in LINE and add it to your contact.

![Nogizaka Wiki](https://user-images.githubusercontent.com/23146992/56123230-09369b80-5faf-11e9-8cbe-8954cf3e409f.png)

## Technologies

- Language: [TypeScript](https://www.typescriptlang.org/)
- Node.js framework: [express](https://expressjs.com/)
- Fetch tool: [request-promise](https://github.com/request/request-promise)
- LINE Bot: [Message API](https://developers.line.biz/en/docs/messaging-api/)

## Features

### Current Features

- Reply with single data in [Flex Message](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/)
  - After you sent a number of the single (currently from 1 to 22), the LINE Bot replies you with a message showing the information about the corresponding single.
  - The information includes:
    - single artwork (Type-A)
    - single number, title, release date
    - songs included in the single (with the song title, type and focus members)

### Upcoming Features

- Search for album data
- Search for song data
- Search for member data
- Use [Rich Menu](https://developers.line.biz/en/docs/messaging-api/using-rich-menus/) to improve the overall user experience
- and more to come...
