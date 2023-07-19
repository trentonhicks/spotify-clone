<script setup lang="ts">
const songs = [
  {
    "id": 1,
    "title": "Shape of You",
    "artist": "Ed Sheeran",
    "album": "÷ (Divide)",
    "genre": "Pop",
    "year": 2017,
    "liked": true,
  },
  {
    "id": 2,
    "title": "Bohemian Rhapsody",
    "artist": "Queen",
    "album": "A Night at the Opera",
    "genre": "Rock",
    "year": 1975,
    "liked": true,
  },
  {
    "id": 3,
    "title": "Rolling in the Deep",
    "artist": "Adele",
    "album": "21",
    "genre": "Pop",
    "year": 2010,
    "liked": true,
  },
  {
    "id": 4,
    "title": "Hotel California",
    "artist": "Eagles",
    "album": "Hotel California",
    "genre": "Rock",
    "year": 1976,
    "liked": true,
  },
  {
    "id": 5,
    "title": "Uptown Funk",
    "artist": "Mark Ronson ft. Bruno Mars",
    "album": "Uptown Special",
    "genre": "Funk",
    "year": 2014,
    "liked": true,
  },
  {
    "id":6,
    "title": "Billie Jean",
    "artist": "Michael Jackson",
    "album": "Thriller",
    "genre": "Pop",
    "year": 1982,
    "liked": true,
  },
  {
    "id":6,
    "title": "Billie Jean",
    "artist": "Michael Jackson",
    "album": "Thriller",
    "genre": "Pop",
    "year": 1982,
    "liked": true,
  },
  {
    "id":6,
    "title": "Billie Jean",
    "artist": "Michael Jackson",
    "album": "Thriller",
    "genre": "Pop",
    "year": 1982,
    "liked": true,
  },
  {
    "id":6,
    "title": "Billie Jean",
    "artist": "Michael Jackson",
    "album": "Thriller",
    "genre": "Pop",
    "year": 1982,
    "liked": true,
  },
  {
    "id":6,
    "title": "Billie Jean",
    "artist": "Michael Jackson",
    "album": "Thriller",
    "genre": "Pop",
    "year": 1982,
    "liked": true,
  },
  {
    "id":6,
    "title": "Billie Jean",
    "artist": "Michael Jackson",
    "album": "Thriller",
    "genre": "Pop",
    "year": 1982,
    "liked": true,
  },
];
</script>

<template>
    <PageHeader title="All Songs" />
    <div>
        <Song
            v-for="(song, index) in songs"
            :key="song.title"
            :song="song"
            :row="index + 1"
        />
    </div>
</template>