import Song from "types/Song"

export const useCurrentSong = () => {
    return useState<Song | null>('currentSong', () => null);
}