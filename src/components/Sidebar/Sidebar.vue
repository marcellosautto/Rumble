<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from "./state.ts";

export default {
  props: {},
  components: {SidebarLink},
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth };
  },
};
</script>

<template>
    <div class="sidebar" :style="{ width: sidebarWidth }">
        <h1 class="title">
            <span v-if="collapsed">
                <div>R</div>
            </span>
            <span v-else>Rumble</span>
        </h1>

    <SidebarLink to="/" icon="fas fa-home">Home</SidebarLink>
    <SidebarLink to="/About" icon="fas fa-image">About</SidebarLink>
    <SidebarLink to="/Preferences" icon="fas fa-list-alt">Preferences</SidebarLink>
    <SidebarLink to="/EateryList" icon="fas fa-cutlery">Eatery List</SidebarLink>

      <span
        class="collapse__icon"
        :class="{ 'rotate__180': collapsed }"
        @click="toggleSidebar"
      >
        <i class="fas fa-angle-double-left" />
      </span>
    </div>
</template>

<style>
:root {
  --sidebar-bg-color: rgb(11, 57, 63);
  --sidebar-item-hover: rgba(166, 192, 197, 0.733);
  --sidebar-item-active: rgba(115, 130, 133, 0.733);
}
</style>

<style scoped>

.title{
  text-align: center;
  padding: 0.2em;
}

.sidebar {
  color: white;
  background-image: linear-gradient(90deg, var(--sidebar-bg-color), rgb(142, 197, 204));

  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;

  transition: 0.3s ease;

  display: flex;
  flex-direction: column;
}

.sidebar h1{
  height: 2.5em;
}

.collapse__icon {
  position: absolute;
  bottom: 0;
  padding: 0.75em;

  transition: 0.2s linear;
  color: rgba(255, 255, 255, 0.7);
}

.collapse__icon:hover{
    cursor: pointer;
}

.rotate__180{
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>
