<template>
    <div :class="{ 'dark text-white-dark': store.semidark }">
        <nav
            class="sidebar fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300">
            <div class="h-full bg-[#000]">
                <div class="flex items-center justify-between px-4 py-6">
                    <NuxtLink to="/" class="main-logo flex shrink-0 items-center">
                        <img class="ml-[5px] w-48 h-16 flex-none"
                            src="https://tft-dna-brand-architects-cc.s3.af-south-1.amazonaws.com/dna-brand-architects-cc-logos/SATA+Conference+Logo+-+2.png"
                            alt="SATA 45 Logo" />
                        <!-- <span class="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 text-white-light lg:inline">45th SATA</span> -->
                    </NuxtLink>
                    <a href="javascript:;"
                        class="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 hover:text-primary rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
                        @click="store.toggleSidebar()">
                        <icon-carets-down class="m-auto rotate-90" />
                    </a>
                </div>
                <client-only>
                    <perfect-scrollbar :options="{
                        swipeEasing: true,
                        wheelPropagation: false,
                    }" class="relative h-[calc(100vh-80px)]">
                        <ul class="relative space-y-0.5 px-4 pt-10 py-0 font-semibold">
                            <h2
                                class="-mx-4 mb-1 flex items-center bg-[#128D2A]/[0.9] px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                <icon-minus class="hidden h-5 w-4 flex-none" />
                                <span class="text-white-light">{{ $t('admin') }}</span>
                            </h2>

                            <li class="nav-item">
                                <ul>
                                    <li class="nav-item">
                                        <NuxtLink to="/admin/agenda" class="group" @click="toggleMobileMenu">
                                            <div class="flex items-center">
                                                <icon-calendar class="shrink-0 " />

                                                <span
                                                    class="text-white-light ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                        $t('agenda')
                                                    }}</span>
                                            </div>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/admin/speakers" class="group" @click="toggleMobileMenu">
                                            <div class="flex items-center">
                                                <icon-user class="shrink-0 group-hover:!text-white" />

                                                <span
                                                    class="text-white-light ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                        $t('speakers')
                                                    }}</span>
                                            </div>
                                        </NuxtLink>
                                    </li>
                                    <li class="nav-item">
                                        <NuxtLink to="/admin/todo" class="group" @click="toggleMobileMenu">
                                            <div class="flex items-center">
                                                <icon-pencil-paper class="shrink-0 group-hover:!text-gray-300" />

                                                <span
                                                    class="text-white-light ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                        $t('things_to_do')
                                                    }}</span>
                                            </div>
                                        </NuxtLink>
                                    </li>
                                    <li class="menu nav-item">
                                        <button type="button" class="nav-link group w-full"
                                            :class="{ active: activeDropdown === 'invoice' }"
                                            @click="activeDropdown === 'invoice' ? (activeDropdown = null) : (activeDropdown = 'invoice')">
                                            <div class="flex items-center">
                                                <icon-play-circle class="shrink-0 group-hover:!text-gray-300" />

                                                <span
                                                    class="text-white-light ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                        $t('media_hub')
                                                    }}</span>
                                            </div>
                                            <div :class="{ '-rotate-90 rtl:rotate-90': activeDropdown !== 'invoice' }">
                                                <icon-caret-down />
                                            </div>
                                        </button>
                                        <vue-collapsible :isOpen="activeDropdown === 'invoice'">
                                            <ul class="sub-menu text-gray-300">
                                                <li>
                                                    <NuxtLink to="/admin/media-hub/content-bites" @click="toggleMobileMenu">{{
                                                        $t('content_bites') }}</NuxtLink>
                                                </li>
                                                <li>
                                                    <NuxtLink to="/admin/media-hub/image-gallery" @click="toggleMobileMenu">{{
                                                        $t('image_gallery') }}</NuxtLink>
                                                </li>
                                            </ul>
                                        </vue-collapsible>
                                    </li>

                                </ul>
                            </li>

                            <h2
                                class="-mx-4 mb-1 flex items-center bg-[#128D2A]/[0.9] px-7 py-3 font-extrabold uppercase dark:bg-dark dark:bg-opacity-[0.08]">
                                <icon-minus class="hidden h-5 w-4 flex-none" />
                                <span class="text-white-light">{{ $t('user') }}</span>
                            </h2>

                            <li class="menu nav-item">
                                <button type="button" class="nav-link group w-full"
                                    :class="{ active: activeDropdown === 'users' }"
                                    @click="activeDropdown === 'users' ? (activeDropdown = null) : (activeDropdown = 'users')">
                                    <div class="flex items-center">
                                        <icon-menu-users class="shrink-0 group-hover:!text-primary" />

                                        <span
                                            class="text-white-light ltr:pl-3 rtl:pr-3 dark:text-[#506690] dark:group-hover:text-white-dark">{{
                                                $t('users') }}</span>
                                    </div>
                                    <div :class="{ '-rotate-90 rtl:rotate-90': activeDropdown !== 'users' }">
                                        <icon-caret-down />
                                    </div>
                                </button>
                                <vue-collapsible :isOpen="activeDropdown === 'users'">
                                    <ul class="sub-menu text-gray-500">
                                        <li>
                                            <NuxtLink  @click="toggleMobileMenu">{{ $t('profile') }}
                                            </NuxtLink>
                                        </li>
                                        <li>
                                            <NuxtLink @click="toggleMobileMenu">{{
                                                $t('account_settings') }}</NuxtLink>
                                        </li>
                                    </ul>
                                </vue-collapsible>
                            </li>
                        </ul>
                        <img src="../../assets/images/Black overlay -  2.png" style="z-index: -1; position: relative;" alt="">
                    </perfect-scrollbar>
                    
                </client-only>
            </div>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';

import { useAppStore } from '@/stores/index';
import VueCollapsible from 'vue-height-collapsible/vue3';
const store = useAppStore();
const activeDropdown: any = ref('');
const subActive: any = ref('');

onMounted(() => {
    setTimeout(() => {
        const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');

        if (selector) {
            selector.classList.add('active');
            const ul: any = selector.closest('ul.sub-menu');
            if (ul) {
                let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link') || [];

                if (ele.length) {
                    ele = ele[0];
                    setTimeout(() => {
                        ele.click();
                    });
                }
            }
        }
    });
});

const toggleMobileMenu = () => {
    if (window.innerWidth < 1024) {
        store.toggleSidebar();
    }
};
</script>
