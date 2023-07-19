<script setup lang="ts">
import {
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue';

import { XMarkIcon } from '@heroicons/vue/24/outline';

import {
    Bars3Icon,
    PlusCircleIcon,
    MagnifyingGlassIcon,
    HeartIcon,
    RectangleStackIcon,
    PlayCircleIcon,
    ForwardIcon,
    BackwardIcon,
    ArrowsRightLeftIcon,
    ArrowPathRoundedSquareIcon
} from '@heroicons/vue/20/solid';
  
const navigation = [
    { name: 'Create Playlist', href: '/create-playlist', icon: PlusCircleIcon, current: false },
    { name: 'Liked Songs', href: '/liked-songs', icon: HeartIcon, current: false },
    { name: 'All Songs', href: '/', icon: RectangleStackIcon, current: true },
];

const teams = [
    { id: 1, name: 'Planetaria', href: '#', initial: 'P', current: false },
    { id: 2, name: 'Protocol', href: '#', initial: 'P', current: false },
    { id: 3, name: 'Tailwind Labs', href: '#', initial: 'T', current: false },
];

const currentSong = useCurrentSong();

const sidebarOpen = ref(false);
</script>

<template>
  <div class="flex flex-col">
    <div>
      <TransitionRoot as="template" :show="sidebarOpen">
        <Dialog as="div" class="relative z-50 xl:hidden" @close="sidebarOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-900/80" />
          </TransitionChild>

          <div class="fixed inset-0 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
              <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
                <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                      <span class="sr-only">Close sidebar</span>
                      <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <!-- Sidebar component, swap this element with another sidebar if you like -->
                <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-gray-900 px-6 ring-1 ring-white/10">
                  <div class="flex h-16 shrink-0 items-center">
                    <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
                  </div>
                  <nav class="flex flex-1 flex-col">
                    <ul role="list" class="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" class="-mx-2 space-y-1">
                          <li v-for="item in navigation" :key="item.name">
                            <a :href="item.href" :class="[item.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                              <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                              {{ item.name }}
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <div class="text-xs font-semibold leading-6 text-gray-400">Playlists</div>
                        <ul role="list" class="-mx-2 mt-2 space-y-1">
                          <li v-for="team in teams" :key="team.name">
                            <a :href="team.href" :class="[team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                              <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">{{ team.initial }}</span>
                              <span class="truncate">{{ team.name }}</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>

      <!-- Static sidebar for desktop -->
      <div class="hidden xl:fixed xl:inset-y-0 xl:z-50 xl:flex xl:w-72 xl:flex-col">
        <!-- Sidebar component, swap this element with another sidebar if you like -->
        <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-black/10 px-6 ring-1 ring-white/5">
          <div class="flex h-16 shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company" />
          </div>
          <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
              <li>
                <ul role="list" class="-mx-2 space-y-1">
                  <li v-for="item in navigation" :key="item.name">
                    <NuxtLink :to="item.href" active-class="bg-gray-800 text-white" :class="['text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                      <component :is="item.icon" class="h-6 w-6 shrink-0" aria-hidden="true" />
                      {{ item.name }}
                    </NuxtLink>
                  </li>
                </ul>
              </li>
              <li>
                <div class="text-xs font-semibold leading-6 text-gray-400">Playlists</div>
                <ul role="list" class="-mx-2 mt-2 space-y-1">
                  <li v-for="team in teams" :key="team.name">
                    <a :href="team.href" :class="[team.current ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-800', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                      <span class="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border border-gray-700 bg-gray-800 text-[0.625rem] font-medium text-gray-400 group-hover:text-white">{{ team.initial }}</span>
                      <span class="truncate">{{ team.name }}</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div class="xl:pl-72">
        <!-- Sticky search header -->
        <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-6 border-b border-white/5 bg-gray-900 px-4 shadow-sm sm:px-6 lg:px-8">
          <button type="button" class="-m-2.5 p-2.5 text-white xl:hidden" @click="sidebarOpen = true">
            <span class="sr-only">Open sidebar</span>
            <Bars3Icon class="h-5 w-5" aria-hidden="true" />
          </button>

          <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <form class="flex flex-1" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="relative w-full">
                <MagnifyingGlassIcon class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500" aria-hidden="true" />
                <input id="search-field" class="block h-full w-full border-0 bg-transparent py-0 pl-8 pr-0 text-white focus:ring-0 sm:text-sm" placeholder="Search..." type="search" name="search" />
              </div>
            </form>
          </div>
        </div>

        <main style="padding-bottom: 180px">
          <slot />
        </main>
      </div>
    </div>
    <div
      class="p-5 flex items-center justify-center w-full bg-gray-900 border-t border-gray-700 fixed bottom-0 z-50"
      style="height: 80px;">
      <div class="absolute left-10 top-1/2 -translate-y-1/2" v-if="currentSong">
        <div class="text-white text-xs font-semibold">
          {{ currentSong.title }}
        </div>
      </div>
      <div class="flex gap-x-4 items-center justify-center">
        <button :class="['mr-1 opacity-60 ease-out duration-150 transition-opacity hover:opacity-100']">
          <ArrowsRightLeftIcon
              class="h-6 w-6 flex-none text-white"
              aria-hidden="true"
          />
        </button>
        <button :class="['opacity-60 ease-out duration-150 transition-opacity hover:opacity-100']">
          <BackwardIcon
              class="h-5 w-5 flex-none text-white"
              aria-hidden="true"
          />
        </button>
        <button :class="['ease-out duration-150 transition-opacity hover:opacity-100']">
          <PlayCircleIcon
              class="h-12 w-12 flex-none text-white"
              aria-hidden="true"
          />
        </button>
        <button :class="['opacity-60 ease-out duration-150 transition-opacity hover:opacity-100']">
          <ForwardIcon
              class="h-5 w-5 flex-none text-white"
              aria-hidden="true"
          />
        </button>
        <button :class="['ml-1 opacity-60 ease-out duration-150 transition-opacity hover:opacity-100']">
          <ArrowPathRoundedSquareIcon
              class="h-5 w-5 flex-none text-white"
              aria-hidden="true"
          />
        </button>
      </div>
    </div>
  </div>
</template>