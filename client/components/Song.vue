<script setup lang="ts">
import { PlayIcon, EllipsisHorizontalIcon, HeartIcon } from '@heroicons/vue/20/solid';
import Song from '../types/Song';

defineProps<{ song: Song, row: number }>();
const emit = defineEmits<{(e: 'selected'): void}>();

const isPlayVisible = ref(false);
const currentSong = useCurrentSong();

function togglePlay(song: Song) {
    currentSong.value = song;
}
</script>

<template>
    <div
        @click="() => togglePlay(song)"
        v-on:mouseenter="isPlayVisible = true"
        v-on:mouseleave="isPlayVisible = false"
        class="cursor-pointer w-full relative flex items-center space-x-4 px-4 py-4 sm:px-6 lg:px-8 border-b hover:bg-gray-800 focus:bg-gray-800 border-gray-800">
        <div class="relative flex text-center items-center justify-center">
            <button
                :class="[isPlayVisible ? 'opacity-70' : 'opacity-0', 'ease-out duration-150 transition-opacity hover:opacity-100']">
                <PlayIcon
                    class="h-5 w-5 flex-none text-white"
                    aria-hidden="true"
                />
            </button>
            <div :class="[!isPlayVisible ? 'opacity-70' : 'opacity-0', 'ease-out duration-150', 'absolute font-semibold text-white']">
                <span>{{ row }}</span>
            </div>
        </div>
        <div class="min-w-0 flex-auto">
            <div class="flex items-center gap-x-3">
                <h2 class="min-w-0 text-sm font-semibold leading-6 text-white">
                <div class="flex gap-x-2">
                    <span class="truncate">{{ song.title }}</span>
                    <span class="absolute inset-0" />
                </div>
                </h2>
            </div>
            <div class="flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                <p class="truncate">{{ song.artist }}</p>
                <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300">
                <circle cx="1" cy="1" r="1" />
                </svg>
                <p class="whitespace-nowrap">{{ song.album }}</p>
            </div>
        </div>
        <div class="flex gap-x-5">
            <button class="ease-out duration-500 transition-opacity opacity-70 hover:opacity-100">
                <HeartIcon
                    class="h-5 w-5 flex-none text-green-400"
                    aria-hidden="true"
                />
            </button>
            <button class="ease-out duration-500 transition-opacity opacity-70 hover:opacity-100">
                <EllipsisHorizontalIcon
                    class="h-5 w-5 flex-none text-white"
                    aria-hidden="true"
                />
            </button>
        </div>
    </div>
</template>