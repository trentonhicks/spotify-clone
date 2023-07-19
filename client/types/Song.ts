type Genre = 'Pop'
    | 'Rock'
    | 'Funk'
    | 'Jazz'
    | 'Classical'
    | 'Bluegrass'
    | 'Hip Hop'
    | 'R&B'
    | 'Blues'
    | 'Gospel'
    | 'Electronic'
    | 'Dance';

type Song = {
    title: string,
    artist: string,
    album: string,
    genre: Genre,
    year: number,
};

export default Song;