# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Mantas Rajackas

## Overview.

This app is used for creating different playlists of one's favourite songs. Playlists can be created and deleted, and songs can be added/removed from each playlist. Clicking on a song allows a user to search for it on YouTube or Spotify with the click of a button.

### User Features

- Create/delete multiple playlists of songs.
- Add/remove songs to each playlist.
- View a stats page showing some info about the current set of playlists and songs.
- Search YouTube and Spotify for any song in the playlist

## Setup.

1. From the base folder (containing manifest.json, src, etc.), run 'npm install' to install the required node modules.
2. Run 'npm start' from the same directory to start the app on localhost.
3. Go to 'localhost:3000' in a browser to open the app.

## Data Model Design.

The data model consists of an array of playlist objects. Each playlist has a name, id, and an array of songs. Each song has an ID and details about its name, artist, etc.

~~~
[
  {
    "id": 1,
    "name": "Favourites",
    "songs": 
    [
      {
        "id": 1,
        "name": "Just Wait",
        "artist": "The Reign of Kindo",
        "album": "The Reign of Kindo EP",
        "length": "4:32",
        "rating": "5"
      },
      {
        "id": 2,
        "name": "The Revival",
        "artist": "The Dear Hunter",
        "album": "Act V: Hymns with the Devil in Confessional",
        "length": "5:01",
        "rating": "4"
      }
    ]
  },
  {
    "id": 2,
    "name": "Jazz",
    "songs": 
    [
      {
        "id": 1,
        "name": "Another Sunny Day",
        "artist": "JABBERLOOP",
        "album": "Sememoeru",
        "length": "4:02",
        "rating": "5"
      },
      {
        "id": 2,
        "name": "Moanin'",
        "artist": "Mingus Big Band",
        "album": "Nostalgia In Times Square",
        "length": "9:02",
        "rating": "4"
      },
      {
        "id": 3,
        "name": "Minor Swing",
        "artist": "Django Reinhardt",
        "album": "Djangologie Vol 6 / 1937",
        "length": "3:17",
        "rating": "5"
      }
    ]
  },
  {
    "id": 3,
    "name": "Other",
    "songs":
    [
      {
        "id": 1,
        "name": "Shallow Grave",
        "artist": "Matthew Santos",
        "album": "Quickly Disappearing",
        "length": "4:55",
        "rating": "3"
      }
    ]
  }
]
~~~
## UI Design.

![][component_hierarchy]

>> The component hierarchy of the app.

![][component_model]

>> A prototype model of how the app is layed out, with different components within.

![][app_main]

>> The main view of the app. Playlists can be added/deleted here, an songs can be added/removed from each playlist.

![][app_newsong]

>> Songs are added to playlists with this component.

![][app_stats]

>> A view showing some statistics about the current playlist/song setup.

![][app_external]

>> Clicking either button will open a new tab on YouTube or Spotify, searching for the song.

## Routing.

- / (public) - Displays all of the playlists and songs in each playlist.
- /statistics (public) - Displays some statistics, e.g. playlist with the most songs.
+ /external/playlist-:playlistid/song-:songid (public) - Contains external links to search for the song on YouTube and Spotify.


## Storybook.

![][stories]

[data_model]: ./img/data_model.png
[component_model]: ./img/component_model.png
[component_hierarchy]: ./img/component_hierarchy.png
[app_main]: ./img/app_main.png
[app_newsong]: ./img/app_newsong.png
[app_stats]: ./img/app_stats.png
[app_external]: ./img/app_external.png
[stories]: ./img/stories.png
